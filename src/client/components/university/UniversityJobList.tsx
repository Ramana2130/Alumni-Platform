"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, MapPin, Calendar, DollarSign, Building2, ChevronUp, ChevronDown, Plus } from "lucide-react"

// Sample job data
const sampleJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    postedDate: "2024-01-15",
    status: "Active",
    applicants: 24,
    department: "Engineering",
    experience: "Senior",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    postedDate: "2024-01-12",
    status: "Active",
    applicants: 18,
    department: "Product",
    experience: "Mid-level",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80,000 - $100,000",
    postedDate: "2024-01-10",
    status: "Paused",
    applicants: 31,
    department: "Design",
    experience: "Mid-level",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataDriven Co.",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    postedDate: "2024-01-08",
    status: "Active",
    applicants: 12,
    department: "Data",
    experience: "Senior",
  },
  {
    id: 5,
    title: "Marketing Specialist",
    company: "GrowthHackers",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$60,000 - $75,000",
    postedDate: "2024-01-05",
    status: "Closed",
    applicants: 45,
    department: "Marketing",
    experience: "Entry-level",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    postedDate: "2024-01-03",
    status: "Active",
    applicants: 8,
    department: "Engineering",
    experience: "Senior",
  },
]

type SortField = "title" | "company" | "postedDate" | "applicants" | "salary"
type SortDirection = "asc" | "desc"

export function UniversityJobList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [sortField, setSortField] = useState<SortField>("postedDate")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const filteredAndSortedJobs = useMemo(() => {
    const filtered = sampleJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || job.status.toLowerCase() === statusFilter.toLowerCase()
      const matchesType = typeFilter === "all" || job.type.toLowerCase() === typeFilter.toLowerCase()
      const matchesDepartment =
        departmentFilter === "all" || job.department.toLowerCase() === departmentFilter.toLowerCase()

      return matchesSearch && matchesStatus && matchesType && matchesDepartment
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: any = a[sortField]
      let bValue: any = b[sortField]

      if (sortField === "postedDate") {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      } else if (sortField === "salary") {
        // Extract first number from salary range for sorting
        aValue = Number.parseInt(aValue.replace(/[^0-9]/g, ""))
        bValue = Number.parseInt(bValue.replace(/[^0-9]/g, ""))
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [searchTerm, statusFilter, typeFilter, departmentFilter, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
  }

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "default"
      case "paused":
        return "secondary"
      case "closed":
        return "destructive"
      default:
        return "outline"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-6 px-8">
      {/* Header with Add Job Button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search jobs, companies, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
        </div>
        {/* <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add New Job
        </Button> */}
      </div>

      {/* Filters */}
      <Card className="">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Job Type</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Department</label>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="data">Data</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Showing {filteredAndSortedJobs.length} of {sampleJobs.length} jobs
        </p>
      </div>

      {/* Job Listings Table */}
      <Card className="">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead
                    className="cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() => handleSort("title")}
                  >
                    <div className="flex items-center gap-2">
                      Job Title
                      {getSortIcon("title")}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() => handleSort("company")}
                  >
                    <div className="flex items-center gap-2">
                      Company
                      {getSortIcon("company")}
                    </div>
                  </TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  {/* <TableHead
                    className="cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() => handleSort("salary")}
                  >
                    <div className="flex items-center gap-2">
                      Salary
                      {getSortIcon("salary")}
                    </div>
                  </TableHead> */}
                  <TableHead
                    className="cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() => handleSort("applicants")}
                  >
                    <div className="flex items-center gap-2">
                      Applicants
                      {getSortIcon("applicants")}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() => handleSort("postedDate")}
                  >
                    <div className="flex items-center gap-2">
                      Posted Date
                      {getSortIcon("postedDate")}
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  {/* <TableHead>Actions</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedJobs.map((job) => (
                  <TableRow key={job.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell>
                      <div>
                        <div className="font-semibold text-foreground"><a href="/university/job-description" className="underline">{job.title}</a></div>
                        <div className="text-sm text-muted-foreground">{job.experience}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{job.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{job.type}</Badge>
                    </TableCell>
                    {/* <TableCell>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                    </TableCell> */}
                    <TableCell>
                      <div className="text-center">
                        <span className="font-semibold text-lg">{job.applicants}</span>
                        <div className="text-xs text-muted-foreground">applicants</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{formatDate(job.postedDate)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(job.status)}>{job.status}</Badge>
                    </TableCell>
                    {/* <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <a href="/job-description">View</a>
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {filteredAndSortedJobs.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-muted-foreground">
              <Building2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
