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
import { Progress } from "@/components/ui/progress"
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

export function JobApplyForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<JobFormData>(initialFormData)
  const [isPreview, setIsPreview] = useState(false)

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Job posting submitted:", formData)
    // Handle form submission here
  }

  if (isPreview) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-balance">Job Posting Preview</h1>
          <Button variant="outline" onClick={() => setIsPreview(false)}>
            Back to Edit
          </Button>
        </div>

        <Card className="">
          <CardHeader>
            <CardTitle className="text-2xl text-balance">{formData.jobTitle}</CardTitle>
            <CardDescription className="flex items-center gap-4 text-base">
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {formData.department}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {formData.location}
              </span>
              {formData.salaryMin && formData.salaryMax && (
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />${formData.salaryMin} - ${formData.salaryMax}
                </span>
              )}
            </CardDescription>
            <div className="flex gap-2 mt-2">
              {formData.jobType.map((type) => (
                <Badge key={type} variant="secondary">
                  {jobTypes.find((jt) => jt.id === type)?.label}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Job Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{formData.overview}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Key Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{formData.responsibilities}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Required Qualifications</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {formData.requiredQualifications}
              </p>
            </div>

            {formData.preferredQualifications && (
              <div>
                <h3 className="font-semibold mb-2">Preferred Qualifications</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {formData.preferredQualifications}
                </p>
              </div>
            )}

            {formData.benefits.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.benefits.map((benefit) => (
                    <Badge key={benefit} variant="outline">
                      {benefitOptions.find((b) => b.id === benefit)?.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Application Deadline: {formData.applicationDeadline || "Not specified"}
              </p>
              <p className="text-sm text-muted-foreground">Contact: {formData.contactEmail}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button onClick={handleSubmit} size="lg" className="bg-[#d56f2c]">
            Submit Job Posting
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-balance">Create Job Posting</h1>
        <p className="text-muted-foreground">Fill out the details below to create a comprehensive job listing</p>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Step {currentStep} of {totalSteps}
          </span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} color="" className="h-2" />
      </div>

      {/* Form Steps */}
      <Card className="bg-[#fff5ed]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep === 1 && (
              <>
                <Building2 className="h-5 w-5" />
                Job Details
              </>
            )}
            {currentStep === 2 && (
              <>
                <FileText className="h-5 w-5" />
                Job Description
              </>
            )}
            {currentStep === 3 && (
              <>
                <Users className="h-5 w-5" />
                Additional Information
              </>
            )}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Basic information about the position"}
            {currentStep === 2 && "Detailed description and requirements"}
            {currentStep === 3 && "Benefits, deadline, and contact details"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Job Details */}
          {currentStep === 1 && (
            <div className="grid gap-6">
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
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
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
                      <Label htmlFor={type.id} className="text-sm font-normal">
                        {type.label}
                      </Label>
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
          )}

          {/* Step 2: Job Description */}
          {currentStep === 2 && (
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="overview">Job Overview *</Label>
                <Textarea
                  id="overview"
                  placeholder="Provide a brief overview of the role and what the candidate will be doing..."
                  className="min-h-[100px]"
                  value={formData.overview}
                  onChange={(e) => updateFormData("overview", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                <Textarea
                  id="responsibilities"
                  placeholder="• Lead development of new features&#10;• Collaborate with cross-functional teams&#10;• Mentor junior developers"
                  className="min-h-[120px]"
                  value={formData.responsibilities}
                  onChange={(e) => updateFormData("responsibilities", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="requiredQualifications">Required Qualifications *</Label>
                <Textarea
                  id="requiredQualifications"
                  placeholder="• Bachelor's degree in Computer Science or related field&#10;• 5+ years of software development experience&#10;• Proficiency in React and Node.js"
                  className="min-h-[120px]"
                  value={formData.requiredQualifications}
                  onChange={(e) => updateFormData("requiredQualifications", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="preferredQualifications">Preferred Qualifications</Label>
                <Textarea
                  id="preferredQualifications"
                  placeholder="• Experience with cloud platforms (AWS, GCP)&#10;• Previous startup experience&#10;• Open source contributions"
                  className="min-h-[100px]"
                  value={formData.preferredQualifications}
                  onChange={(e) => updateFormData("preferredQualifications", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="grid gap-6">
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
                      <Label htmlFor={benefit.id} className="text-sm font-normal">
                        {benefit.label}
                      </Label>
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
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </Button>

        <div className="flex gap-2">
          {currentStep === totalSteps && (
            <Button variant="outline" onClick={() => setIsPreview(true)}>
              Preview Job Listing
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button onClick={nextStep} className="bg-[#d56f2c]">Next</Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-[#d56f2c]">Submit Job Posting</Button>
          )}
        </div>
      </div>
    </div>
  )
}
