"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, DollarSign, FileText, Users } from "lucide-react"

interface JobFormData {
  jobTitle: string
  department: string
  jobType: string[]
  location: string
  salaryMin: string
  salaryMax: string
  overview: string
  responsibilities: string
  requiredQualifications: string
  preferredQualifications: string
  benefits: string[]
  applicationDeadline: string
  contactEmail: string
  contactPhone: string
}

const initialFormData: JobFormData = {
  jobTitle: "",
  department: "",
  jobType: [],
  location: "",
  salaryMin: "",
  salaryMax: "",
  overview: "",
  responsibilities: "",
  requiredQualifications: "",
  preferredQualifications: "",
  benefits: [],
  applicationDeadline: "",
  contactEmail: "",
  contactPhone: "",
}

const departments = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Operations",
  "Human Resources",
  "Finance",
  "Customer Success",
  "Legal",
]

const jobTypes = [
  { id: "full-time", label: "Full-time" },
  { id: "part-time", label: "Part-time" },
  { id: "contract", label: "Contract" },
  { id: "internship", label: "Internship" },
  { id: "remote", label: "Remote" },
]

const benefitOptions = [
  { id: "health-insurance", label: "Health Insurance" },
  { id: "dental-vision", label: "Dental & Vision" },
  { id: "retirement-401k", label: "401(k) Retirement Plan" },
  { id: "paid-time-off", label: "Paid Time Off" },
  { id: "flexible-schedule", label: "Flexible Schedule" },
  { id: "remote-work", label: "Remote Work Options" },
  { id: "professional-development", label: "Professional Development" },
  { id: "stock-options", label: "Stock Options" },
]

export function JobEditForm() {
  const [formData, setFormData] = useState<JobFormData>(initialFormData)

  const updateFormData = (field: keyof JobFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleJobTypeChange = (typeId: string, checked: boolean) => {
    const updatedTypes = checked ? [...formData.jobType, typeId] : formData.jobType.filter((type) => type !== typeId)
    updateFormData("jobType", updatedTypes)
  }

  const handleBenefitChange = (benefitId: string, checked: boolean) => {
    const updatedBenefits = checked
      ? [...formData.benefits, benefitId]
      : formData.benefits.filter((benefit) => benefit !== benefitId)
    updateFormData("benefits", updatedBenefits)
  }

  const handleSubmit = () => {
    console.log("Job posting submitted:", formData)
    // send to backend here
  }

  return (
    <div className="w-[1200px] mx-auto space-y-6 py-5">
      {/* Header */}
      <div className="text-start space-y-2">
        <h1 className="text-2xl font-bold text-orange-600">Edit Job details</h1>
        <p className="text-muted-foreground">
          Fill out all the details below to edit a comprehensive job listing.
        </p>
      </div>

      <Card className="">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" /> Job Posting Form
          </CardTitle>
          <CardDescription>Enter complete job details in the form below</CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Job Details */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2"><Building2 className="h-4 w-4"/> Job Details</h2>

            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title *</Label>
              <Input
                id="jobTitle"
                placeholder="e.g. Senior Software Engineer"
                value={formData.jobTitle}
                onChange={(e) => updateFormData("jobTitle", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="department">Department *</Label>
              <Select value={formData.department} onValueChange={(value) => updateFormData("department", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label>Job Type *</Label>
              <div className="grid grid-cols-2 gap-3">
                {jobTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={type.id}
                      checked={formData.jobType.includes(type.id)}
                      onCheckedChange={(checked) => handleJobTypeChange(type.id, checked as boolean)}
                    />
                    <Label htmlFor={type.id} className="text-sm font-normal">{type.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="e.g. San Francisco, CA or Remote"
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="salaryMin">Minimum Salary</Label>
                <Input
                  id="salaryMin"
                  type="number"
                  placeholder="80000"
                  value={formData.salaryMin}
                  onChange={(e) => updateFormData("salaryMin", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="salaryMax">Maximum Salary</Label>
                <Input
                  id="salaryMax"
                  type="number"
                  placeholder="120000"
                  value={formData.salaryMax}
                  onChange={(e) => updateFormData("salaryMax", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2"><FileText className="h-4 w-4"/> Job Description</h2>

            <div className="grid gap-2">
              <Label htmlFor="overview">Job Overview *</Label>
              <Textarea
                id="overview"
                placeholder="Brief overview of the role..."
                className="min-h-[100px]"
                value={formData.overview}
                onChange={(e) => updateFormData("overview", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="responsibilities">Key Responsibilities *</Label>
              <Textarea
                id="responsibilities"
                placeholder="• Lead development of new features&#10;• Collaborate with teams"
                className="min-h-[120px]"
                value={formData.responsibilities}
                onChange={(e) => updateFormData("responsibilities", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="requiredQualifications">Required Qualifications *</Label>
              <Textarea
                id="requiredQualifications"
                placeholder="• Bachelor's degree in CS&#10;• 5+ years in software dev"
                className="min-h-[120px]"
                value={formData.requiredQualifications}
                onChange={(e) => updateFormData("requiredQualifications", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="preferredQualifications">Preferred Qualifications</Label>
              <Textarea
                id="preferredQualifications"
                placeholder="• Experience with cloud&#10;• Open source contributions"
                className="min-h-[100px]"
                value={formData.preferredQualifications}
                onChange={(e) => updateFormData("preferredQualifications", e.target.value)}
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2"><Users className="h-4 w-4"/> Additional Information</h2>

            <div className="grid gap-2">
              <Label>Benefits</Label>
              <div className="grid grid-cols-2 gap-3">
                {benefitOptions.map((benefit) => (
                  <div key={benefit.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={benefit.id}
                      checked={formData.benefits.includes(benefit.id)}
                      onCheckedChange={(checked) => handleBenefitChange(benefit.id, checked as boolean)}
                    />
                    <Label htmlFor={benefit.id} className="text-sm font-normal">{benefit.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="applicationDeadline">Application Deadline</Label>
              <Input
                id="applicationDeadline"
                type="date"
                value={formData.applicationDeadline}
                onChange={(e) => updateFormData("applicationDeadline", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contactEmail">Contact Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="hiring@company.com"
                  value={formData.contactEmail}
                  onChange={(e) => updateFormData("contactEmail", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contactPhone}
                  onChange={(e) => updateFormData("contactPhone", e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit */}
      <div className="flex justify-end">
        <Button onClick={handleSubmit} size="lg" className="bg-[#d56f2c]">
          Submit Job Posting
        </Button>
      </div>
    </div>
  )
}
