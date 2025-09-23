import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Building2, FileText, Users } from "lucide-react"
import { getJobPostingById, updateJobPosting } from "@/services/jobservices"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

interface JobFormData {
  job_title: string
  department: string
  job_type: string[]
  company_name: string
  apply_link: string
  location: string
  salary_package: string
  overview: string
  responsibilities: string
  required_qualifications: string
  preferred_qualifications: string
  benefits: string[]
  application_deadline: string
  contact_email: string
  contact_phone: string
  application_number: string
  job_status?: string
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
  const { id } = useParams()
  const [formData, setFormData] = useState<JobFormData | null>(null)
  const [loading, setLoading] = useState(true)

  // ✅ Fetch job details
  useEffect(() => {
    if (!id) return
    const fetchJob = async () => {
      try {
        const job = await getJobPostingById(Number(id))
        setFormData({
          job_title: job.job_title,
          company_name: job.company_name,
          apply_link: job.apply_link,
          department: job.department,
          job_type: job.job_type ? job.job_type.split(",") : [],
          location: job.location,
          salary_package: job.salary_package || "",
          overview: job.overview,
          responsibilities: job.responsibilities,
          required_qualifications: job.required_qualifications,
          preferred_qualifications: job.preferred_qualifications,
          benefits: job.benefits ? job.benefits.split(",") : [],
          application_deadline: job.application_deadline?.split("T")[0] || "",
          contact_email: job.contact_email,
          contact_phone: job.contact_phone,
          application_number: job.application_number || "",
          job_status: job.job_status || "active",
        })
      } catch (error) {
        console.error("Error fetching job:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchJob()
  }, [id])

  const updateFormData = (field: keyof JobFormData, value: string | string[]) => {
    if (!formData) return
    setFormData((prev) => (prev ? { ...prev, [field]: value } : prev))
  }

  const handlejobTypeChange = (typeId: string, checked: boolean) => {
    if (!formData) return
    const updatedTypes = checked
      ? [...formData.job_type, typeId]
      : formData.job_type.filter((type) => type !== typeId)
    updateFormData("job_type", updatedTypes)
  }

  const handleBenefitChange = (benefitId: string, checked: boolean) => {
    if (!formData) return
    const updatedBenefits = checked
      ? [...formData.benefits, benefitId]
      : formData.benefits.filter((benefit) => benefit !== benefitId)
    updateFormData("benefits", updatedBenefits)
  }

  const navigate = useNavigate();
  // ✅ Submit updated details
  const handleSubmit = async () => {
    if (!formData) return
    try {
      const payload = {
      jobTitle: formData.job_title,
      companyName: formData.company_name,
      department: formData.department,
      jobType: formData.job_type, // already array
      applyLink: formData.apply_link,
      location: formData.location,
      salaryPackage: formData.salary_package,
      overview: formData.overview,
      responsibilities: formData.responsibilities,
      requiredQualifications: formData.required_qualifications,
      preferredQualifications: formData.preferred_qualifications,
      benefits: formData.benefits, // already array
      applicationDeadline: formData.application_deadline,
      contactEmail: formData.contact_email,
      contactPhone: formData.contact_phone,
      jobStatus: formData.job_status,
      applicationNumber: formData.application_number,
      }

      await updateJobPosting(Number(id), payload)
      toast.success("Job updated successfully");
      navigate("/alumni/dashboard")
    } catch (error) {
      console.error("Error updating job:", error)
    }
  }

  if (loading || !formData) return <p>Loading...</p>

  return (
    <div className="w-[1200px] mx-auto space-y-6 py-5">
      {/* Header */}
      <div className="text-start space-y-2">
        <h1 className="text-2xl font-bold text-orange-600">Edit Job details</h1>
        <p className="text-muted-foreground">
          Fill out all the details below to edit a comprehensive job listing.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" /> Job Posting Form
          </CardTitle>
          <CardDescription>Enter complete job details in the form below</CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Job Details */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Building2 className="h-4 w-4"/> Job Details
            </h2>

            <div className="grid gap-2">
              <Label htmlFor="company_name">Company Name *</Label>
              <Input
                id="company_name"
                placeholder="e.g. Senior Software Engineer"
                value={formData.company_name}
                onChange={(e) => updateFormData("company_name", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jo.job_title">Job Title *</Label>
              <Input
                id="jo.job_title"
                placeholder="e.g. Senior Software Engineer"
                value={formData.job_title}
                onChange={(e) => updateFormData("job_title", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="apply_link">Apply Link *</Label>
              <Input
                id="apply_link"
                placeholder="e.g. Senior Software Engineer"
                value={formData.apply_link}
                onChange={(e) => updateFormData("apply_link", e.target.value)}
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
                      checked={formData.job_type.includes(type.id)}
                      onCheckedChange={(checked) => handlejobTypeChange(type.id, checked as boolean)}
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

            <div className="grid gap-2">
              <Label htmlFor="sa.salary_package">Salary Package *</Label>
              <Input
                id="sa.salary_package"
                placeholder="e.g. 8 LPA"
                value={formData.salary_package}
                onChange={(e) => updateFormData("salary_package", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="application_number">Application Number *</Label>
              <Input
                id="application_number"
                placeholder="Enter unique application number"
                value={formData.application_number}
                onChange={(e) => updateFormData("application_number", e.target.value)}
              />
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
              <Label htmlFor="required_qualifications">Required Qualifications *</Label>
              <Textarea
                id="required_qualifications"
                placeholder="• Bachelor's degree in CS&#10;• 5+ years in software dev"
                className="min-h-[120px]"
                value={formData.required_qualifications}
                onChange={(e) => updateFormData("required_qualifications", e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="preferred_qualifications">Preferred Qualifications</Label>
              <Textarea
                id="preferred_qualifications"
                placeholder="• Experience with cloud&#10;• Open source contributions"
                className="min-h-[100px]"
                value={formData.preferred_qualifications}
                onChange={(e) => updateFormData("preferred_qualifications", e.target.value)}
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
              <Label htmlFor="application_deadline">Application Deadline</Label>
              <Input
                id="application_deadline"
                type="date"
                value={formData.application_deadline}
                onChange={(e) => updateFormData("application_deadline", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact_email">Contact Email *</Label>
                <Input
                  id="contact_email"
                  type="email"
                  placeholder="hiring@company.com"
                  value={formData.contact_email}
                  onChange={(e) => updateFormData("contact_email", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact_phone">Contact Phone</Label>
                <Input
                  id="contact_phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.contact_phone}
                  onChange={(e) => updateFormData("contact_phone", e.target.value)}
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
