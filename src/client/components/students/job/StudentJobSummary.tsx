import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  GraduationCap,
  User,
  Hash,
  Clock,
  ExternalLink,
  BadgeCheckIcon,
} from "lucide-react";

interface JobDetailsSummaryProps {
  companyName: string;
  location: string;
  jobDescription: string;
  applyLink: string;
  applyLastDate: string;
  jobRole: string;
  salary: string;
  alumniName: string;
  registerNo: string;
  passedOutYear: string;
  department: string;
  otherStuff?: string[];
}

export function StudentJobSummary({
  companyName,
  location,
  jobDescription,
  applyLink,
  applyLastDate,
  jobRole,
  salary,
  alumniName,
  registerNo,
  passedOutYear,
  department,
  otherStuff = [],
}: JobDetailsSummaryProps) {
  return (
    <Card className="w-[1200px] mx-auto bg-white border-gray-200 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#e7000b]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {companyName}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{location}</span>
                </div>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-[#e7000b]">{jobRole}</h2>
          </div>
          <Badge
            variant="secondary"
            className="bg-emerald-50 text-[#e7000b] border-emerald-200"
          >
            <BadgeCheckIcon className="size-6 pr-2" />
            Verified
          </Badge>
        </div>
        <p className="text-sm">{salary}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Job Description Section */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-900">
            Job Description
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {jobDescription}
          </p>
        </div>

        <Separator className="bg-gray-200" />

        {/* Alumni Information Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#e7000b]" />
            Alumni Connection
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#e7000b]" />
                  <span className="text-sm font-medium text-gray-900">
                    Alumni Name
                  </span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{alumniName}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-[#e7000b]" />
                  <span className="text-sm font-medium text-gray-900">
                    Register No
                  </span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{registerNo}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#e7000b]" />
                  <span className="text-sm font-medium text-gray-900">
                    Passed Out Year
                  </span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{passedOutYear}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#e7000b]" />
                  <span className="text-sm font-medium text-gray-900">
                    Department
                  </span>
                </div>
                <p className="text-sm text-gray-600 ml-6">{department}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Application Details Section */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">
            Application Details
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>
                Apply by:{" "}
                <span className="font-medium text-gray-900">
                  {applyLastDate}
                </span>
              </span>
            </div>
            <Button
              asChild
              className="bg-[#e7000b] hover:bg-[#e7000b] text-white"
            >
              <a href={applyLink} target="_blank" rel="noopener noreferrer">
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Additional Information Section */}
        {otherStuff && otherStuff.length > 0 && (
          <>
            <Separator className="bg-gray-200" />
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900">
                Additional Information
              </h3>
              <div className="flex flex-wrap gap-2">
                {otherStuff.map((item, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs border-gray-300 text-gray-700"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
