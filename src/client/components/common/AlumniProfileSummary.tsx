import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, GraduationCap, Building2, MapPin, Briefcase, Trophy, Mail, Phone, BadgeCheck, MessageSquare } from "lucide-react"

interface AlumniProfileSummaryProps {
  name: string
  dept: string
  reg_no: string
  year_of_joining: string
  year_of_passing: string
  current_status: string
  company_name: string
  designation: string
  job_location: string
  success_stories: string
  location: string
}

export function AlumniProfileSummary({
  name,
  dept,
  reg_no,
  year_of_joining,
  year_of_passing,
  current_status,
  company_name,
  designation,
  job_location,
  success_stories,
  location,
}: AlumniProfileSummaryProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg border-0 bg-amber-50 text-amber-950">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold bg-amber-600">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-balance text-amber-950">{name}</h2>
              <p className="text-lg font-medium text-amber-700">{designation}</p>
              <p className="text-sm opacity-80">{company_name}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-white font-medium bg-green-500">
            <BadgeCheck className="size-6 pr-2" /> Verified
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Academic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-700">
              <GraduationCap className="w-5 h-5" />
              Academic Details
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Department:</span>
                <span className="text-sm font-semibold">{dept}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Register No:</span>
                <span className="text-sm font-semibold">{reg_no}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Joining Year:</span>
                <span className="text-sm font-semibold">{year_of_joining}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Passing Year:</span>
                <span className="text-sm font-semibold">{year_of_passing}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-700">
              <Briefcase className="w-5 h-5" />
              Professional Details
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 opacity-60" />
                <span className="text-sm font-semibold">{company_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-60" />
                <span className="text-sm">{job_location}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-60" />
                <span className="text-sm">Lives in {location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        {success_stories && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-amber-700">
              <Trophy className="w-5 h-5" />
              Success Stories & Achievements
            </h3>
            <div className="p-4 rounded-lg bg-amber-100">
              <p className="text-sm leading-relaxed text-pretty">{success_stories}</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-amber-200">
          <Button className="flex-1 text-white font-medium bg-amber-600 hover:bg-amber-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent border-amber-600 text-amber-700 hover:bg-amber-50">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
