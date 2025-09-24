import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

export function Universitysetting() {
  const [email, setEmail] = useState("college@gmail.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleEmailUpdate = async () => {
    const newErrors: { [key: string]: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        toast.success(
          "Email Updated, Your email address has been successfully updated."
        );
      }, 1000);
    }
  };

  const handlePasswordUpdate = async () => {
    const newErrors: { [key: string]: string } = {};

    if (!currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (!validatePassword(newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        toast.success(
          "Password Updated, Your password has been successfully updated."
        );
      }, 1000);
    }
  };

  return (
    <div className="container  px-4 py-8 max-w-4xl">
      {/* Header Section */}
      <div className="text-start mb-8 ">
        <h1 className="text-2xl font-bold mb-4  text-emerald-700">
          University Profile Settings
        </h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Manage your university account settings and security preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email Settings Card */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Mail className="h-5 w-5" />
              Email Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-card-foreground font-medium"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`bg-input border-border ${
                  errors.email ? "border-destructive" : ""
                }`}
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <Alert className="border-accent/20 bg-accent/5">
              <Shield className="h-4 w-4 text-accent" />
              <AlertDescription className="text-card-foreground">
                Your email address is used for account recovery and important
                notifications.
              </AlertDescription>
            </Alert>

            <Button
              onClick={handleEmailUpdate}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoading ? "Updating..." : "Update Email"}
            </Button>
          </CardContent>
        </Card>

        {/* Password Settings Card */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Lock className="h-5 w-5" />
              Password Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="currentPassword"
                className="text-card-foreground font-medium"
              >
                Current Password
              </Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className={`bg-input border-border pr-10 ${
                    errors.currentPassword ? "border-destructive" : ""
                  }`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {errors.currentPassword && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.currentPassword}
                </p>
              )}
            </div>

            <Separator className="bg-border" />

            <div className="space-y-2">
              <Label
                htmlFor="newPassword"
                className="text-card-foreground font-medium"
              >
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className={`bg-input border-border pr-10 ${
                    errors.newPassword ? "border-destructive" : ""
                  }`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {errors.newPassword && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-card-foreground font-medium"
              >
                Confirm New Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className={`bg-input border-border pr-10 ${
                    errors.confirmPassword ? "border-destructive" : ""
                  }`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Alert className="border-secondary/20 bg-secondary/5">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <AlertDescription className="text-card-foreground">
                Password must be at least 8 characters long for security.
              </AlertDescription>
            </Alert>

            <Button
              onClick={handlePasswordUpdate}
              disabled={isLoading}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              {isLoading ? "Updating..." : "Update Password"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Security Notice */}
      <Card className="mt-6 bg-muted/30 border-border">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <h3 className="font-semibold text-card-foreground mb-2">
                Security Best Practices
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Use a strong, unique password for your university account
                </li>
                <li>• Never share your login credentials with others</li>
                <li>• Update your password regularly for enhanced security</li>
                <li>• Contact IT support if you suspect unauthorized access</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
