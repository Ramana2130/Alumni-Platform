"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, DollarSign, FileText, User } from "lucide-react"
import { toast } from "sonner"

interface StudentRequestFormProps {
  onBack: () => void
}

export default function FundRequest({ onBack }: StudentRequestFormProps) {
  const [formData, setFormData] = useState({
    studentId: "",
    fullName: "",
    email: "",
    phone: "",
    program: "",
    year: "",
    gpa: "",
    requestAmount: "",
    fundingType: "",
    urgency: "",
    description: "",
    financialSituation: "",
    academicGoals: "",
    repaymentPlan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission - in real app would send to API
    toast.success("Request Submitted Successfully your fund request has been submitted for university review. You'll receive an email confirmation shortly.")

    // Reset form
    setFormData({
      studentId: "",
      fullName: "",
      email: "",
      phone: "",
      program: "",
      year: "",
      gpa: "",
      requestAmount: "",
      fundingType: "",
      urgency: "",
      description: "",
      financialSituation: "",
      academicGoals: "",
      repaymentPlan: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-3">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="px-4">
            <h1 className="text-2xl font-bold text-[#e7000b]">Student Fund Request Form</h1>
            <p className="text-slate-600 mt-1">Complete all sections to submit your funding request</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-[1210px] mx-auto space-y-8">
          {/* Personal Information */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="flex items-center text-slate-900">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Personal Information
              </CardTitle>
              <CardDescription className="text-slate-600">
                Provide your basic details and academic information
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 p-6">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID *</Label>
                <Input
                  id="studentId"
                  value={formData.studentId}
                  onChange={(e) => handleInputChange("studentId", e.target.value)}
                  placeholder="Enter your student ID"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@university.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="program">Academic Program *</Label>
                <Input
                  id="program"
                  value={formData.program}
                  onChange={(e) => handleInputChange("program", e.target.value)}
                  placeholder="e.g., Computer Science, Business Administration"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Academic Year *</Label>
                <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="i">I year</SelectItem>
                    <SelectItem value="ii">II</SelectItem>
                    <SelectItem value="iii">III</SelectItem>
                    <SelectItem value="iv">IV</SelectItem>
                    <SelectItem value="v">V</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Funding Request Details */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="flex items-center text-slate-900">
                <DollarSign className="h-5 w-5 mr-2 text-emerald-600" />
                Funding Request Details
              </CardTitle>
              <CardDescription className="text-slate-600">
                Specify the amount and type of funding you need
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="requestAmount">Requested Amount *</Label>
                  <Input
                    id="requestAmount"
                    value={formData.requestAmount}
                    onChange={(e) => handleInputChange("requestAmount", e.target.value)}
                    placeholder="5000"
                    type="number"
                    min="1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fundingType">Funding Type *</Label>
                  <Select
                    value={formData.fundingType}
                    onValueChange={(value) => handleInputChange("fundingType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select funding type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tuition">Tuition Assistance</SelectItem>
                      <SelectItem value="research">Research Project</SelectItem>
                      <SelectItem value="books">Books & Supplies</SelectItem>
                      <SelectItem value="technology">Technology/Equipment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-700 font-medium">
                  Request Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Provide a detailed explanation of why you need this funding..."
                  className="min-h-[120px] border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="flex items-center text-slate-900">
                <Upload className="h-5 w-5 mr-2 text-orange-600" />
                Supporting Documents
              </CardTitle>
              <CardDescription className="text-slate-600">
                Upload relevant documents to support your request
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 mb-2">Upload supporting documents</p>
                <p className="text-sm text-slate-500 mb-4">
                  Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  Choose Files
                </Button>
              </div>
              <div className="mt-4 text-sm text-slate-600">
                <p className="font-medium mb-2 text-slate-700">Recommended documents:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Academic transcript</li>
                  <li>Financial aid documents</li>
                  <li>Bank statements</li>
                  <li>Medical bills (if applicable)</li>
                  <li>Letters of recommendation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 shadow-sm">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
