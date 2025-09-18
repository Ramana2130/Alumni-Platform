"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const alumniData = [
  {
    id: 1,
    name: "Sarah Johnson",
    major: "Computer Science",
    graduationYear: 2020,
    currentPosition: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    avatar: "/professional-woman-software-engineer.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    major: "Business Administration",
    graduationYear: 2019,
    currentPosition: "Product Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    avatar: "/professional-asian-man-business.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    major: "Marketing",
    graduationYear: 2021,
    currentPosition: "Marketing Director",
    company: "Spotify",
    location: "New York, NY",
    avatar: "/professional-latina-woman-marketing.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    major: "Mechanical Engineering",
    graduationYear: 2018,
    currentPosition: "Lead Engineer",
    company: "Tesla",
    location: "Austin, TX",
    avatar: "/professional-engineer.png",
  },
  {
    id: 5,
    name: "Lisa Wang",
    major: "Data Science",
    graduationYear: 2022,
    currentPosition: "Data Scientist",
    company: "Netflix",
    location: "Los Angeles, CA",
    avatar: "/asian-woman-data-scientist.png",
  },
  {
    id: 6,
    name: "James Wilson",
    major: "Finance",
    graduationYear: 2017,
    currentPosition: "Investment Analyst",
    company: "Goldman Sachs",
    location: "New York, NY",
    avatar: "/professional-man-finance-analyst.jpg",
  },
  {
    id: 7,
    name: "James Wilson",
    major: "Finance",
    graduationYear: 2017,
    currentPosition: "Investment Analyst",
    company: "Goldman Sachs",
    location: "New York, NY",
    avatar: "/professional-man-finance-analyst.jpg",
  },
]

export function UniverSityAlumniProfile() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const graduationYears = Array.from(new Set(alumniData.map((alumni) => alumni.graduationYear))).sort((a, b) => b - a)

  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.graduationYear.toString().includes(searchTerm) ||
      alumni.currentPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm)

    const matchesYear = selectedYear === "all" || alumni.graduationYear.toString() === selectedYear

    return matchesSearch && matchesYear
  })

  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedAlumni = filteredAlumni.slice(startIndex, endIndex)

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto  py-2">
      {/* Header Section */}
      <div className="text-center mb-8">
        {/* <p className="text-lg text-muted-foreground mb-6 text-pretty">
          Explore our network of accomplished graduates making their mark across industries
        </p> */}
        <h1 className="text-2xl font-bold text-emerald-700 pb-4 text-start">Alumni List</h1>

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by name, major, or company..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>
          <Select value={selectedYear} onValueChange={handleYearChange}>
            <SelectTrigger className="w-full sm:w-48 bg-input border-border">
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {graduationYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  Class of {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Alumni Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-primary">
            Alumni Profiles ({filteredAlumni.length} found)
            {filteredAlumni.length > 0 && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                • Page {currentPage} of {totalPages}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="min-h-[500px] flex flex-col">
          <div className="overflow-x-auto flex-1">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-primary font-semibold">Name</TableHead>
                  <TableHead className="text-primary font-semibold">Major</TableHead>
                  <TableHead className="text-primary font-semibold">Year</TableHead>
                  <TableHead className="text-primary font-semibold">Current Position</TableHead>
                  <TableHead className="text-primary font-semibold">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedAlumni.map((alumni, index) => (
                  <TableRow
                    key={alumni.id}
                    className={`border-border hover:bg-muted/50 transition-colors ${
                      index % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }`}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={alumni.avatar} alt={alumni.name} />
                          <AvatarFallback>
                            {alumni.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-foreground">
                            <a href="/university/alumni-personal-details" className="underline">{alumni.name}</a>
                            </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-border text-muted-foreground">
                        {alumni.major}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {alumni.graduationYear}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-foreground font-medium">{alumni.currentPosition}</div>
                      <div className="text-sm text-muted-foreground">{alumni.company}</div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {alumni.location}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {filteredAlumni.length > itemsPerPage && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAlumni.length)} of {filteredAlumni.length} results
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Empty state */}
          {filteredAlumni.length === 0 && (
            <div className="text-center py-8 flex-1 flex items-center justify-center">
              <p className="text-muted-foreground">No alumni found matching your search criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
