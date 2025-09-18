import { z } from "zod"
import { taskSchema } from "../../components/data/alumni-profiles/schema"
import { useLoaderData } from "react-router-dom"
import tasks from "../../components/data/alumni-profiles/tasks.json"
import { Check, ChevronsUpDown, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react";
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
import { AlumniList } from "@/components/students/alumni-profiles/AlumniList"


export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

export async function alumniProfileListLoader() {
  return z.array(taskSchema).parse(tasks);
}

const frameworks = [
  {
    value: "next.js",
    label: "2022",
  },
  {
    value: "sveltekit",
    label: "2023",
  },
  {
    value: "nuxt.js",
    label: "2024",
  },
  {
    value: "remix",
    label: "2025",
  },
  {
    value: "astro",
    label: "2026",
  },
]

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

export default  function StudentAlumniProfileList() {
  const tasks = useLoaderData() as Awaited<ReturnType<typeof alumniProfileListLoader>>;
   const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className="bg-gray-100">
      <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="px-8 pt-6 flex justify-between">
               <div className="text-start space-y-4">
        <div className="flex items-center justify-start gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-[#e7000b]">Alumni Network</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow alumni from your university. Discover where your classmates are now and expand your
          professional network.
        </p>
        <div className="flex items-center justify-start gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{mockFriends.length} Alumni Connected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>{mockFriends.filter((f) => f.isOnline).length} Online Now</span>
          </div>
        </div>
        </div>
        <div className="flex gap-3">
           <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Year..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
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


      </div>
      <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
        <AlumniList />
      </div>
    </div>
  )
}