import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileSpreadsheet,
  User,
  Calendar,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { addStudent, uploadStudentExcel } from "@/services/studentservices";

interface StudentData {
  student_name: string;
  student_dept: string;
  student_reg_no: string;
  student_year_of_joining: string;
  student_year_of_passing: string;
  student_email: string;
  student_academic_year: string;
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
];

export function StudentAddForm() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState<StudentData>({
    student_name: "",
    student_dept: "",
    student_reg_no: "",
    student_year_of_joining: "",
    student_year_of_passing: "",
    student_email: "",
    student_academic_year: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof StudentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel"
      ) {
        setSelectedFile(file);
        toast.success(
          `File Selected, ${file.name} has been selected for upload.`
        );
      } else {
        toast.error(
          "Invalid File Type, Please select an Excel file (.xlsx or .xls)"
        );
      }
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        studentName: formData.student_name,
        regNo: formData.student_reg_no,
        department: formData.student_dept,
        email: formData.student_email,
        yearOfJoining: formData.student_year_of_joining,
        yearOfPassing: formData.student_year_of_passing,
        academicYear: formData.student_academic_year, // or from input
      };

      await addStudent(payload);

      toast.success("Student added successfully");

      setFormData({
        student_name: "",
        student_dept: "",
        student_reg_no: "",
        student_year_of_joining: "",
        student_year_of_passing: "",
        student_email: "",
        student_academic_year: "",
      });
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to add student");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("No File Selected. Please select an Excel file to upload.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await uploadStudentExcel(selectedFile);
      toast.success(res.message || "File Uploaded Successfully!");
      setSelectedFile(null);

      const fileInput = document.getElementById(
        "excel-upload"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Upload failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-slate-50 border-slate-200">
      <CardContent className="p-6">
        <Tabs defaultValue="manual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100">
            <TabsTrigger
              value="manual"
              className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
            >
              Manual Entry
            </TabsTrigger>
            <TabsTrigger
              value="upload"
              className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
            >
              Excel Upload
            </TabsTrigger>
          </TabsList>

          {/* Manual Entry */}
          <TabsContent value="manual" className="space-y-6 mt-6">
            <form onSubmit={handleManualSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 border-b border-slate-200 pb-2">
                    <User className="h-5 w-5 text-emerald-700" />
                    Student Information
                  </h3>

                  <div className="space-y-2">
                    <Label
                      htmlFor="student_name"
                      className="text-gray-700 font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="student_name"
                      value={formData.student_name}
                      onChange={(e) =>
                        handleInputChange("student_name", e.target.value)
                      }
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="student_reg_no"
                      className="text-gray-700 font-medium"
                    >
                      Registration Number *
                    </Label>
                    <Input
                      id="student_reg_no"
                      value={formData.student_reg_no}
                      onChange={(e) =>
                        handleInputChange("student_reg_no", e.target.value)
                      }
                      placeholder="Enter registration number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="student_email"
                      className="text-gray-700 font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      id="student_email"
                      value={formData.student_email}
                      onChange={(e) =>
                        handleInputChange("student_email", e.target.value)
                      }
                      placeholder="Enter email address"
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
                    <Label
                      htmlFor="student_dept"
                      className="text-gray-700 font-medium"
                    >
                      Department *
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-[530px] justify-between"
                        >
                          {formData.student_dept || "Select Department..."}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search department..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No department found.</CommandEmpty>
                            <CommandGroup>
                              {departments.map((dept) => (
                                <CommandItem
                                  key={dept}
                                  value={dept}
                                  onSelect={(currentValue) => {
                                    handleInputChange(
                                      "student_dept",
                                      currentValue
                                    );
                                    setOpen(false);
                                  }}
                                >
                                  {dept}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      formData.student_dept === dept
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="student_year_of_joining"
                      className="text-gray-700 font-medium"
                    >
                      Year of Joining
                    </Label>
                    <Input
                      id="student_year_of_joining"
                      type="number"
                      min="1950"
                      max="2030"
                      value={formData.student_year_of_joining}
                      onChange={(e) =>
                        handleInputChange(
                          "student_year_of_joining",
                          e.target.value
                        )
                      }
                      placeholder="e.g., 2022"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="student_year_of_passing"
                      className="text-gray-700 font-medium"
                    >
                      Year of Passing *
                    </Label>
                    <Input
                      id="student_year_of_passing"
                      type="number"
                      min="1950"
                      max="2030"
                      value={formData.student_year_of_passing}
                      onChange={(e) =>
                        handleInputChange(
                          "student_year_of_passing",
                          e.target.value
                        )
                      }
                      placeholder="e.g., 2026"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="student_academic_year"
                      className="text-gray-700 font-medium"
                    >
                      Enter the Studing Year *
                    </Label>
                    <Input
                      id="student_academic_year"
                      value={formData.student_academic_year}
                      onChange={(e) =>
                        handleInputChange(
                          "student_academic_year",
                          e.target.value
                        )
                      }
                      placeholder="e.g., I, II, III, IV, V"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding Student..." : "Add Student"}
              </Button>
            </form>
          </TabsContent>

          {/* Excel Upload */}
          <TabsContent value="upload" className="space-y-6 mt-6">
            <div className="text-center space-y-4">
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-lg p-8">
                <FileSpreadsheet className="h-12 w-12 text-emerald-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Upload Excel File
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload an Excel file (.xlsx or .xls) containing student
                  information
                </p>

                <div className="space-y-4">
                  <Input
                    id="excel-upload"
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="max-w-sm mx-auto border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />

                  {selectedFile && (
                    <div className="text-sm text-gray-600">
                      Selected: {selectedFile.name}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 text-left">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Excel File Format Requirements:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • Column headers should match: student_name, student_dept,
                    student_reg_no, etc.
                  </li>
                  <li>
                    • Required fields: student_name, student_dept,
                    student_reg_no, student_year_of_passing
                  </li>
                  <li>• Date format: YYYY for years (e.g., 2026)</li>
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
  );
}
