"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Building2,
  ChevronUp,
  ChevronDown,
  BookCheck,
  Trash,
  Pencil,
  IndianRupee,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteJobPosting, getAllJobPostings } from "@/services/jobservices";
import { toast } from "sonner";

type Job = {
  id: number;
  job_title: string;
  department: string;
  job_type: string;
  location: string;
  salary_package: string;
  overview: string;
  responsibilities: string;
  required_qualifications: string;
  preferred_qualifications: string;
  benefits: string;
  application_deadline: string;
  contact_email: string;
  contact_phone: string;
  application_number: number;
  job_status: string;
  created_at: string;
};

type SortField = "job_title" | "department" | "application_number" | "salary_package" | "created_at" | "application_deadline";
type SortDirection = "asc" | "desc";



export function UniversityJobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  // ✅ Fetch jobs from DB
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobPostings();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id: number) => {
  try {
    await deleteJobPosting(id)
    toast.success("Job deleted successfully");
  } catch (error) {
    console.error("Error deleting job:", error)
      toast.error("Try Again");
  }
}

  const filteredAndSortedJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        job.job_status.toLowerCase() === statusFilter.toLowerCase();
      const matchesType =
        typeFilter === "all" ||
        job.job_type.toLowerCase() === typeFilter.toLowerCase();
      const matchesDepartment =
        departmentFilter === "all" ||
        job.department.toLowerCase() === departmentFilter.toLowerCase();

      return matchesSearch && matchesStatus && matchesType && matchesDepartment;
    });

    // Sorting
    filtered.sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (sortField === "created_at" || sortField === "application_deadline") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      } else if (sortField === "salary_package") {
        aValue = Number.parseInt(aValue.replace(/[^0-9]/g, "")) || 0;
        bValue = Number.parseInt(bValue.replace(/[^0-9]/g, "")) || 0;
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [
    jobs,
    searchTerm,
    statusFilter,
    typeFilter,
    departmentFilter,
    sortField,
    sortDirection,
  ]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  const getStatusBadgeVariant = (
    status: string
  ): { variant: "default" | "outline" | "secondary" | "destructive"; className: string } => {
    switch (status.toLowerCase()) {
      case "active":
        return { variant: "default", className: "bg-green-500 text-white" };
      case "paused":
        return { variant: "default", className: "bg-yellow-500 text-white" };
      case "closed":
        return { variant: "default", className: "bg-red-500 text-white" };
      default:
        return { variant: "outline", className: "" };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-3 px-4">
      <div className="flex items-center gap-1 text-black tracking-tight">
        <BookCheck />
        <h1 className="text-2xl font-bold tracking-tight">Job List</h1>
      </div>
      <p className="text-red-500">
        Note: Once the application closing date is reached, it will be automatically removed from our server within 24 hours.
      </p>

      {/* Search Bar */}
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
      </div>

      {/* Job Listings Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead onClick={() => handleSort("job_title")} className="cursor-pointer">
                    Job Title {getSortIcon("job_title")}
                  </TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead onClick={() => handleSort("salary_package")} className="cursor-pointer">
                    Salary {getSortIcon("salary_package")}
                  </TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead onClick={() => handleSort("application_deadline")} className="cursor-pointer text-start">
                    Closed Date {getSortIcon("application_deadline")}
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-semibold">
                      <a href={`/university/job-description/${job.id}`} className="underline">
                      {job.job_title}
                      </a>
                      </TableCell>
                    <TableCell>{job.department}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        {job.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{job.job_type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-muted-foreground" />
                        {job.salary_package}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {job.application_number}
                    </TableCell>
                    <TableCell>{formatDate(job.application_deadline)}</TableCell>
                    <TableCell>
                      {(() => {
                        const { variant, className } = getStatusBadgeVariant(job.job_status);
                        return (
                          <Badge variant={variant} className={className}>
                            {job.job_status}
                          </Badge>
                        );
                      })()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
