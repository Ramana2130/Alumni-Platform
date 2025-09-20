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

export default function ProfilePage() {
    const [user, setUser] = useState<{ email: string; role: string; password: string } | null>(null)


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
          console.log("Fetched user:", data)
        }
      } catch (err) {
        console.error("Fetch user failed:", err)
      }
    }
    fetchUser()
  }, [])

  const [formData, setFormData] = useState({
    alumni_name: "",
    alumni_dept: "",
    alumni_reg_no: "",
    alumni_year_of_joining: "",
    alumni_year_of_passing: "",
    alumni_current_status: "",
    alumni_company_name: "",
    alumni_designation: "",
    alumni_job_location: "",
    success_stories: "",
    alumni_location: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Alumni Profile Data:", formData);
    // Handle form submission here
  };

  const handleSaveProgress = () => {
    console.log("Progress saved:", formData);
    // Handle save progress here
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
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_location">Current Location *</Label>
                  <Input
                    id="alumni_location"
                    value={formData.alumni_location}
                    onChange={(e) =>
                      handleInputChange("alumni_location", e.target.value)
                    }
                    placeholder="City, Country"
                    required
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
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("alumni_dept", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="electrical">
                        Electrical Engineering
                      </SelectItem>
                      <SelectItem value="mechanical">
                        Mechanical Engineering
                      </SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="business">
                        Business Administration
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
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
                <Label htmlFor="alumni_current_status">Current Status *</Label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("alumni_current_status", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed">Employed</SelectItem>
                    <SelectItem value="self-employed">Self-Employed</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="student">Further Studies</SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alumni_company_name">Company Name</Label>
                  <Input
                    id="alumni_company_name"
                    value={formData.alumni_company_name}
                    onChange={(e) =>
                      handleInputChange("alumni_company_name", e.target.value)
                    }
                    placeholder="Enter company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_designation">
                    Job Title/Designation
                  </Label>
                  <Input
                    id="alumni_designation"
                    value={formData.alumni_designation}
                    onChange={(e) =>
                      handleInputChange("alumni_designation", e.target.value)
                    }
                    placeholder="Enter your job title"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alumni_job_location">Job Location</Label>
                <Input
                  id="alumni_job_location"
                  value={formData.alumni_job_location}
                  onChange={(e) =>
                    handleInputChange("alumni_job_location", e.target.value)
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

          <Card className="">
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
          </Card>

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
