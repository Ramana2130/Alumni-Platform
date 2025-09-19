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
import { AlumniList } from "@/components/alumni/alumni-profiles/AlumniList"


export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

export async function alumniProfileListLoader() {
  return z.array(taskSchema).parse(tasks);
}

export default  function AlumniProfileList() {
  const tasks = useLoaderData() as Awaited<ReturnType<typeof alumniProfileListLoader>>;

  return (
    <>
      {/* <div className="md:hidden">
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
      </div> */}
      <div className="px-8 py-6 flex justify-between">
        <AlumniList />
        {/* <div className="flex gap-2">
        <GraduationCap className="size-8" />
        <h1 className="mb-2 text-2xl font-bold tracking-tight">Alumni Profiles</h1>
        </div> */}
        {/* <div className="flex gap-3">
          <h1 className="font-bold text-xl tracking-tight">Higher-Studies Profile : 300+</h1>
          <h1 className="font-bold text-xl tracking-tight">Job Profile : 300+</h1>
        </div> */}
      </div>
    </>
  )
}