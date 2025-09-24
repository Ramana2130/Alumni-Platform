import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getStudentByEmail } from "@/services/studentservices"

export default function StudentPersonalProfile() {
    const [formData, setFormData] = useState({
    email: "",
    role: "",
  });

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        // Fetch user email from token (or /auth/me endpoint)
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const user = await res.json();
        console.log(user);
        // Fetch alumni details by email
        const alumni = await getStudentByEmail(user.email);
        setFormData({
          email: user.email || "",
          role: user.role || "",
        });
      } catch (err) {
        // handle error
      }
    };
    fetchStudentDetails();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  console.log("Alumni Profile Data:", formData)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  const handleSaveProgress = () => {
    console.log("Progress saved:", formData)
    // Handle save progress here
  }

  return (
    <div className="min-h-screen bg-background p-2 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-start">
          <h1 className="text-2xl font-bold text-[#e7000b] mb-2">Profile</h1>
          <p className="text-muted-foreground">Please fill out your details to complete your alumni profile</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-primary">Personal Information</CardTitle>
              <CardDescription>Basic details about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    placeholder="City, Country"
                    required
                    readOnly
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Details Section */}
          {/* <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-primary">Academic Details</CardTitle>
              <CardDescription>Information about your academic journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Department *</Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="electrical">Electrical Engineering</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="business">Business Administration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_reg_no">Registration Number *</Label>
                  <Input
                    id="alumni_reg_no"
                    value={formData.alumni_reg_no}
                    onChange={(e) => handleInputChange("alumni_reg_no", e.target.value)}
                    placeholder="Enter your registration number"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alumni_year_of_joining">Year of Joining *</Label>
                  <Input
                    id="alumni_year_of_joining"
                    type="number"
                    min="1950"
                    max="2030"
                    value={formData.alumni_year_of_joining}
                    onChange={(e) => handleInputChange("alumni_year_of_joining", e.target.value)}
                    placeholder="2020"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni_year_of_passing">Year of Passing *</Label>
                  <Input
                    id="alumni_year_of_passing"
                    type="number"
                    min="1950"
                    max="2030"
                    value={formData.alumni_year_of_passing}
                    onChange={(e) => handleInputChange("alumni_year_of_passing", e.target.value)}
                    placeholder="2024"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleSaveProgress}
              className="w-full sm:w-auto bg-transparent"
            >
              Save Progress
            </Button>
            <Button type="submit" className="w-full sm:w-auto bg-[#e7000b] text-white hover:bg-[#e7000b]">
              Submit Profile
            </Button>
          </div> */}
        </form>
      </div>
    </div>
  )
}
