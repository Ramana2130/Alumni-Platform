import { z } from "zod";
import { taskSchema } from "../../components/data/alumni-profiles/schema";
import { useLoaderData } from "react-router-dom";
import tasks from "../../components/data/alumni-profiles/tasks.json";
import { AlumniList } from "@/components/alumni/alumni-profiles/AlumniList";

export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export async function alumniProfileListLoader() {
  return z.array(taskSchema).parse(tasks);
}

export default function AlumniProfileList() {
  const tasks = useLoaderData() as Awaited<
    ReturnType<typeof alumniProfileListLoader>
  >;

  return (
    <>
      <div className="px-8 py-6 flex justify-between">
        <AlumniList />
      </div>
    </>
  );
}
