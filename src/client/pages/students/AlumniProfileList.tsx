import { z } from "zod";
import { taskSchema } from "../../components/data/alumni-profiles/schema";
import tasks from "../../components/data/alumni-profiles/tasks.json";
import { AlumniList } from "@/components/students/alumni-profiles/AlumniList";

export const metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export async function alumniProfileListLoader() {
  return z.array(taskSchema).parse(tasks);
}

export default function StudentAlumniProfileList() {
  return (
    <div className="bg-gray-100">
      <div className="hidden h-full flex-1 flex-col gap-8 p-4 md:flex">
        <AlumniList />
      </div>
    </div>
  );
}
