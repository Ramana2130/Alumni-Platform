"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Heart, DollarSign, Clock, GraduationCap, Filter, Search, BadgeCheck } from "lucide-react"
import { toast } from "sonner"

interface AlumniPortalProps {
  onBack: () => void
}

// Mock data for verified fund requests
const mockRequests = [
  {
    id: 1,
    studentName: "Sarah Johnson",
    program: "Computer Science",
    year: "Junior",
    amount: 3500,
    fundingType: "Emergency Fund",
    urgency: "urgent",
    description:
      "Need emergency funding for medical expenses after unexpected surgery. This will help cover medical bills and allow me to continue my studies without dropping out.",
    raised: 1200,
    goal: 3500,
    daysLeft: 15,
    gpa: 3.8,
    verificationDate: "2024-01-15",
  },
  {
    id: 2,
    studentName: "Michael Chen",
    program: "Mechanical Engineering",
    year: "Senior",
    amount: 2000,
    fundingType: "Research Project",
    urgency: "moderate",
    description:
      "Funding needed for senior capstone project on renewable energy systems. Will purchase materials and equipment for prototype development.",
    raised: 800,
    goal: 2000,
    daysLeft: 45,
    gpa: 3.9,
    verificationDate: "2024-01-12",
  },
  {
    id: 3,
    studentName: "Emily Rodriguez",
    program: "Pre-Med Biology",
    year: "Sophomore",
    amount: 5000,
    fundingType: "Tuition Assistance",
    urgency: "immediate",
    description:
      "Family financial hardship due to job loss. Need tuition assistance to continue pre-med studies and achieve dream of becoming a doctor.",
    raised: 2100,
    goal: 5000,
    daysLeft: 7,
    gpa: 3.95,
    verificationDate: "2024-01-18",
  },
  {
    id: 4,
    studentName: "David Kim",
    program: "Business Administration",
    year: "Graduate",
    amount: 1500,
    fundingType: "Technology/Equipment",
    urgency: "moderate",
    description:
      "Need laptop replacement for MBA program. Current laptop crashed and cannot afford replacement while supporting family.",
    raised: 450,
    goal: 1500,
    daysLeft: 30,
    gpa: 3.7,
    verificationDate: "2024-01-10",
  },
]

export default function FundDonate({ onBack }: AlumniPortalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterUrgency, setFilterUrgency] = useState("all")

  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch =
      request.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === "all" || request.fundingType.toLowerCase().includes(filterType.toLowerCase())
    const matchesUrgency = filterUrgency === "all" || request.urgency === filterUrgency

    return matchesSearch && matchesType && matchesUrgency
  })

  const handleDonate = (requestId: number, studentName: string) => {
    toast.success(`Donation Initiated, Thank you for supporting ${studentName}! You'll be redirected to the secure payment portal.`);
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "immediate":
        return "bg-red-100 text-red-800 border border-red-200"
      case "urgent":
        return "bg-orange-100 text-orange-800 border border-orange-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200"
      default:
        return "bg-slate-100 text-slate-800 border border-slate-200"
    }
  }

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">           
            <div className="pl-2">
              <h1 className="text-3xl font-bold text-slate-900">Fund Details</h1>
              <p className="text-slate-600 mt-1">Support students by contributing to verified fund requests</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-white border-slate-200 shadow-sm">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="flex items-center text-slate-900">
              <Filter className="h-5 w-5 mr-2 text-blue-600" />
              Filter Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Search</label>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
                  <Input
                    placeholder="Search by name, program, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Funding Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="tuition">Tuition Assistance</SelectItem>
                    <SelectItem value="emergency">Emergency Fund</SelectItem>
                    <SelectItem value="research">Research Project</SelectItem>
                    <SelectItem value="technology">Technology/Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Urgency</label>
                <Select value={filterUrgency} onValueChange={setFilterUrgency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Urgency Levels</SelectItem>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fund Requests */}
        <div className="grid gap-6">
          {filteredRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center text-xl text-slate-900">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                      {request.studentName}
                    </CardTitle>
                    <CardDescription className="mt-1 text-slate-600">
                      {request.program} • {request.year} • GPA: {request.gpa}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getUrgencyColor(request.urgency)}>
                      {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                    </Badge>
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      {request.fundingType}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-700 mb-6 leading-relaxed">{request.description}</p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      ${request.raised.toLocaleString()} raised of ${request.goal.toLocaleString()} goal
                    </span>
                    <span className="text-sm text-slate-600">
                      {getProgressPercentage(request.raised, request.goal).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-[#d56f2c] h-3 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(request.raised, request.goal)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats and Action */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-6 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-slate-500" />
                      {request.daysLeft} days left
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-slate-500" />$
                      {(request.goal - request.raised).toLocaleString()} needed
                    </div>
                  </div>
                  <Button
                    onClick={() => handleDonate(request.id, request.studentName)}
                    className="bg-[#d56f2c] hover:bg-[#c65a2c] text-white shadow-sm"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Now
                  </Button>
                </div>

                {/* Verification Badge */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center text-sm text-green-600">
                    <BadgeCheck className="size-4 gap-6" /> 
                    {/* <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> */}
                    Verified by University Administration on {new Date(request.verificationDate).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <Card className="text-center py-12 bg-white border-slate-200">
            <CardContent>
              <div className="text-slate-500 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No requests found matching your criteria</p>
                <p className="text-sm">Try adjusting your filters or search terms</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
