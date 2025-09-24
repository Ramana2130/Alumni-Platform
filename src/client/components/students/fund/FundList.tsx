import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Edit,
  Trash2,
  MoreHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type FundStatus = "pending" | "approved" | "rejected";

interface FundRequest {
  id: string;
  studentName: string;
  fundAmount: number;
  fundType: string;
  requestedDate: string;
  status: FundStatus;
  progressPercentage: number;
}

// Mock data for demonstration
const mockData: FundRequest[] = [
  {
    id: "FR001",
    studentName: "Alice Johnson",
    fundAmount: 5000,
    fundType: "Research Grant",
    requestedDate: "2024-01-15",
    status: "approved",
    progressPercentage: 75,
  },
  {
    id: "FR002",
    studentName: "Bob Smith",
    fundAmount: 3000,
    fundType: "Emergency Fund",
    requestedDate: "2024-01-20",
    status: "pending",
    progressPercentage: 0,
  },
  {
    id: "FR003",
    studentName: "Carol Davis",
    fundAmount: 7500,
    fundType: "Scholarship",
    requestedDate: "2024-01-18",
    status: "rejected",
    progressPercentage: 0,
  },
  {
    id: "FR004",
    studentName: "David Wilson",
    fundAmount: 4200,
    fundType: "Project Fund",
    requestedDate: "2024-01-22",
    status: "approved",
    progressPercentage: 100,
  },
  {
    id: "FR005",
    studentName: "Eva Brown",
    fundAmount: 2800,
    fundType: "Travel Grant",
    requestedDate: "2024-01-25",
    status: "pending",
    progressPercentage: 0,
  },
  {
    id: "FR006",
    studentName: "Frank Miller",
    fundAmount: 6000,
    fundType: "Research Grant",
    requestedDate: "2024-01-28",
    status: "approved",
    progressPercentage: 45,
  },
];

const ITEMS_PER_PAGE = 5;

export function FundList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<FundRequest[]>(mockData);

  // Filter data based on search term
  const filteredData = data.filter(
    (item) =>
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fundType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, endIndex);

  const getStatusBadge = (status: FundStatus) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-sky-600 text-white ">Pending</Badge>;
      case "approved":
        return <Badge className="bg-green-500 text-white ">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500 text-white ">Rejected</Badge>;
    }
  };

  const handleEdit = (id: string) => {
    console.log("Edit fund request:", id);
    // Implementation for edit functionality
  };

  const handleDelete = (id: string) => {
    setData(data.filter((item) => item.id !== id));
    console.log("Delete fund request:", id);
  };

  const canEdit = (status: FundStatus) => status !== "rejected";

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="w-[1200px] mx-auto py-6">
      <CardHeader className=" text-black">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-semibold">Fund Requests</CardTitle>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black h-4 w-4" />
            <Input
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-black placeholder:text-black/70"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Request ID</TableHead>
                {/* <TableHead className="font-semibold">Student Name</TableHead> */}
                <TableHead className="font-semibold">Fund Amount</TableHead>
                <TableHead className="font-semibold">Fund Type</TableHead>
                <TableHead className="font-semibold">Requested Date</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Progress</TableHead>
                <TableHead className="font-semibold text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((request) => (
                <TableRow key={request.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{request.id}</TableCell>
                  {/* <TableCell>{request.studentName}</TableCell> */}
                  <TableCell className="font-semibold text-primary">
                    {formatCurrency(request.fundAmount)}
                  </TableCell>
                  <TableCell>{request.fundType}</TableCell>
                  <TableCell>{formatDate(request.requestedDate)}</TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell>
                    {request.status === "approved" ? (
                      <div className="flex items-center gap-2 min-w-[120px]">
                        <Progress
                          value={request.progressPercentage}
                          className="flex-1 h-2"
                        />
                        <span className="text-sm font-medium text-muted-foreground min-w-[35px]">
                          {request.progressPercentage}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleEdit(request.id)}
                          disabled={!canEdit(request.status)}
                          className="cursor-pointer"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(request.id)}
                          className="cursor-pointer text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredData.length)} of {filteredData.length}{" "}
            results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
