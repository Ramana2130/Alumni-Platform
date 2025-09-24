import { EventsList } from "@/components/alumni/job-posting/EventList";
import { EventPostingForm } from "@/components/alumni/job-posting/EventPostionForm";

const EventPostingPage = () => {
  return (
    <div className="py-6">
      <EventsList />
      <EventPostingForm />
    </div>
  );
};

export default EventPostingPage;
