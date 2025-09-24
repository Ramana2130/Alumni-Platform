import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ChevronsUpDown, Check, User, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getStudentById, updateStudent } from "@/services/studentservices";
import { useParams, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface StudentData {
  student_name: string;
  student_reg_no: string;
  student_dept: string;
  student_email: string;
  student_year_of_joining: string;
  student_year_of_passing: string;
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

export function StudentEditForm() {
  const { id } = useParams(); // student id from route
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<StudentData>({
    student_name: "",
    student_reg_no: "",
    student_dept: "",
    student_email: "",
    student_year_of_joining: "",
    student_year_of_passing: "",
    student_academic_year: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch student details by id
  useEffect(() => {
    async function fetchStudent() {
      try {
        const data = await getStudentById(Number(id));
        setFormData({
          student_name: data.student_name || "",
          student_reg_no: data.reg_no || "",
          student_dept: data.department || "",
          student_email: data.email || "",
          student_year_of_joining: data.year_of_joining?.toString() || "",
          student_year_of_passing: data.year_of_passing?.toString() || "",
          student_academic_year: data.academic_year || "",
        });
      } catch (error: any) {
        toast.error(
          error.response?.data?.error || "Failed to load student data"
        );
      }
    }
    if (id) fetchStudent();
  }, [id]);

  const handleInputChange = (field: keyof StudentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
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

      await updateStudent(Number(id), payload);
      toast.success("Student updated successfully");
      navigate("/university/student-list"); // redirect after success
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to update student");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-slate-50 border-slate-200">
      <CardHeader>
        <CardTitle>Edit Student Details</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleUpdateSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5 text-emerald-700" />
                Personal Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="student_name">Full Name *</Label>
                <Input
                  id="student_name"
                  value={formData.student_name}
                  onChange={(e) =>
                    handleInputChange("student_name", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_reg_no">Registration Number *</Label>
                <Input
                  id="student_reg_no"
                  value={formData.student_reg_no}
                  onChange={(e) =>
                    handleInputChange("student_reg_no", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_email">Email</Label>
                <Input
                  id="student_email"
                  value={formData.student_email}
                  onChange={(e) =>
                    handleInputChange("student_email", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Academic Info */}
            <div className="space-y-4 bg-white p-4 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-700" />
                Academic Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="student_dept">Department *</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {formData.student_dept || "Select Department..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-0">
                    <Command>
                      <CommandInput placeholder="Search department..." />
                      <CommandList>
                        <CommandEmpty>No department found.</CommandEmpty>
                        <CommandGroup>
                          {departments.map((dept) => (
                            <CommandItem
                              key={dept}
                              value={dept}
                              onSelect={(currentValue) => {
                                handleInputChange("student_dept", currentValue);
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
                <Label htmlFor="student_year_of_joining">Year of Joining</Label>
                <Input
                  id="student_year_of_joining"
                  type="number"
                  value={formData.student_year_of_joining}
                  onChange={(e) =>
                    handleInputChange("student_year_of_joining", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_year_of_passing">
                  Year of Passing *
                </Label>
                <Input
                  id="student_year_of_passing"
                  type="number"
                  value={formData.student_year_of_passing}
                  onChange={(e) =>
                    handleInputChange("student_year_of_passing", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_academic_year">Academic Year</Label>
                <Input
                  id="student_academic_year"
                  value={formData.student_academic_year}
                  onChange={(e) =>
                    handleInputChange("student_academic_year", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Student"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
