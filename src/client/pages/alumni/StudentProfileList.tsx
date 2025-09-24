import { z } from "zod";
import { taskSchema } from "../../components/data/alumni-profiles/schema";
import { DataTable } from "@/components/alumni/alumni-profiles/data-table";
import { columns } from "@/components/alumni/alumni-profiles/columns";
import { useLoaderData } from "react-router-dom";
import tasks from "../../components/data/alumni-profiles/tasks.json";

export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export async function alumniProfileListLoader() {
  return z.array(taskSchema).parse(tasks);
}

export default function StudentProfileList() {
  const tasks = useLoaderData() as Awaited<
    ReturnType<typeof alumniProfileListLoader>
  >;

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
      <div className="hidden h-full flex-1 flex-col gap-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
