import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  LinkIcon,
  TagIcon,
  MailIcon,
} from "lucide-react";
import { getEventById, updateEvent } from "@/services/eventservices";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export function EventEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    speaker_name: "",
    speaker_bio: "",
    registration_link: "",
    category: "",
    send_notification: false,
  });

  // Load existing event
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const event = await getEventById(Number(id));
        setFormData({
          title: event.title || "",
          date: event.date?.split("T")[0] || "",
          time: event.time || "",
          description: event.description || "",
          speaker_name: event.speaker_name || "",
          speaker_bio: event.speaker_bio || "",
          registration_link: event.registration_link || "",
          category: event.category || "",
          send_notification: event.send_notification || false,
        });
      } catch (err) {
        console.error("Failed to load event:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchEvent();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateEvent(Number(id), formData);
      toast.success("Event updated successfully");
      navigate("/alumni/event-posting");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update event");
    }
  };

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) return <p className="text-center mt-6">Loading event...</p>;

  return (
    <div className="mx-auto p-4">
      <Card className="w-[1200px] mx-auto bg-card shadow-lg">
        <CardHeader className="bg-orange-50 border-b border-orange-200">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-orange-600" />
            Edit Event
          </CardTitle>
          <CardDescription>Update your event details below</CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Event Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-orange-600" /> Event
                  Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="time" className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-orange-600" /> Event Time *
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="flex items-center gap-2">
                <TagIcon className="h-4 w-4 text-orange-600" /> Event Category *
              </Label>
              <Select
                value={formData.category}
                onValueChange={(val) => handleInputChange("category", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
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

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Event Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                required
              />
            </div>

            {/* Speaker Info */}
            <div className="space-y-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-orange-600" /> Speaker
                Information
              </h3>
              <Input
                id="speaker_name"
                placeholder="Speaker Name"
                value={formData.speaker_name}
                onChange={(e) =>
                  handleInputChange("speaker_name", e.target.value)
                }
              />
              <Textarea
                id="speaker_bio"
                placeholder="Speaker Bio"
                value={formData.speaker_bio}
                onChange={(e) =>
                  handleInputChange("speaker_bio", e.target.value)
                }
              />
            </div>

            {/* Registration Link */}
            <div className="space-y-2">
              <Label
                htmlFor="registration_link"
                className="flex items-center gap-2"
              >
                <LinkIcon className="h-4 w-4 text-orange-600" /> Registration
                Link
              </Label>
              <Input
                id="registration_link"
                value={formData.registration_link}
                onChange={(e) =>
                  handleInputChange("registration_link", e.target.value)
                }
              />
            </div>

            {/* Notification */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="send_notification"
                checked={formData.send_notification}
                onCheckedChange={(val) =>
                  handleInputChange("send_notification", val as boolean)
                }
              />
              <Label
                htmlFor="send_notification"
                className="flex items-center gap-2"
              >
                <MailIcon className="h-4 w-4 text-orange-600" /> Send email
                notification
              </Label>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-orange-600 text-white">
              Update Event
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
