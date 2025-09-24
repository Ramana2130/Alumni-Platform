import { JobApplyForm } from "@/components/alumni/job-posting/JobApplyForm";
import { JobList } from "@/components/alumni/job-posting/JobList";

const JobPostingPage = () => {
  return (
    <div className="py-6 bg-gray-100">
      <div className="px-4 pb-12">
        <JobList />
      </div>
      <JobApplyForm />
    </div>
  );
};

export default JobPostingPage;
