import { HigherStudiesChart } from "@/components/alumni/alumni-profiles/higher-studies-chart";
import { JobChart } from "@/components/alumni/alumni-profiles/job-bar";
import { JobList } from "@/components/alumni/job-posting/JobList";
import { SectionCards } from "@/components/alumni/sidebar/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 py-6">
            <JobChart />
            <HigherStudiesChart />
          </div>
        </div>
        <div className="">
          <JobList />
        </div>
      </div>
    </div>
  );
}
