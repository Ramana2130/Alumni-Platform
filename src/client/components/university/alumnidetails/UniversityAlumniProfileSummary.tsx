import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, GraduationCap, Building2, MapPin, Briefcase, Trophy, Mail, Phone, BadgeCheck, MessageSquare, Loader } from "lucide-react"

interface AlumniProfileSummaryProps {
  name: string
  department: string
  registerNumber: string
  yearOfJoining: number
  yearOfPassing: number | null
  currentStatus: string
  companyName: string
  designation: string
  jobLocation: string
  successStories: string
  location: string
}

export function UniversityAlumniProfileSummary({
  name,
  department,
  registerNumber,
  yearOfJoining,
  yearOfPassing,
  currentStatus,
  companyName,
  designation,
  jobLocation,
  successStories,
  location,
}: AlumniProfileSummaryProps) {
  return (
    <Card className="w-full mx-auto shadow-lg border-0 bg-gray-100 text-emerald-950">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold bg-emerald-600">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-950 uppercase">{name}</h2>
              <p className="text-lg font-medium text-emerald-800">{designation}</p>
              <p className="text-sm opacity-80">{companyName}</p>
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
            <h3 className="text-lg font-semibold flex items-center gap-2 text-emerald-800">
              <GraduationCap className="w-5 h-5" />
              Academic Details
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Department:</span>
                <span className="text-sm font-semibold">{department}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Register No:</span>
                <span className="text-sm font-semibold">{registerNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Joining Year:</span>
                <span className="text-sm font-semibold">{yearOfJoining}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-70">Passing Year:</span>
                <span className="text-sm font-semibold">{yearOfPassing}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-emerald-800">
              <Briefcase className="w-5 h-5" />
              Professional Details
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 opacity-60" />
                <span className="text-sm font-semibold">{companyName}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-60" />
                <span className="text-sm">{jobLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-60" />
                <span className="text-sm">Lives in {location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Loader className="w-4 h-4 opacity-60" />
                <span className="text-sm">{currentStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        {successStories && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-emerald-800">
              <Trophy className="w-5 h-5" />
              Success Stories & Achievements
            </h3>
            <div className="p-4 rounded-lg bg-emerald-100">
              <p className="text-sm leading-relaxed">{successStories}</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-emerald-200">
          <Button className="flex-1 text-white font-medium bg-emerald-600 hover:bg-emerald-800">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-transparent border-emerald-600 text-emerald-800 hover:bg-emerald-50"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

