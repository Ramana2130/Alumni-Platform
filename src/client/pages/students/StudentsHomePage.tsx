
import  data from "@/components/data/data.json";
import { DataTable } from "@/components/students/sidebar/data-table";
import { SectionCards } from "@/components/students/sidebar/section-cards";



export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />        
        <DataTable data={data} />
      </div>
    </div>
  )
}
