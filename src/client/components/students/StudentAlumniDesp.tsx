import React from 'react'
import { StudentAlumniProfileSummary } from './StudentAlumniProfileSummary'

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
  }

const StudentAlumniDesp = () => {
  return (
    <div>
        <main className="min-h-screen bg-gray-100 p-0">
      <div className="container mx-auto space-y-12">
        <div className="text-start  mb-4">
          {/* <h1 className="text-3xl font-bold text-foreground mb-2">Professional Summary</h1> */}
          <p className="font-bold text-2xl px-7 pt-2 text-[#e7000b]">Alumni profile</p>
          <div className='py-4'>
          <StudentAlumniProfileSummary {...sampleAlumniData} />

          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default StudentAlumniDesp