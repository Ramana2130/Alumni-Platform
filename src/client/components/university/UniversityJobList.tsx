import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  MapPin,
  ChevronUp,
  ChevronDown,
  BookCheck,
  IndianRupee,
} from "lucide-react";
import { getAllJobPostings, deleteJobPosting } from "@/services/jobservices";
import { toast } from "sonner";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Job = {
  id: number;
  job_title: string;
  company_name: string;
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

type SortField =
  | "job_title"
  | "department"
  | "application_number"
  | "salary_package"
  | "created_at"
  | "application_deadline";
type SortDirection = "asc" | "desc";

export function UniversityJobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // ✅ Fetch jobs
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
      await deleteJobPosting(id);
      toast.success("Job deleted successfully");
      setJobs((prev) => prev.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("Try Again");
    }
  };

  const filteredAndSortedJobs = useMemo(() => {
    const filtered = jobs.filter((job) => {
      return (
        job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

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

      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [jobs, searchTerm, sortField, sortDirection]);

  // ✅ Pagination slice
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredAndSortedJobs.slice(
    indexOfFirstJob,
    indexOfLastJob
  );
  const totalPages = Math.ceil(filteredAndSortedJobs.length / jobsPerPage);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-3 px-8 py-6">
      <div className="flex items-center gap-1 text-black tracking-tight">
        <BookCheck />
        <h1 className="text-2xl font-bold tracking-tight">Job List</h1>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search jobs, companies, or locations..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to page 1 when searching
            }}
            className="pl-10 w-80"
          />
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Company</TableHead>
                  <TableHead
                    onClick={() => handleSort("job_title")}
                    className="cursor-pointer"
                  >
                    Job Title {getSortIcon("job_title")}
                  </TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead
                    onClick={() => handleSort("salary_package")}
                    className="cursor-pointer"
                  >
                    Salary {getSortIcon("salary_package")}
                  </TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead
                    onClick={() => handleSort("application_deadline")}
                    className="cursor-pointer"
                  >
                    Closed Date {getSortIcon("application_deadline")}
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-semibold">
                      <a
                        href={`/university/job-description/${job.id}`}
                        className="underline"
                      >
                        {job.company_name}
                      </a>
                    </TableCell>
                    <TableCell>{job.job_title}</TableCell>
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
                    <TableCell>
                      {formatDate(job.application_deadline)}
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500 text-white">
                        {job.job_status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Pagination Controls */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
