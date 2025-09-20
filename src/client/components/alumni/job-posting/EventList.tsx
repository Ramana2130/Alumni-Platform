"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Edit,
  Trash2,
  MoreHorizontal,
  Calendar,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  category: string
}

const mockEvents: Event[] = [
  { id: "1", title: "Annual Tech Conference 2024", date: "2024-03-15", time: "09:00 AM", category: "Conference" },
  { id: "2", title: "Product Launch Webinar", date: "2024-03-20", time: "02:00 PM", category: "Webinar" },
  { id: "3", title: "Team Building Workshop", date: "2024-03-25", time: "10:30 AM", category: "Workshop" },
  { id: "4", title: "Quarterly Business Review", date: "2024-04-01", time: "01:00 PM", category: "Meeting" },
  { id: "5", title: "Customer Success Summit", date: "2024-04-10", time: "09:30 AM", category: "Summit" },
  { id: "6", title: "Hackathon 2024", date: "2024-04-20", time: "11:00 AM", category: "Conference" },
  { id: "7", title: "Leadership Meetup", date: "2024-05-01", time: "03:00 PM", category: "Meeting" },
  { id: "8", title: "AI Workshop", date: "2024-05-05", time: "10:00 AM", category: "Workshop" },
  { id: "9", title: "Cybersecurity Webinar", date: "2024-05-12", time: "01:00 PM", category: "Webinar" },
  { id: "10", title: "Annual Alumni Summit", date: "2024-06-01", time: "09:30 AM", category: "Summit" },
]

const categoryColors: Record<string, string> = {
  Conference: "bg-blue-100 text-blue-800 border-blue-200",
  Webinar: "bg-green-100 text-green-800 border-green-200",
  Workshop: "bg-purple-100 text-purple-800 border-purple-200",
  Meeting: "bg-orange-100 text-orange-800 border-orange-200",
  Summit: "bg-pink-100 text-pink-800 border-pink-200",
}

export function EventsList() {
  const [events, setEvents] = useState<Event[]>(mockEvents)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  // pagination calculation
  const totalPages = Math.ceil(events.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentEvents = events.slice(startIndex, startIndex + itemsPerPage)

  const handleEdit = (eventId: string) => {
    console.log("Edit event:", eventId)
  }

  const handleDelete = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card className="w-[1200px] mx-auto">
      <CardHeader className="bg-muted/50 border-b bg-orange-50">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Calendar className="h-6 w-6 text-orange-600" />
          Event List
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30 border-b sticky top-0">
              <tr>
                <th className="text-left p-4 font-semibold text-card-foreground">Event Title</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Date</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Time</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Category</th>
                <th className="text-center p-4 font-semibold text-card-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEvents.map((event, index) => (
                <tr
                  key={event.id}
                  className={`border-b hover:bg-muted/20 transition-colors ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/10"
                  }`}
                >
                  <td className="p-3">{event.title}</td>
                  <td className="p-2">{formatDate(event.date)}</td>
                  <td className="p-2">{event.time}</td>
                  <td className="p-2">
                    <Badge
                      variant="outline"
                      className={`${categoryColors[event.category] || "bg-gray-100 text-gray-800"} font-medium`}
                    >
                      {event.category}
                    </Badge>
                  </td>
                  <td className=" text-center">
                    <div className="flex items-center justify-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(event.id)}>
                            <Edit className="h-4 w-4 mr-2" />
                             <a href={`/alumni/event-editing`}>Edit</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(event.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-3 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Prev
          </Button>

          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
