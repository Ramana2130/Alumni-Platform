import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, ClockIcon, UserIcon, LinkIcon, TagIcon, MailIcon } from "lucide-react"

export function EventPostingForm() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    speakerName: "",
    speakerBio: "",
    registrationLink: "",
    category: "",
    sendNotification: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Event submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
    <Card className="w-full bg-card border-orange-200 shadow-lg">
      <CardHeader className="bg-orange-50 border-b border-orange-200">
        <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
          <CalendarIcon className="h-6 w-6 text-orange-600" />
          Post Your Event or Webinar
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Fill out the details below to share your event with the alumni community
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-semibold text-foreground">
              Event Title *
            </Label>
            <Input
              id="title"
              placeholder="Enter your event title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="text-lg h-12 bg-input border-border focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-orange-600" />
                Event Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="bg-input border-border focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-orange-600" />
                Event Time *
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className="bg-input border-border focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-semibold text-foreground flex items-center gap-2">
              <TagIcon className="h-4 w-4 text-orange-600" />
              Event Category *
            </Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger className="bg-input border-border focus:ring-orange-500 focus:border-orange-500">
                <SelectValue placeholder="Select event category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="networking">Networking Event</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="webinar">Webinar</SelectItem>
                <SelectItem value="panel">Panel Discussion</SelectItem>
                <SelectItem value="career">Career Development</SelectItem>
                <SelectItem value="industry">Industry Insights</SelectItem>
                <SelectItem value="social">Social Gathering</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Event Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold text-foreground">
              Event Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of your event, including what attendees will learn or gain from participating..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="min-h-32 bg-input border-border focus:ring-orange-500 focus:border-orange-500 resize-none"
              required
            />
          </div>

          {/* Speaker Information */}
          <div className="space-y-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-orange-600" />
              Speaker Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="speakerName" className="text-sm font-semibold text-foreground">
                Speaker Name(s)
              </Label>
              <Input
                id="speakerName"
                placeholder="Enter speaker name(s)"
                value={formData.speakerName}
                onChange={(e) => handleInputChange("speakerName", e.target.value)}
                className="bg-input border-border focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="speakerBio" className="text-sm font-semibold text-foreground">
                Speaker Bio/Background
              </Label>
              <Textarea
                id="speakerBio"
                placeholder="Brief background about the speaker(s), their expertise, and credentials..."
                value={formData.speakerBio}
                onChange={(e) => handleInputChange("speakerBio", e.target.value)}
                className="min-h-24 bg-input border-border focus:ring-orange-500 focus:border-orange-500 resize-none"
              />
            </div>
          </div>

          {/* Registration Link */}
          <div className="space-y-2">
            <Label htmlFor="registrationLink" className="text-sm font-semibold text-foreground flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-orange-600" />
              Registration Link
            </Label>
            <Input
              id="registrationLink"
              type="url"
              placeholder="https://your-registration-link.com"
              value={formData.registrationLink}
              onChange={(e) => handleInputChange("registrationLink", e.target.value)}
              className="bg-input border-border focus:ring-orange-500 focus:border-orange-500"
            />
            <p className="text-xs text-muted-foreground">
              Optional: Provide a link where alumni can register for your event
            </p>
          </div>

          {/* Notification Checkbox */}
          <div className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <Checkbox
              id="sendNotification"
              checked={formData.sendNotification}
              onCheckedChange={(checked) => handleInputChange("sendNotification", checked as boolean)}
              className="border-border data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
            />
            <Label
              htmlFor="sendNotification"
              className="text-sm text-foreground flex items-center gap-2 cursor-pointer"
            >
              <MailIcon className="h-4 w-4 text-orange-600" />
              Send email notification to alumni network
            </Label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-lg transition-colors"
            >
              Submit Event for Review
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Your event will be reviewed and published within 24 hours
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}
