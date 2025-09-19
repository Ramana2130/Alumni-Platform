"use client"
import * as React from "react"
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
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
]

const yearsOfJoin = [2018, 2019, 2020, 2021, 2022, 2023]

const data = [
  {
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    department: "Computer Science",
    registerNumber: "CS2018001",
    yearOfJoin: 2018,
    passedOutYear: 2022,
  },
  {
    name: "Neha Singh",
    email: "neha.singh@example.com",
    department: "Electrical Engineering",
    registerNumber: "EE2019005",
    yearOfJoin: 2019,
    passedOutYear: 2023,
  },
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    department: "Mechanical Engineering",
    registerNumber: "ME2020002",
    yearOfJoin: 2020,
    passedOutYear: 2024,
  },
  {
    name: "Pooja Verma",
    email: "pooja.verma@example.com",
    department: "Civil Engineering",
    registerNumber: "CE2021009",
    yearOfJoin: 2021,
    passedOutYear: 2025,
  },
  {
    name: "Sanjay Rao",
    email: "sanjay.rao@example.com",
    department: "Chemical Engineering",
    registerNumber: "CH2023003",
    yearOfJoin: 2023,
    passedOutYear: null,
  },
  // Add more data to have enough rows for multiple pages
  {
    name: "Anita Desai",
    email: "anita.desai@example.com",
    department: "Computer Science",
    registerNumber: "CS2018002",
    yearOfJoin: 2018,
    passedOutYear: 2022,
  },
  {
    name: "Rahul Yadav",
    email: "rahul.yadav@example.com",
    department: "Mechanical Engineering",
    registerNumber: "ME2020003",
    yearOfJoin: 2020,
    passedOutYear: 2024,
  },
  {
    name: "Deepa Nair",
    email: "deepa.nair@example.com",
    department: "Electrical Engineering",
    registerNumber: "EE2019006",
    yearOfJoin: 2019,
    passedOutYear: 2023,
  },
  {
    name: "Suresh Patil",
    email: "suresh.patil@example.com",
    department: "Chemical Engineering",
    registerNumber: "CH2023004",
    yearOfJoin: 2023,
    passedOutYear: null,
  },
  {
    name: "Suresh Patil",
    email: "suresh.patil@example.com",
    department: "Chemical Engineering",
    registerNumber: "CH2023004",
    yearOfJoin: 2023,
    passedOutYear: null,
  },
  {
    name: "Suresh Patil",
    email: "suresh.patil@example.com",
    department: "Chemical Engineering",
    registerNumber: "CH2023004",
    yearOfJoin: 2023,
    passedOutYear: null,
  },
  {
    name: "Suresh Patil",
    email: "suresh.patil@example.com",
    department: "Chemical Engineering",
    registerNumber: "CH2023004",
    yearOfJoin: 2023,
    passedOutYear: null,
  },
  {
    name: "Suresh Patil",
    email: "suresh.patil@example.com",
    department: "Chemical Engineering",
    registerNumber: "CH2023004",
    yearOfJoin: 2023,
    passedOutYear: null,
  },
  {
    name: "Kavita Joshi",
    email: "kavita.joshi@example.com",
    department: "Civil Engineering",
    registerNumber: "CE2021010",
    yearOfJoin: 2021,
    passedOutYear: 2025,
  },
]

export type Student = {
  name: string
  email: string
  department: string
  registerNumber: string
  yearOfJoin: number
  passedOutYear: number | null
}

export const columns: ColumnDef<Student>[] = [
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
    accessorKey: "name",
    header: () => <div className="">Name</div>,
    cell: ({ row }) => <div><a href="/university/student-personal-details" className="underline">{row.getValue("name")}</a></div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "registerNumber",
    header: "Register Number",
  },
  {
    accessorKey: "yearOfJoin",
    header: () => <div>Year Of Join</div>,
  },
  {
    accessorKey: "passedOutYear",
    header: () => <div>Passed Out Year</div>,
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const student = row.original
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
              onClick={() => navigator.clipboard.writeText(student.registerNumber)}
            >
              Copy Register Number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Account</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function UniversityStudentProfile() {
  const [departmentFilter, setDepartmentFilter] = React.useState("")
  const [yearFilter, setYearFilter] = React.useState<number | null>(null)
  const [nameFilter, setNameFilter] = React.useState("")
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [searchInput, setSearchInput] = React.useState("")

  // Filter data based on departmentFilter, yearFilter and nameFilter
  const filteredData = React.useMemo(() => {
    return data.filter((student) => {
      const departmentMatches = departmentFilter ? student.department === departmentFilter : true
      const yearMatches = yearFilter ? student.yearOfJoin === yearFilter : true
      const nameMatches = nameFilter
        ? student.name.toLowerCase().includes(nameFilter.toLowerCase())
        : true
      return departmentMatches && yearMatches && nameMatches
    })
  }, [departmentFilter, yearFilter, nameFilter])

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
      }
    }
  })

  // Popovers open state
  const [openDept, setOpenDept] = React.useState(false)
  const [openYear, setOpenYear] = React.useState(false)

  // Handle search button click
  const onSearch = () => {
    setNameFilter(searchInput.trim())
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4 space-x-4 flex-wrap">
        {/* Search by name input and button */}
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

        {/* Department filter popover */}
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
              <CommandInput placeholder="Search department..." className="h-9" />
              <CommandList>
                <CommandEmpty>No department found.</CommandEmpty>
                <CommandGroup>
                  {departments.map((dept) => (
                    <CommandItem
                      key={dept}
                      value={dept}
                      onSelect={(value) => {
                        setDepartmentFilter(value === departmentFilter ? "" : value)
                        setOpenDept(false)
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

        {/* Year of join filter popover */}
        <Popover open={openYear} onOpenChange={setOpenYear}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openYear}
              className="w-[200px] justify-between"
            >
              {yearFilter ? yearFilter : "Select Year Of Join..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search year..." className="h-9" />
              <CommandList>
                <CommandEmpty>No year found.</CommandEmpty>
                <CommandGroup>
                  {yearsOfJoin.map((year) => (
                    <CommandItem
                      key={year}
                      value={year.toString()}
                      onSelect={(value) => {
                        const parsed = parseInt(value)
                        setYearFilter(parsed === yearFilter ? null : parsed)
                        setOpenYear(false)
                      }}
                    >
                      {year}
                      {yearFilter === year && (
                        <Check className="ml-auto" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {/* Table container with fixed height to prevent layout shifts */}
      <div className="">
        <Table >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
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
                    <TableCell key={cell.id} style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
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
  )
}
