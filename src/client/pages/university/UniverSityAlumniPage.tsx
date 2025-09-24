import { DataTable } from "@/components/alumni/alumni-profiles/data-table";
import { JobStudiesComapreCharts } from "@/components/university/charts/JobStudiesComapreCharts";
import tasks from "../../components/data/alumni-profiles/tasks.json";
import { columns } from "@/components/alumni/alumni-profiles/columns";
import { AlumniAddForm } from "@/components/university/AlumniAddForm";
import { UniversityAlumniProfile } from "@/components/university/alumnidetails/UniversityAlumniProfile";
import { GraduationCap } from "lucide-react";

const UniverSityAlumniPage = () => {
  return (
    <div className="px-6 py-6 bg-gray-100">
      <div className="flex justify-start gap-2">
        <GraduationCap className="size-8 " />
        <h1 className="text-2xl font-bold tracking-tight  pb-4">
          Alumni details
        </h1>
      </div>
      <AlumniAddForm />
      <div className="py-3">
        <UniversityAlumniProfile />
      </div>
    </div>
  );
};

export default UniverSityAlumniPage;
