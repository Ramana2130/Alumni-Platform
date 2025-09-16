import { z } from "zod"
import { taskSchema } from "../../components/data/alumni-profiles/schema"
import { DataTable } from "@/components/alumni/alumni-profiles/data-table"
import { columns } from "@/components/alumni/alumni-profiles/columns"
import { useLoaderData } from "react-router-dom"
import tasks from "../../components/data/alumni-profiles/tasks.json"
import { GraduationCap } from "lucide-react"
import { JobChart } from "@/components/alumni/alumni-profiles/job-bar"
import { HigherStudiesChart } from "@/components/alumni/alumni-profiles/higher-studies-chart"
import { ComapreProfiles } from "@/components/alumni/alumni-profiles/compare-profiles"


export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "components/data/alumni-profiles/tasks.json")
//   )

//   const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }

export async function alumniProfileListLoader() {
  return z.array(taskSchema).parse(tasks);
}

export default  function AlumniProfileList() {
  const tasks = useLoaderData() as Awaited<ReturnType<typeof alumniProfileListLoader>>;

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
      <div className="px-8 pt-6 flex justify-between">
        <div className="flex gap-2">
        <GraduationCap className="size-8" />
        <h1 className="mb-2 text-2xl font-bold tracking-tight">Alumni Profiles</h1>
        </div>
        <div className="flex gap-3">
          <h1 className="font-bold text-xl tracking-tight">Higher-Studies Profile : 300+</h1>
          <h1 className="font-bold text-xl tracking-tight">Job Profile : 300+</h1>
        </div>
      </div>
      <div className="px-8 pt-6">
        <ComapreProfiles />
      </div>
      <div className="grid grid-cols-2 gap-4 px-8 py-6">
        <JobChart />
        <HigherStudiesChart />
      </div>
      <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}