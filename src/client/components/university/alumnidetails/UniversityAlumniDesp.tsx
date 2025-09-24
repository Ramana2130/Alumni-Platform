import React, { useEffect, useState } from "react";
import { UniversityAlumniProfileSummary } from "./UniversityAlumniProfileSummary";
import { getAlumniFullProfile } from "@/services/alumniservices";
import { useParams } from "react-router-dom";

type AlumniProfile = {
  name: string;
  department: string;
  registerNumber: string;
  yearOfJoining: number;
  yearOfPassing: number | null;
  currentStatus?: string;
  companyName?: string;
  designation?: string;
  jobLocation?: string;
  successStories?: string;
  currentLocation?: string;
};

const UniversityAlumniDesp = () => {
  const { id } = useParams<{ id: string }>();
  const [alumni, setAlumni] = useState<AlumniProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlumni() {
      try {
        if (!id) return;
        const data = await getAlumniFullProfile(Number(id)); // ✅ call service
        setAlumni(data);
        console.log("Fetched alumni data:", data);
      } catch (error) {
        console.error("Error fetching alumni:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlumni();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!alumni) return <p className="text-center">No alumni found.</p>;

  return (
    <main className="bg-background">
      <div className="container mx-auto space-y-12 p-5">
        <section>
          {/* ✅ Spread props to ProfileSummary */}
          <UniversityAlumniProfileSummary
            name={alumni.name}
            department={alumni.department}
            registerNumber={alumni.registerNumber}
            yearOfJoining={alumni.yearOfJoining}
            yearOfPassing={alumni.yearOfPassing}
            currentStatus={alumni.currentStatus ?? "N/A"}
            companyName={alumni.companyName ?? ""}
            designation={alumni.designation ?? ""}
            jobLocation={alumni.jobLocation ?? ""}
            successStories={alumni.successStories ?? ""}
            location={alumni.currentLocation ?? ""}
          />
        </section>
      </div>
    </main>
  );
};

export default UniversityAlumniDesp;
