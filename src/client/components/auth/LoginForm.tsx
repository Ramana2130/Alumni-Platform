import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Building2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginForm() {
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent, userType: string) => {
    e.preventDefault();

    const email = (
      document.getElementById(`${userType}-email`) as HTMLInputElement
    ).value;
    const password = (
      document.getElementById(`${userType}-password`) as HTMLInputElement
    ).value;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Login failed");
        return;
      }

      toast.success("Login successful");

      // Save JWT
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", userType);

      if (userType === "student") navigate("/students/dashboard");
      else if (userType === "university") navigate("/university/dashboard");
      else if (userType === "alumni") navigate("/alumni/dashboard");
    } catch (err: any) {
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Alumni Association Platform
          </h1>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-bold text-center text-slate-800">
              Sign In
            </CardTitle>
            <CardDescription className="text-center text-slate-600">
              Choose your account type to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-slate-100">
                {/* Student */}
                <TabsTrigger
                  value="student"
                  className="flex items-center gap-2 
                    data-[state=active]:bg-red-500 
                    data-[state=active]:text-white 
                    hover:bg-red-100 hover:text-red-600 
                    text-slate-700"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="hidden sm:inline">Student</span>
                </TabsTrigger>
                {/* University */}
                <TabsTrigger
                  value="university"
                  className="flex items-center gap-2 
                    data-[state=active]:bg-emerald-600 
                    data-[state=active]:text-white 
                    hover:bg-emerald-100 hover:text-emerald-700 
                    text-slate-700"
                >
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">University</span>
                </TabsTrigger>
                {/* Alumni */}
                <TabsTrigger
                  value="alumni"
                  className="flex items-center gap-2 
                    data-[state=active]:bg-orange-500 
                    data-[state=active]:text-white 
                    hover:bg-orange-100 hover:text-orange-600 
                    text-slate-700"
                >
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Alumni</span>
                </TabsTrigger>
              </TabsList>

              {/* Student Login */}
              <TabsContent value="student" className="space-y-4">
                <form
                  onSubmit={(e) => handleSubmit(e, "student")}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Student Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@university.edu"
                      className="focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter your password"
                      className="focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    Sign In as Student
                  </Button>
                </form>
              </TabsContent>

              {/* University Login */}
              <TabsContent value="university" className="space-y-4">
                <form
                  onSubmit={(e) => handleSubmit(e, "university")}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="university-email">Institution Email</Label>
                    <Input
                      id="university-email"
                      type="email"
                      placeholder="admin@university.edu"
                      className="focus:ring-emerald-600 focus:border-emerald-600"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university-password">Password</Label>
                    <Input
                      id="university-password"
                      type="password"
                      placeholder="Enter your password"
                      className="focus:ring-emerald-600 focus:border-emerald-600"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Sign In as University
                  </Button>
                </form>
              </TabsContent>

              {/* Alumni Login */}
              <TabsContent value="alumni" className="space-y-4">
                <form
                  onSubmit={(e) => handleSubmit(e, "alumni")}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="alumni-email">Email Address</Label>
                    <Input
                      id="alumni-email"
                      type="email"
                      placeholder="alumni@email.com"
                      className="focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alumni-password">Password</Label>
                    <Input
                      id="alumni-password"
                      type="password"
                      placeholder="Enter your password"
                      className="focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Sign In as Alumni
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Footer Links */}
            <div className="mt-6 text-center space-y-2">
              <Button
                variant="link"
                className="text-slate-700 hover:text-slate-900 p-0 h-auto font-normal"
              >
                Forgot your password?
              </Button>
              <div className="text-sm text-slate-600">
                Need help? Contact{" "}
                <Button
                  variant="link"
                  className="text-slate-700 hover:text-slate-900 p-0 h-auto font-normal text-sm"
                >
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
  );
}
