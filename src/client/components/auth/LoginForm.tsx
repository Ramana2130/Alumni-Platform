"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, Building2, Users } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function LoginForm() {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent, userType: string) => {
  e.preventDefault();
  if (userType === "student") {
    navigate("/students/dashboard");
  }else if(userType === "university"){
    navigate("/university/dashboard");
  }else if(userType === "alumni"){
    navigate("/alumni/dashboard");
  }
  // Add similar logic for other user types if needed
  console.log(`${userType} login submitted`);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">EduPortal</h1>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-bold text-center text-slate-800">Sign In</CardTitle>
            <CardDescription className="text-center text-slate-600">
              Choose your account type to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-slate-100">
                <TabsTrigger
                  value="student"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-700"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="hidden sm:inline">Student</span>
                </TabsTrigger>
                <TabsTrigger
                  value="university"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-700"
                >
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">University</span>
                </TabsTrigger>
                <TabsTrigger
                  value="alumni"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-700"
                >
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Alumni</span>
                </TabsTrigger>
              </TabsList>

              {/* Student Login */}
              <TabsContent value="student" className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, "student")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email" className="text-slate-700 font-medium">
                      Student Email
                    </Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@university.edu"
                      className="bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign In as Student
                  </Button>
                </form>
              </TabsContent>

              {/* University Login */}
              <TabsContent value="university" className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, "university")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="university-email" className="text-slate-700 font-medium">
                      Institution Email
                    </Label>
                    <Input
                      id="university-email"
                      type="email"
                      placeholder="admin@university.edu"
                      className="bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university-password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="university-password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign In as University
                  </Button>
                </form>
              </TabsContent>

              {/* Alumni Login */}
              <TabsContent value="alumni" className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, "alumni")} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="alumni-email" className="text-slate-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="alumni-email"
                      type="email"
                      placeholder="alumni@email.com"
                      className="bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alumni-password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="alumni-password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign In as Alumni
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Footer Links */}
            <div className="mt-6 text-center space-y-2">
              <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal">
                Forgot your password?
              </Button>
              <div className="text-sm text-slate-600">
                Need help? Contact{" "}
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-normal text-sm">
                  support@eduportal.edu
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-600">
          <p>© 2024 EduPortal. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
