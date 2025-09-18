import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, UserPlus, MapPin, Building2, GraduationCap, Filter, Users, MessageSquare, ArrowRight } from "lucide-react"

// Mock data for alumni friends
const mockFriends = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/professional-woman-smiling.png",
    title: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    graduationYear: "B.Tech - IT",
    major: "Computer Science",
    mutualFriends: 12,
    isOnline: true,
    tags: ["Tech", "AI/ML", "Leadership"],
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/professional-asian-man.png",
    title: "Product Manager",
    company: "Meta",
    location: "Menlo Park, CA",
    graduationYear: "BE - CSE",
    major: "Business Administration",
    mutualFriends: 8,
    isOnline: false,
    tags: ["Product", "Strategy", "Growth"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/professional-latina-woman.png",
    title: "UX Design Lead",
    company: "Airbnb",
    location: "Austin, TX",
    graduationYear: "BE - MECH",
    major: "Design",
    mutualFriends: 15,
    isOnline: true,
    tags: ["Design", "UX", "Research"],
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "/professional-korean-man-glasses.jpg",
    title: "Data Scientist",
    company: "Netflix",
    location: "Los Angeles, CA",
    graduationYear: "BE - EEE",
    major: "Statistics",
    mutualFriends: 6,
    isOnline: true,
    tags: ["Data Science", "Analytics", "ML"],
  },
  {
    id: 5,
    name: "Jessica Thompson",
    avatar: "/professional-blonde-woman.png",
    title: "Marketing Director",
    company: "Spotify",
    location: "New York, NY",
    graduationYear: "BE - CSE",
    major: "Marketing",
    mutualFriends: 20,
    isOnline: false,
    tags: ["Marketing", "Brand", "Growth"],
  },
  {
    id: 6,
    name: "Alex Patel",
    avatar: "/professional-indian-man-beard.jpg",
    title: "DevOps Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    graduationYear: "BE - CSE",
    major: "Computer Engineering",
    mutualFriends: 9,
    isOnline: true,
    tags: ["DevOps", "Cloud", "Infrastructure"],
  },
  {
    id: 7,
    name: "Rachel Green",
    avatar: "/professional-redhead-woman.jpg",
    title: "Financial Analyst",
    company: "Goldman Sachs",
    location: "New York, NY",
    graduationYear: "BE - ECE",
    major: "Finance",
    mutualFriends: 11,
    isOnline: false,
    tags: ["Finance", "Investment", "Analysis"],
  },
  {
    id: 8,
    name: "James Wilson",
    avatar: "/professional-black-man-suit.jpg",
    title: "Startup Founder",
    company: "TechStart Inc.",
    location: "San Diego, CA",
    graduationYear: "BTech - AIDS",
    major: "Entrepreneurship",
    mutualFriends: 25,
    isOnline: true,
    tags: ["Startup", "Founder", "Innovation"],
  },
  {
    id: 9,
    name: "Lisa Wang",
    avatar: "/professional-chinese-woman.png",
    title: "Research Scientist",
    company: "Microsoft Research",
    location: "Redmond, WA",
    graduationYear: "BE - CSE",
    major: "Computer Science PhD",
    mutualFriends: 7,
    isOnline: true,
    tags: ["Research", "AI", "Publications"],
  },
  {
    id: 10,
    name: "Carlos Martinez",
    avatar: "/professional-hispanic-man.png",
    title: "Solutions Architect",
    company: "Salesforce",
    location: "San Francisco, CA",
    graduationYear: "BE - CSE",
    major: "Information Systems",
    mutualFriends: 14,
    isOnline: false,
    tags: ["Architecture", "Cloud", "Enterprise"],
  },
  {
    id: 11,
    name: "Amanda Foster",
    avatar: "/professional-brunette-woman.jpg",
    title: "VP of Engineering",
    company: "Stripe",
    location: "San Francisco, CA",
    graduationYear: "BE - CSE",
    major: "Computer Science",
    mutualFriends: 18,
    isOnline: true,
    tags: ["Leadership", "Engineering", "Fintech"],
  },
  {
    id: 12,
    name: "Robert Taylor",
    avatar: "/professional-white-man-glasses.jpg",
    title: "Cybersecurity Specialist",
    company: "Palantir",
    location: "Denver, CO",
    graduationYear: "BE - CSE",
    major: "Cybersecurity",
    mutualFriends: 5,
    isOnline: false,
    tags: ["Security", "Privacy", "Defense"],
  },
]

export function AlumniList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredFriends = mockFriends.filter((friend) => {
    const matchesSearch =
      friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      friend.title.toLowerCase().includes(searchQuery.toLowerCase())

    if (selectedFilter === "online") return matchesSearch && friend.isOnline
    if (selectedFilter === "recent") return matchesSearch && Number.parseInt(friend.graduationYear) >= 2018
    return matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, company, or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex gap-2">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("all")}
              className="bg-[#e7000b]"
            >
              All
            </Button>
            <Button
              variant={selectedFilter === "online" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("online")}
            >
              Online
            </Button>
            <Button
              variant={selectedFilter === "recent" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("recent")}
            >
              Recent Grads
            </Button>
          </div>
        </div>
      </div>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFriends.map((friend) => (
          <Card key={friend.id} className="group hover:shadow-lg transition-all duration-200 border-border bg-[#f9fefe]">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Avatar and Online Status */}
                <div className="flex items-start justify-between">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.name} />
                      <AvatarFallback className="text-lg font-semibold">
                        {friend.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {friend.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Class of {friend.graduationYear}
                  </Badge>
                </div>

                {/* Name and Title */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-foreground leading-tight">{friend.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{friend.title}</p>
                </div>

                {/* Company and Location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{friend.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{friend.location}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {friend.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {friend.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{friend.tags.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Mutual Friends */}
                <div className="text-xs text-muted-foreground">{friend.mutualFriends} mutual connections</div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2 ">
                  <Button size="sm" className="flex-1 bg-[#e7000b] hover:bg-[#e7000b]">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    <a href="/students/student-alumni-details">
                    <ArrowRight className="h-4 w-4" />

                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredFriends.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No alumni found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms or filters to find more connections.</p>
        </div>
      )}
    </div>
  )
}
