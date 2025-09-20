import { ComapreProfiles } from "@/components/alumni/alumni-profiles/compare-profiles";
import { HigherStudiesChart } from "@/components/alumni/alumni-profiles/higher-studies-chart";
import { JobChart } from "@/components/alumni/alumni-profiles/job-bar";
import { JobList } from "@/components/alumni/job-posting/JobList";
import { ChartAreaInteractive } from "@/components/alumni/sidebar/chart-area-interactive";
import { DataTable } from "@/components/alumni/sidebar/data-table";
import { SectionCards } from "@/components/alumni/sidebar/section-cards";
import  data from "@/components/data/data.json";



export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 py-6">            
          <HigherStudiesChart />
          <JobChart/>
          </div>
          <ChartAreaInteractive />
          {/* <ComapreProfiles /> */}
        </div>
        {/* <DataTable data={data} /> */}
        <div className="">
            {/* <h1 className="px-8 font-bold tracking-tight text-2xl py-2">Job List</h1> */}
          <JobList />
        </div>
      </div>
    </div>
  )
}
