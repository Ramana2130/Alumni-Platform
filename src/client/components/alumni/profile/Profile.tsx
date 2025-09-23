import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addAlumniCurrentDetails, getAlumniByEmail } from "@/services/alumniservices";
import { toast } from "sonner";

export default function ProfilePage() {
    const [user, setUser] = useState<{ email: string; role: string; password: string } | null>(null)
    const [alumniId, setAlumniId] = useState<number | null>(null);

    useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token") // 👈 from login
        if (!token) return

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        }
      } catch (err) {
        console.error("Fetch user failed:", err)
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
  const fetchAlumniDetails = async () => {
    if (user?.email) {
      try {
        const alumni = await getAlumniByEmail(user.email);
        setAlumniId(alumni.Id);
        setFormData((prev) => ({
          ...prev,
          alumni_name: alumni.Name || "",
          alumni_email: alumni.Email || "",
          alumni_dept: alumni.Department || "",
          alumni_reg_no: alumni.RegisterNumber || "",
          alumni_year_of_joining: alumni.YearOfJoining ? String(alumni.YearOfJoining) : "",
          alumni_year_of_passing: alumni.YearOfPassing ? String(alumni.YearOfPassing) : "",
          // You can map more fields if needed
        }));
      } catch (err) {
        console.error("Failed to fetch alumni details:", err);
      }
    }
  };
  fetchAlumniDetails();
}, [user?.email]);

  const [formData, setFormData] = useState({
    alumni_name: "",
    alumni_dept: "",
    alumni_email:"",
    alumni_reg_no: "",
    alumni_year_of_joining: "",
    alumni_year_of_passing: "",
    current_status: "",
    company_name: "",
    designation: "",
    job_location: "",
    success_stories: "",
    });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!alumniId) {
    alert("Alumni ID not found!");
    return;
  }
  const currentDetails = {
  alumniId: alumniId,
  currentStatus: formData.current_status,
  companyName: formData.company_name,
  designation: formData.designation,
  jobLocation: formData.job_location,
  successStories: formData.success_stories,
};

  try {
    await addAlumniCurrentDetails(currentDetails);
    toast.success("Current details saved successfully!");
  } catch (err) {
    toast.error("Failed to save current details.");
  }
};

 return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto w-[1200px]">
        <div className="mb-8 text-start">
          <h1 className="text-2xl font-bold text-orange-600 mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Please fill out your details to complete your alumni profile
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <Card className="">
            <CardHeader>
              <CardTitle className="text-primary">
                Personal Information
              </CardTitle>
              <CardDescription>Basic details about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alumni_name">Full Name *</Label>
                  <Input
                    id="alumni_name"
                    value={formData.alumni_name}
                    onChange={(e) =>
                      handleInputChange("alumni_name", e.target.value)
                    }
                    placeholder="Enter your full name"
                    required
                    readOnly
                    className="cursor-not-allowed bg-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_email">Email *</Label>
                  <Input
                    id="alumni_email"
                    value={formData.alumni_email}
                    onChange={(e) =>
                      handleInputChange("alumni_email", e.target.value)
                    }
                    placeholder="City, Country"
                    required
                    readOnly
                    className="cursor-not-allowed bg-gray-100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Details Section */}
          <Card className="">
            <CardHeader>
              <CardTitle className="text-primary">Academic Details</CardTitle>
              <CardDescription>
                Information about your academic journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alumni_dept">Department *</Label>
                  <Input
                    id="alumni_dept"
                    value={formData.alumni_dept}
                    onChange={(e) =>
                      handleInputChange("alumni_dept", e.target.value)
                    }
                    placeholder="Enter your department"
                    required
                    readOnly
                    className="cursor-not-allowed bg-gray-100"
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
                    placeholder="Enter your registration number"
                    required
                    readOnly
                    className="cursor-not-allowed bg-gray-100"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alumni_year_of_joining">
                    Year of Joining *
                  </Label>
                  <Input
                    id="alumni_year_of_joining"
                    type="number"
                    min="1950"
                    max="2030"
                    value={formData.alumni_year_of_joining}
                    onChange={(e) =>
                      handleInputChange(
                        "alumni_year_of_joining",
                        e.target.value
                      )
                    }
                    placeholder="2020"
                    required
                    readOnly
                    className="cursor-not-allowed bg-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_year_of_passing">
                    Year of Passing *
                  </Label>
                  <Input
                    id="alumni_year_of_passing"
                    type="number"
                    min="1950"
                    max="2030"
                    value={formData.alumni_year_of_passing}
                    onChange={(e) =>
                      handleInputChange(
                        "alumni_year_of_passing",
                        e.target.value
                      )
                    }
                    placeholder="2024"
                    required
                    readOnly
                    className="cursor-not-allowed bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Information Section */}
          <Card className="">
            <CardHeader>
              <CardTitle className="text-primary">Career Information</CardTitle>
              <CardDescription>
                Details about your professional journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label id="current_status" htmlFor="current_status">Current Status *</Label>
                <Select
                value={formData.current_status}
                  onValueChange={(value) =>
                    handleInputChange("current_status", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="job">Job</SelectItem>
                    <SelectItem value="higher-studeis">Higher Studeis</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company_name">Company Name</Label>
                  <Input
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) =>
                      handleInputChange("company_name", e.target.value)
                    }
                    placeholder="Enter company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">
                    Job Title/Designation
                  </Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                    placeholder="Enter your job title"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="job_location">Job Location</Label>
                <Input
                  id="job_location"
                  value={formData.job_location}
                  onChange={(e) =>
                    handleInputChange("job_location", e.target.value)
                  }
                  placeholder="City, Country"
                />
              </div>
            </CardContent>
          </Card>

          {/* Success Stories Section */}
          <Card className="">
            <CardHeader>
              <CardTitle className="text-primary">Success Stories</CardTitle>
              <CardDescription>
                Share your achievements and inspiring moments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="success_stories">Your Success Story</Label>
                <Textarea
                  id="success_stories"
                  value={formData.success_stories}
                  onChange={(e) =>
                    handleInputChange("success_stories", e.target.value)
                  }
                  placeholder="Share your achievements, career highlights, or inspiring moments that might motivate current students..."
                  rows={6}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* <Card className="">
            <CardHeader>
              <CardTitle className="text-primary">Login Crendentials</CardTitle>
              <CardDescription>
                Privacy details here submit the button, if you change your
                details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alumni_name">Username</Label>
                  <Input
                    id="alumni_name"
                    value={user?.email}
                    onChange={(e) =>
                      handleInputChange("alumni_name", e.target.value)
                    }
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_location">Password</Label>
                  <Input
                    id="alumni_location"
                    value={user?.password}
                    onChange={(e) =>
                      handleInputChange("alumni_location", e.target.value)
                    }
                    placeholder="********"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#d56f2c] text-white hover:bg-[#bf5e26]"
            >
              Submit Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
