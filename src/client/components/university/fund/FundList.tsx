import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  FileText,
  User,
} from "lucide-react";
import { toast } from "sonner";

interface UniversityDashboardProps {
  onBack: () => void;
}

// Mock data for pending requests
const mockPendingRequests = [
  {
    id: 5,
    studentName: "Alex Thompson",
    studentId: "ST2024001",
    program: "Chemistry",
    year: "Senior",
    amount: 2800,
    fundingType: "Research Project",
    urgency: "moderate",
    description:
      "Need funding for undergraduate research project on sustainable chemistry. Will purchase lab equipment and materials for thesis research.",
    gpa: 3.85,
    submissionDate: "2024-01-20",
    documentsUploaded: [
      "transcript.pdf",
      "research_proposal.pdf",
      "budget_breakdown.xlsx",
    ],
    status: "pending",
  },
  {
    id: 6,
    studentName: "Maria Santos",
    studentId: "ST2024002",
    program: "Nursing",
    year: "Junior",
    amount: 4200,
    fundingType: "Emergency Fund",
    urgency: "immediate",
    description:
      "Family emergency requiring immediate financial assistance. Father hospitalized, need to cover medical expenses and continue nursing program.",
    gpa: 3.92,
    submissionDate: "2024-01-22",
    documentsUploaded: [
      "transcript.pdf",
      "medical_bills.pdf",
      "financial_statement.pdf",
    ],
    status: "pending",
  },
];

// Mock data for verified requests (already approved)
const mockVerifiedRequests = [
  {
    id: 1,
    studentName: "Sarah Johnson",
    studentId: "ST2023045",
    program: "Computer Science",
    year: "Junior",
    amount: 3500,
    fundingType: "Emergency Fund",
    urgency: "urgent",
    gpa: 3.8,
    verificationDate: "2024-01-15",
    verifiedBy: "Dr. Smith",
    status: "verified",
    raised: 1200,
  },
  {
    id: 2,
    studentName: "Michael Chen",
    studentId: "ST2023067",
    program: "Mechanical Engineering",
    year: "Senior",
    amount: 2000,
    fundingType: "Research Project",
    urgency: "moderate",
    gpa: 3.9,
    verificationDate: "2024-01-12",
    verifiedBy: "Prof. Johnson",
    status: "verified",
    raised: 800,
  },
];

export default function FundList({ onBack }: UniversityDashboardProps) {
  const [pendingRequests, setPendingRequests] = useState(mockPendingRequests);
  const [verifiedRequests, setVerifiedRequests] =
    useState(mockVerifiedRequests);

  const handleApprove = (requestId: number, studentName: string) => {
    const request = pendingRequests.find((r) => r.id === requestId);
    if (request) {
      // Move from pending to verified
      setPendingRequests((prev) => prev.filter((r) => r.id !== requestId));
      setVerifiedRequests((prev) => [
        ...prev,
        {
          ...request,
          status: "verified",
          verificationDate: new Date().toISOString().split("T")[0],
          verifiedBy: "Admin User",
          raised: 0,
        },
      ]);

      toast.success(
        `Request Approved: ${studentName}'s fund request has been verified and published to the alumni portal.`
      );
    }
  };

  const handleReject = (requestId: number, studentName: string) => {
    setPendingRequests((prev) => prev.filter((r) => r.id !== requestId));
    toast.error(
      `Request Rejected: ${studentName}'s fund request has been rejected. The student will be notified via email.`
    );
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "immediate":
        return "bg-red-100 text-red-800 border border-red-200";
      case "urgent":
        return "bg-orange-100 text-orange-800 border border-orange-200";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      default:
        return "bg-slate-100 text-slate-800 border border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-emerald-700">
            Fund Reports
          </h1>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100 border border-slate-200">
            <TabsTrigger
              value="pending"
              className="flex items-center text-slate-700 data-[state=active]:bg-white data-[state=active]:text-slate-900"
            >
              <Clock className="h-4 w-4 mr-2" />
              Pending Requests ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger
              value="verified"
              className="flex items-center text-slate-700 data-[state=active]:bg-white data-[state=active]:text-slate-900"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Verified Requests ({verifiedRequests.length})
            </TabsTrigger>
          </TabsList>

          {/* Pending Requests Tab */}
          <TabsContent value="pending" className="space-y-6">
            {pendingRequests.map((request) => (
              <Card
                key={request.id}
                className="border-l-4 border-l-orange-500 bg-white border-slate-200 shadow-sm"
              >
                <CardHeader className="border-b border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center text-xl text-slate-900">
                        <User className="h-5 w-5 mr-2 text-purple-600" />
                        {request.studentName}
                      </CardTitle>
                      <CardDescription className="mt-1 text-slate-600">
                        ID: {request.studentId} • {request.program} •{" "}
                        {request.year} • GPA: {request.gpa}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={getUrgencyColor(request.urgency)}>
                        {request.urgency.charAt(0).toUpperCase() +
                          request.urgency.slice(1)}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-slate-300 text-slate-700"
                      >
                        {request.fundingType}
                      </Badge>
                      <span className="text-sm text-slate-500">
                        Submitted:{" "}
                        {new Date(request.submissionDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Request Details */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Request Details
                      </h4>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-slate-700">
                            Requested Amount:
                          </span>
                          <span className="text-lg font-bold text-purple-600">
                            ${request.amount.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {request.description}
                        </p>
                      </div>
                    </div>

                    {/* Documents */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-slate-600" />
                        Supporting Documents
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {request.documentsUploaded.map((doc, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-slate-200 bg-slate-100 text-slate-700 border border-slate-300"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
                      <Button
                        variant="outline"
                        onClick={() =>
                          handleReject(request.id, request.studentName)
                        }
                        className="text-red-600 border-red-300 hover:bg-red-50 hover:border-red-400"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                      <Button
                        onClick={() =>
                          handleApprove(request.id, request.studentName)
                        }
                        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve & Publish
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {pendingRequests.length === 0 && (
              <Card className="text-center py-12 bg-white border-slate-200">
                <CardContent>
                  <div className="text-slate-500">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No pending requests</p>
                    <p className="text-sm">
                      All fund requests have been reviewed
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Verified Requests Tab */}
          <TabsContent value="verified" className="space-y-6">
            {verifiedRequests.map((request) => (
              <Card
                key={request.id}
                className="border-l-4 border-l-emerald-500 bg-white border-slate-200 shadow-sm"
              >
                <CardHeader className="border-b border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center text-xl text-slate-900">
                        <Shield className="h-5 w-5 mr-2 text-emerald-600" />
                        {request.studentName}
                      </CardTitle>
                      <CardDescription className="mt-1 text-slate-600">
                        ID: {request.studentId} • {request.program} •{" "}
                        {request.year} • GPA: {request.gpa}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Verified
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-slate-300 text-slate-700"
                      >
                        {request.fundingType}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Verification Info */}
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-700">
                          Requested Amount:
                        </span>
                        <span className="text-lg font-bold text-emerald-600">
                          ${request.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-700">
                          Amount Raised:
                        </span>
                        <span className="text-lg font-bold text-blue-600">
                          ${request.raised.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 mt-3">
                        Verified by {request.verifiedBy} on{" "}
                        {new Date(
                          request.verificationDate
                        ).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">
                          Funding Progress
                        </span>
                        <span className="text-sm text-slate-600">
                          {((request.raised / request.amount) * 100).toFixed(0)}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{
                            width: `${Math.min(
                              (request.raised / request.amount) * 100,
                              100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {verifiedRequests.length === 0 && (
              <Card className="text-center py-12 bg-white border-slate-200">
                <CardContent>
                  <div className="text-slate-500">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">No verified requests</p>
                    <p className="text-sm">
                      Approved requests will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
