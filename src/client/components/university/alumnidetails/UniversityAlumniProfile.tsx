import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  MoreHorizontal,
  Check,
  ChevronsUpDown,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteAlumni, getAllAlumni } from "@/services/alumniservices";
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
import { toast } from "sonner";

// ---- Type ----
export type Student = {
  Id: number;
  Name: string;
  Email: string;
  Department: string;
  RegisterNumber: string;
  YearOfJoining: number;
  YearOfPassing: number | null;
};

// ---- Component ----
export function UniversityAlumniProfile() {
  const [students, setStudents] = React.useState<Student[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Filters
  const [departmentFilter, setDepartmentFilter] = React.useState("");
  const [yearFilter, setYearFilter] = React.useState<number | null>(null);
  const [nameFilter, setNameFilter] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");

  // Dynamic filter options
  const [departments, setDepartments] = React.useState<string[]>([]);
  const [yearsOfPassing, setYearsOfPassing] = React.useState<number[]>([]);

  // Popover open states
  const [openDept, setOpenDept] = React.useState(false);
  const [openYear, setOpenYear] = React.useState(false);

  // Tanstack table state
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // ✅ Delete handler
  const handleDelete = async (id: number) => {
    try {
      await deleteAlumni(id);
      setStudents((prev) => prev.filter((s) => s.Id !== id));
      toast.success("Student deleted successfully");
    } catch (error) {
      toast.error("Failed to delete student");
    }
  };

  // ---- Columns ----
  const columns: ColumnDef<Student>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "Name",
      header: () => <div>Name</div>,
      cell: ({ row }) => {
        const id = row.original.Id; // access the Id from the row's original object
        return (
          <div>
            <a
              href={`/university/alumni-personal-details/${id}`}
              className="underline"
            >
              {row.getValue("Name")}
            </a>
          </div>
        );
      },
    },

    {
      accessorKey: "Email",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("Email")}</div>
      ),
    },
    {
      accessorKey: "Department",
      header: "Department",
    },
    {
      accessorKey: "RegisterNumber",
      header: "RegisterNumber",
    },
    {
      accessorKey: "YearOfJoining",
      header: "YearOfJoining",
    },
    {
      accessorKey: "YearOfPassing",
      header: "YearOfPassing",
    },
    {
      id: "actions",
      header: "Actions",
      enableHiding: false,
      cell: ({ row }) => {
        const student = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(student.RegisterNumber)
                }
              >
                Copy Register Number
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <a href={`/alumni/edit-personal-details/${student.Id}`}>
                <DropdownMenuItem>Edit Details</DropdownMenuItem>
              </a>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" className="text-red-500">
                    <Trash /> Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      this alumni record.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-500 text-white"
                      onClick={() => handleDelete(student.Id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  // Fetch alumni from backend
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const alumniData = await getAllAlumni();
        setStudents(alumniData);

        // Extract unique departments & years
        const uniqueDepartments = Array.from(
          new Set(alumniData.map((a: Student) => a.Department))
        ) as string[];
        const uniqueYears = Array.from(
          new Set(alumniData.map((a: Student) => a.YearOfPassing))
        ).sort() as number[];

        setDepartments(uniqueDepartments);
        setYearsOfPassing(uniqueYears);
      } catch (error) {
        console.error("Error fetching alumni:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Apply filters
  const filteredData = React.useMemo(() => {
    return students.filter((student) => {
      const departmentMatches = departmentFilter
        ? student.Department === departmentFilter
        : true;
      const yearMatches = yearFilter
        ? student.YearOfPassing === yearFilter
        : true;
      const nameMatches = nameFilter
        ? student.Name.toLowerCase().includes(nameFilter.toLowerCase())
        : true;
      return departmentMatches && yearMatches && nameMatches;
    });
  }, [students, departmentFilter, yearFilter, nameFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const onSearch = () => {
    setNameFilter(searchInput.trim());
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="w-full">
      {/* 🔍 Filters */}
      <div className="flex items-center py-4 space-x-4 flex-wrap">
        {/* Search by name */}
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search by student name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            className="max-w-sm"
          />
          <Button onClick={onSearch}>Search</Button>
        </div>

        {/* Department filter */}
        <Popover open={openDept} onOpenChange={setOpenDept}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openDept}
              className="w-[200px] justify-between"
            >
              {departmentFilter || "Select Department..."}
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
                      onSelect={(value) => {
                        setDepartmentFilter(
                          value === departmentFilter ? "" : value
                        );
                        setOpenDept(false);
                      }}
                    >
                      {dept}
                      {departmentFilter === dept && (
                        <Check className="ml-auto" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Year filter */}
        <Popover open={openYear} onOpenChange={setOpenYear}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openYear}
              className="w-[200px] justify-between"
            >
              {yearFilter ? yearFilter : "Select Year Of Passing"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search year..." className="h-9" />
              <CommandList>
                <CommandEmpty>No year found.</CommandEmpty>
                <CommandGroup>
                  {yearsOfPassing.map((year) => (
                    <CommandItem
                      key={year}
                      value={year}
                      onSelect={(value) => {
                        const parsed = parseInt(value);
                        setYearFilter(parsed === yearFilter ? null : parsed);
                        setOpenYear(false);
                      }}
                    >
                      {year}
                      {yearFilter === year && <Check className="ml-auto" />}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* 📋 Table */}
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
