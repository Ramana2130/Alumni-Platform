import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Users,
  GraduationCap,
  Filter,
  Building2,
  MapPin,
  MessageSquare,
  ArrowRight,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { getAllAlumniFullDetails } from "@/services/alumniservices";

export function AlumniList() {
  const [alumniList, setAlumniList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [openYear, setOpenYear] = useState(false);
  const [openDept, setOpenDept] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await getAllAlumniFullDetails();
        console.log("Fetched alumni:", res);
        // If API wraps the data
        if (Array.isArray(res)) {
          setAlumniList(res);
        } else if (Array.isArray(res.data)) {
          setAlumniList(res.data);
        } else {
          setAlumniList([]); // fallback
        }
      } catch (err) {
        console.error("Error fetching alumni:", err);
        setAlumniList([]);
      }
    };
    fetchAlumni();
  }, []);

  const filteredFriends = alumniList.filter((friend) => {
    const matchesSearch =
      friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (friend.company_name || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (friend.designation || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesYear = selectedYear
      ? String(friend.yearOfPassing || friend.year_of_passing) === selectedYear
      : true;

    const matchesDepartment = selectedDepartment
      ? friend.department === selectedDepartment
      : true;

    return matchesSearch && matchesYear && matchesDepartment;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredFriends.length / itemsPerPage);

  // Get current page's alumni slice
  const displayedFriends = filteredFriends.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const years = Array.from(
    new Set(
      alumniList
        .map((a) => a.yearOfPassing || a.year_of_passing)
        .filter(Boolean)
    )
  ).sort();

  const departments = Array.from(
    new Set(alumniList.map((a) => a.department).filter(Boolean))
  ).sort();

  // Handle page change
  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  // Reset page to 1 when filters or searchQuery changes
  // so user doesn't land on empty page after filtering
  // Using useEffect to track changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedFilter]);

  return (
    <div className="w-[1200px] mx-auto space-y-6">
      {/* Header */}
      <div className="text-start space-y-4 flex justify-between">
        <div className="flex items-center justify-start gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Alumni Network</h1>
        </div>
        <div className="flex items-center justify-start gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{alumniList.length} Alumni</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>
              {alumniList.filter((f) => f.isOnline).length} Online Now
            </span>
          </div> */}
        </div>
      </div>

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
        <div>
          <Popover open={openYear} onOpenChange={setOpenYear}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openYear}
                className="w-[200px] justify-between"
              >
                {selectedYear ? selectedYear : "Select year"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search year..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No year found.</CommandEmpty>
                  <CommandGroup>
                    {years.map((year) => (
                      <CommandItem
                        key={year}
                        value={year}
                        onSelect={(currentValue) => {
                          setSelectedYear(
                            currentValue === selectedYear ? "" : currentValue
                          );
                          setOpenYear(false);
                        }}
                      >
                        {year}
                        <Check
                          className={cn(
                            "ml-auto",
                            selectedYear === year ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover open={openDept} onOpenChange={setOpenDept}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openDept}
                className="w-[200px] justify-between"
              >
                {selectedDepartment ? selectedDepartment : "Select department"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search department..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No department found.</CommandEmpty>
                  <CommandGroup>
                    {departments.map((dept) => (
                      <CommandItem
                        key={dept}
                        value={dept}
                        onSelect={(currentValue) => {
                          setSelectedDepartment(
                            currentValue === selectedDepartment
                              ? ""
                              : currentValue
                          );
                          setOpenDept(false);
                        }}
                      >
                        {dept}
                        <Check
                          className={cn(
                            "ml-auto",
                            selectedDepartment === dept
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex gap-2">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("all")}
              className="bg-[#da7d40]"
            >
              All
            </Button>
            {/* <Button
              variant={selectedFilter === "online" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("online")}
            >
              Online
            </Button> */}
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
        {displayedFriends.map((friend) => (
          <Card
            key={friend.id}
            className="group hover:shadow-lg transition-all duration-200 border-border"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Avatar and Online Status */}
                <div className="flex items-start justify-between">
                  <div className="relative">
                    <Avatar className="h-16 w-16 uppercase">
                      <AvatarImage
                        src={friend.avatar || "/placeholder.svg"}
                        alt={friend.name}
                      />
                      <AvatarFallback className="text-lg font-semibold">
                        {friend.name
                          .split(" ")
                          .map((n: any) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {friend.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-orange-200"
                  >
                    PassedOutYear : {friend.yearOfPassing}
                  </Badge>
                </div>

                {/* Name and Title */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-foreground leading-tight uppercase">
                    {friend.name}
                  </h3>
                  <p className="text-sm text-black font-medium">
                    {friend.department}
                  </p>
                </div>

                {/* Company and Location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Building2 className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{friend.companyName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{friend.jobLocation}</span>
                  </div>
                </div>

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-1">
                   {(friend.tags || []).slice(0, 2).map((tag: any) => (
    <Badge key={tag} variant="outline" className="text-xs">
      {tag}
    </Badge>
  ))}
                  {friend.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{friend.tags.length - 2}
                    </Badge>
                  )}
                </div> */}

                {/* Mutual Friends */}
                <div className="text-xs text-black whitespace-pre-line break-words">
                  Designation : {friend.designation}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2 ">
                  <Button
                    size="sm"
                    className="flex-1 bg-[#da7d40] hover:bg-[#e88c50]"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    <a href={`/alumni/personal-details/${friend.alumniId}`}>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-4">
          <Button
            size="sm"
            variant="outline"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <Button
                key={pageNum}
                size="sm"
                variant={pageNum === currentPage ? "default" : "outline"}
                onClick={() => goToPage(pageNum)}
              >
                {pageNum}
              </Button>
            );
          })}

          <Button
            size="sm"
            variant="outline"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Empty State */}
      {filteredFriends.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No alumni found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or filters to find more connections.
          </p>
        </div>
      )}
    </div>
  );
}
