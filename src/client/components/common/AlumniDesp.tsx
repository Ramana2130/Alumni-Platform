import React, { useEffect, useState } from "react";
import { AlumniProfileSummary } from "./AlumniProfileSummary";
import { useParams } from "react-router-dom";
import { getAlumniFullProfile } from "@/services/alumniservices";

const sampleAlumniData = {
  name: "Sarah Johnson",
  dept: "Computer Science Engineering",
  reg_no: "CS2019001",
  year_of_joining: "2019",
  year_of_passing: "2023",
  current_status: "Working Professional",
  company_name: "TechCorp Solutions",
  designation: "Senior Software Engineer",
  job_location: "San Francisco, CA",
  success_stories:
    "Led the development of a revolutionary AI-powered analytics platform that increased client efficiency by 40%. Mentored 15+ junior developers and successfully transitioned the entire team to modern cloud architecture. Recognized as 'Employee of the Year' for outstanding technical leadership and innovation.",
  location: "San Francisco, CA",
};

const AlumniDesp = () => {
  const { id } = useParams<{ id: string }>(); // expects route like /alumni/:id
  const [alumni, setAlumni] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const data = await getAlumniFullProfile(Number(id));

        setAlumni(data);
        console.log(data);
      } catch (err) {
        setAlumni(null);
      } finally {
        setLoading(false);
      }
    };
    fetchAlumni();
  }, [id]);

  return (
    <div>
      <main className="min-h-screen bg-gray-100 p-0">
        <div className="container mx-auto space-y-6">
          <div className="text-start px-8">
            {/* <h1 className="text-3xl font-bold text-foreground mb-2">Professional Summary</h1> */}
            <p className="font-bold text-2xl pt-3">Alumni profile summary</p>
          </div>

          <section>
            {loading ? (
              <div className="p-8 text-center">Loading...</div>
            ) : !alumni ? (
              <div className="p-8 text-center text-red-500">
                Alumni not found.
              </div>
            ) : (
              <AlumniProfileSummary
                name={alumni.name}
                dept={alumni.department}
                reg_no={alumni.registerNumber}
                year_of_joining={alumni.yearOfJoining}
                year_of_passing={alumni.yearOfPassing}
                current_status={alumni.currentStatus}
                companyName={alumni.company_name}
                designation={alumni.designation}
                jobLocation={alumni.job_location}
                successStories={alumni.success_stories}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default AlumniDesp;
