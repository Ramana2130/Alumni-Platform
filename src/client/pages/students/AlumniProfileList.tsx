import { z } from "zod"
import { taskSchema } from "../../components/data/alumni-profiles/schema"
import { useLoaderData } from "react-router-dom"
import tasks from "../../components/data/alumni-profiles/tasks.json"
import { Check, ChevronsUpDown, GraduationCap } from "lucide-react"
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

export default  function StudentAlumniProfileList() {
  const tasks = useLoaderData() as Awaited<ReturnType<typeof alumniProfileListLoader>>;
   const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <>
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
      <div className="px-8 pt-6 flex justify-end">
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
    </>
  )
}