import { JobDetailsSummary } from "./JobDetailsSummary"

export default function JobDesp() {
  const sampleJobData = {
    companyName: "TechCorp Solutions",
    location: "San Francisco, CA",
    jobDescription:
      "We are seeking a talented Software Engineer to join our dynamic team. You will be responsible for developing scalable web applications, collaborating with cross-functional teams, and contributing to our innovative products. The ideal candidate should have strong problem-solving skills and experience with modern web technologies.",
    applyLink: "https://example.com/apply",
    applyLastDate: "December 31, 2024",
    jobRole: "Senior Software Engineer",
    salary: "Salary : 10LPA - 17LPA",
    alumniName: "Sarah Johnson",
    registerNo: "CS2019001",
    passedOutYear: "2023",
    department: "Computer Science Engineering",
    otherStuff: ["Remote Work Available", "Health Insurance", "Stock Options", "Flexible Hours", "Learning Budget"],
  }

  return (
    <main className="min-h-screen bg-background p-1">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Details Summary</h1>
          <p className="text-muted-foreground">Professional job listing with alumni connections</p>
        </div>

        <JobDetailsSummary {...sampleJobData} />
      </div>
    </main>
  )
}
