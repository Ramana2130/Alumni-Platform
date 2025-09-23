import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Building2, MapPin, Calendar, DollarSign, GraduationCap, User, Hash, Clock, ExternalLink, BadgeCheckIcon } from "lucide-react"

interface JobDetailsSummaryProps {
  company_name: string
  job_title: string
  location: string
  jobDescription: string
  applyLink: string
  applyLastDate: string
  jobRole: string
  salary: string
  required_qualifications: string
  benefits?: string[]
}

export function JobDetailsSummary({
  company_name,
  job_title,
  location,
  jobDescription,
  applyLink,
  applyLastDate,
  jobRole,
  required_qualifications,
  salary,
  benefits = [],
}: JobDetailsSummaryProps) {
  // Format date to dd-mm-yyyy
function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
  return (
    <Card className="w-[1200px] mx-auto bg-white border-gray-200 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{company_name}</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{location}</span>
                </div>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-emerald-700">{job_title}</h2>
          </div>
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            <BadgeCheckIcon className="size-6 pr-2" />
            Verified
          </Badge>
        </div>
        <p className="text-sm">
            {salary}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Job Description Section */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-900">Job Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{jobDescription}</p>
        </div>

        <Separator className="bg-gray-200" />
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-900">Required Qualifications</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{required_qualifications}</p>
        </div>

        {/* Alumni Information Section */}
        {/* <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            Alumni Connection
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-900">Alumni Name</span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{alumniName}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-900">Register No</span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{registerNo}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-900">Passed Out Year</span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{passedOutYear}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-900">Department</span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{department}</p>
              </div>
            </div>
          </div>
        </div> */}

        <Separator className="bg-gray-200" />

        {/* Application Details Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">Application Details</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>
                Apply by: <span className="font-medium text-gray-900">{formatDate(applyLastDate)}</span>
              </span>
            </div>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Additional Information Section */}
        {benefits && benefits.length > 0 && (
          <>
            <Separator className="bg-gray-200" />
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900">Additional Information</h3>
              <div className="flex flex-wrap gap-2">
                {/* {benefits.map((item, index) => ( */}
                  <Badge  variant="outline" className="text-xs border-gray-300 text-gray-700">
                    {benefits}
                  </Badge>
                {/* ))} */}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
