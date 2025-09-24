import { useEffect, useState } from "react";
import { getJobPostingById } from "@/services/jobservices";
import { useParams } from "react-router-dom";
import { JobDetailsSummary } from "@/components/common/JobDetailsSummary";

export default function StudentsJobDesp() {
  const [job, setJob] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobPostingById(Number(id)); // pass jobId dynamically
        setJob(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching job:", err);
      }
    };
    fetchJob();
  }, []);

  return (
    <main className="min-h-screen bg-background p-1">
      <div className="container mx-auto py-2">
        {/* <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Details Summary</h1>
          <p className="text-muted-foreground">Professional job listing with alumni connections</p>
        </div> */}

        <JobDetailsSummary
          company_name={job?.company_name}
          job_title={job?.job_title}
          location={job?.location}
          jobDescription={job?.overview}
          applyLink={job?.apply_link}
          applyLastDate={job?.application_deadline}
          jobRole={job?.role}
          salary={job?.salary_package}
          required_qualifications={job?.required_qualifications}
          benefits={job?.benefits}
        />
      </div>
    </main>
  );
}
