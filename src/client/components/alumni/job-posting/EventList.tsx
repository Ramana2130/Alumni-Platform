"use client"

import { useEffect, useState } from "react"
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { deleteEvent, getEvents } from "@/services/eventservices"

interface Event {
  id: number
  title: string
  date: string
  time: string
  category: string
  registration_link: string
  speaker_name: string
}

const categoryColors: Record<string, string> = {
  Conference: "bg-blue-100 text-blue-800 border-blue-200",
  Webinar: "bg-green-100 text-green-800 border-green-200",
  Workshop: "bg-purple-100 text-purple-800 border-purple-200",
  Meeting: "bg-orange-100 text-orange-800 border-orange-200",
  Summit: "bg-pink-100 text-pink-800 border-pink-200",
}

export function EventsList() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7

  const loadEvents = async () => {
    try {
      setLoading(true)
      const data = await getEvents() // 👈 fetch from backend
      console.log("Fetched events:", data)
      setEvents(data)
    } catch (err) {
      console.error("Failed to load events:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [])

  const handleDelete = async (eventId: number) => {
    try {
      await deleteEvent(eventId)
      await loadEvents() // refresh after delete
    } catch (err) {
      console.error("Delete failed:", err)
    }
  }

  // pagination calculation
  const totalPages = Math.ceil(events.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentEvents = events.slice(startIndex, startIndex + itemsPerPage)

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
                <th className="text-left p-4 font-semibold text-card-foreground">Event Link</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Speaker Name</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Date</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Time</th>
                <th className="text-left p-4 font-semibold text-card-foreground">Category</th>
                <th className="text-center p-4 font-semibold text-card-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!loading && currentEvents.length > 0 ? (
                currentEvents.map((event, index) => (
                  <tr
                    key={event.id}
                    className={`border-b hover:bg-muted/20 transition-colors ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/10"
                    }`}
                  >
                    <td className="p-3">{event.title}</td>
                    <td className="p-3 text-blue-500 cursor-pointer underline">
                      <a
                      href={event.registration_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      {event.registration_link}
                      </a>
                      </td>
                    <td className="p-3">{event.speaker_name}</td>
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
                    <td className="text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => console.log("Edit", event.id)}>
                            <Edit className="h-4 w-4 mr-2" />
                            <a href={`/alumni/event-editing/${event.id}`}>Edit</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(event.id)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-6">
                    {loading ? "Loading events..." : "No events found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {events.length > 0 && (
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
        )}
      </CardContent>
    </Card>
  )
}
