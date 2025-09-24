import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { ChevronsUpDown, Check, User, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getAlumniById, updateAlumni } from "@/services/alumniservices";
import { useParams, useNavigate } from "react-router-dom";

interface AlumniData {
  alumni_name: string;
  alumni_dept: string;
  alumni_reg_no: string;
  alumni_year_of_joining: string;
  alumni_year_of_passing: string;
  alumni_email: string;
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

export function AlumniEditForm() {
  const { id } = useParams(); // alumni id from route
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<AlumniData>({
    alumni_name: "",
    alumni_dept: "",
    alumni_reg_no: "",
    alumni_year_of_joining: "",
    alumni_year_of_passing: "",
    alumni_email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch alumni details by id when component mounts
  useEffect(() => {
    async function fetchAlumni() {
      try {
        const data = await getAlumniById(Number(id));
        setFormData({
          alumni_name: data.Name || "",
          alumni_dept: data.Department || "",
          alumni_reg_no: data.RegisterNumber || "",
          alumni_year_of_joining: data.YearOfJoining?.toString() || "",
          alumni_year_of_passing: data.YearOfPassing?.toString() || "",
          alumni_email: data.Email || "",
        });
      } catch (error: any) {
        toast.error(
          error.response?.data?.error || "Failed to load alumni data"
        );
      }
    }
    if (id) fetchAlumni();
  }, [id]);

  const handleInputChange = (field: keyof AlumniData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.alumni_name,
        department: formData.alumni_dept,
        registerNumber: formData.alumni_reg_no,
        yearOfJoining: formData.alumni_year_of_joining,
        yearOfPassing: formData.alumni_year_of_passing,
        email: formData.alumni_email,
      };

      await updateAlumni(Number(id), payload);
      toast.success("Alumni updated successfully");
      navigate("/university/alumni-list"); // redirect after success
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to update alumni");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-slate-50 border-slate-200">
      <CardHeader>
        <CardTitle>Edit Alumni Details</CardTitle>
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
                <Label htmlFor="alumni_name">Full Name *</Label>
                <Input
                  id="alumni_name"
                  value={formData.alumni_name}
                  onChange={(e) =>
                    handleInputChange("alumni_name", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alumni_reg_no">Registration Number *</Label>
                <Input
                  id="alumni_reg_no"
                  value={formData.alumni_reg_no}
                  onChange={(e) =>
                    handleInputChange("alumni_reg_no", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alumni_email">Email</Label>
                <Input
                  id="alumni_email"
                  value={formData.alumni_email}
                  onChange={(e) =>
                    handleInputChange("alumni_email", e.target.value)
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
                <Label htmlFor="alumni_dept">Department *</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {formData.alumni_dept || "Select Department..."}
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
                                handleInputChange("alumni_dept", currentValue);
                                setOpen(false);
                              }}
                            >
                              {dept}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  formData.alumni_dept === dept
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
                <Label htmlFor="alumni_year_of_joining">Year of Joining</Label>
                <Input
                  id="alumni_year_of_joining"
                  type="number"
                  value={formData.alumni_year_of_joining}
                  onChange={(e) =>
                    handleInputChange("alumni_year_of_joining", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alumni_year_of_passing">
                  Year of Passing *
                </Label>
                <Input
                  id="alumni_year_of_passing"
                  type="number"
                  value={formData.alumni_year_of_passing}
                  onChange={(e) =>
                    handleInputChange("alumni_year_of_passing", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Alumni"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
