"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileSpreadsheet, User, Building, Calendar, Briefcase } from "lucide-react"
import { toast } from "sonner"

interface AlumniData {
  student_name: string
  student_dept: string
  student_regno: string
  student_yearOfJoining: string
  student_yearOfPassword: string
  student_currentStatus: string
  student_location: string
}

const departments = [
  "Computer Science & Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electronics & Communication",
  "Information Technology",
  "Chemical Engineering",
  "Biotechnology",
  "Aerospace Engineering",
  "Other",
]

const currentStatusOptions = [
  "Employed",
  "Self-Employed",
  "Unemployed",
  "Higher Studies",
  "Entrepreneur",
  "Retired",
  "Other",
]

export function StudentsAddForm() {
  const [formData, setFormData] = useState<AlumniData>({
    student_name: "",
    student_dept: "",
    student_regno: "",
    student_yearOfJoining: "",
    student_yearOfPassword: "",
    student_currentStatus: "",
    student_location: "",
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof AlumniData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel"
      ) {
        setSelectedFile(file)
        toast.success(`File Selected, ${file.name} has been selected for upload.`,);
      } else {
        toast.error("Invalid File Type, Please select an Excel file (.xlsx or .xls)");
      }
    }
  }

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    const requiredFields = ["student_name", "student_dept", "student_regno", "student_yearOfPassword"]
    const missingFields = requiredFields.filter((field) => !formData[field as keyof AlumniData])

    if (missingFields.length > 0) {
      toast.error("Missing Required Fields: Please fill in all required fields marked with *")
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast("Student Added Successfully. The alumni information has been added to the database.")

      // Reset form
      setFormData({
        student_name: "",
        student_dept: "",
        student_regno: "",
        student_yearOfJoining: "",
        student_yearOfPassword: "",
        student_currentStatus: "",
        student_location: "",
      })
    } catch (error) {
      toast.error("Failed to add alumni information. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) {
      toast.error("No File Selected. Please select an Excel file to upload.")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate file upload and processing
      await new Promise((resolve) => setTimeout(resolve, 3000))

      toast.success("File Uploaded Successfully. The Excel file has been processed and alumni data has been imported.")

      setSelectedFile(null)
      // Reset file input
      const fileInput = document.getElementById("excel-upload") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    } catch (error) {
      toast.error("Upload Error: Failed to process the Excel file. Please check the format and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full bg-slate-50 border-slate-200">
      {/* <CardHeader className="bg-[#00c951] text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <User className="h-6 w-6" />
          Alumni Registration
        </CardTitle>
        <CardDescription className="text-indigo-100">
          Add alumni information either manually or by uploading an Excel file
        </CardDescription>
      </CardHeader> */}
      <CardContent className="p-6">
        <Tabs defaultValue="manual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100">
            <TabsTrigger value="manual" className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white">
              Manual Entry
            </TabsTrigger>
            <TabsTrigger value="upload" className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white">
              Excel Upload
            </TabsTrigger>
          </TabsList>

          <TabsContent value="manual" className="space-y-6 mt-6">
            <form onSubmit={handleManualSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 border-b border-slate-200 pb-2">
                    <User className="h-5 w-5 text-emerald-700" />
                    Personal Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="student_name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="student_name"
                      value={formData.student_name}
                      onChange={(e) => handleInputChange("student_name", e.target.value)}
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student_regno" className="text-gray-700 font-medium">
                      Registration Number *
                    </Label>
                    <Input
                      id="student_regno"
                      value={formData.student_regno}
                      onChange={(e) => handleInputChange("student_regno", e.target.value)}
                      placeholder="Enter registration number"
                      required
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student_email" className="text-gray-700 font-medium">
                      Email *
                    </Label>
                    <Input
                      id="student_location"
                      value={formData.student_location}
                      onChange={(e) => handleInputChange("student_location", e.target.value)}
                      placeholder="Enter email address"
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 border-b border-slate-200 pb-2">
                    <Calendar className="h-5 w-5 text-emerald-700" />
                    Academic Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="student_dept" className="text-gray-700 font-medium">
                      Department *
                    </Label>
                    <Select
                      value={formData.student_dept}
                      onValueChange={(value) => handleInputChange("student_dept", value)}
                    >
                      <SelectTrigger className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200">
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept} className="hover:bg-emerald-50">
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student_yearOfJoining" className="text-gray-700 font-medium">
                      Year of Joining
                    </Label>
                    <Input
                      id="student_yearOfJoining"
                      type="number"
                      min="1950"
                      max="2030"
                      value={formData.student_yearOfJoining}
                      onChange={(e) => handleInputChange("student_yearOfJoining", e.target.value)}
                      placeholder="e.g., 2018"
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student_yearOfPassword" className="text-gray-700 font-medium">
                      Year of Passing *
                    </Label>
                    <Input
                      id="student_yearOfPassword"
                      type="number"
                      min="1950"
                      max="2030"
                      value={formData.student_yearOfPassword}
                      onChange={(e) => handleInputChange("student_yearOfPassword", e.target.value)}
                      placeholder="e.g., 2022"
                      required
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding student..." : "Add student"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6 mt-6">
            <div className="text-center space-y-4">
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-lg p-8">
                <FileSpreadsheet className="h-12 w-12 text-emerald-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Upload Excel File</h3>
                <p className="text-gray-600 mb-4">Upload an Excel file (.xlsx or .xls) containing alumni information</p>

                <div className="space-y-4">
                  <Input
                    id="excel-upload"
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="max-w-sm mx-auto border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />

                  {selectedFile && <div className="text-sm text-gray-600">Selected: {selectedFile.name}</div>}
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-2 text-gray-800">Excel File Format Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Column headers should match: student_name, student_dept, student_regno, etc.</li>
                  <li>• Required fields: student_name, student_dept, student_regno, student_yearOfPassword</li>
                  <li>• Date format: YYYY for years (e.g., 2022)</li>
                  <li>• File size limit: 10MB</li>
                </ul>
              </div>

              <form onSubmit={handleFileSubmit}>
                <Button
                  type="submit"
                  disabled={!selectedFile || isSubmitting}
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-3"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Processing File..." : "Upload and Process"}
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
