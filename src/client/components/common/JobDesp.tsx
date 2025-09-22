import { useEffect, useState } from "react"
import { JobDetailsSummary } from "./JobDetailsSummary"
import { getJobPostingById } from "@/services/jobservices"
import { useParams } from "react-router-dom"

export default function JobDesp() {
  const [job, setJob] = useState<any>(null)
  const {id} = useParams<{ id: string }>();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobPostingById(Number(id)) // pass jobId dynamically
        setJob(data)
        console.log(data)
      } catch (err) {
        console.error("Error fetching job:", err)
      }
    }
    fetchJob()
  }, [])

  return (
    <main className="min-h-screen bg-background p-1">
      <div className="container mx-auto py-2">
        {/* <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Details Summary</h1>
          <p className="text-muted-foreground">Professional job listing with alumni connections</p>
        </div> */}

        <JobDetailsSummary
          companyName={job?.job_title}
          job_title={job?.job_title}
          location={job?.location}
          jobDescription={job?.overview}
          applyLink={job?.apply_url}
          applyLastDate={job?.application_deadline}
          jobRole={job?.role}
          salary={job?.salary_package}
        />
      </div>
    </main>
  )
}
