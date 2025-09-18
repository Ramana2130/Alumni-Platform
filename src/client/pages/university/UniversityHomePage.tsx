
import { JobList } from "@/components/alumni/job-posting/JobList";
import  data from "@/components/data/data.json";
import { AllComapreCharts } from "@/components/university/charts/AllCompareCharts";
import { AmountBasedChart } from "@/components/university/charts/AmountBasedChart";
import { FundChart } from "@/components/university/charts/FundChart";
import { JobStudiesCompareCharts } from "@/components/university/charts/JobStudiesComapreCharts";
import { PositionChart } from "@/components/university/charts/PositionChart";
import { DataTable } from "@/components/university/sidebar/data-table";
import { SectionCards } from "@/components/university/sidebar/section-cards";
import { UniversityJobList } from "@/components/university/UniversityJobList";



export default function UniversityHomePage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4">
        <SectionCards />        
        <div className="grid grid-cols-2 gap-6 px-6">
          <AllComapreCharts />
          <AmountBasedChart />
          <FundChart />
          <PositionChart />
        </div>
        {/* <DataTable data={data} /> */}
        <div>
          <h1 className="px-8 text-2xl font-bold tracking-tight py-2 text-emerald-700">Job List</h1>
          <UniversityJobList />
        </div>
      </div>
    </div>
  )
}
