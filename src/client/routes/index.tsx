import { EventEditForm } from "@/components/alumni/job-posting/EventEditForm";
import { JobEditForm } from "@/components/alumni/job-posting/JobEditForm";
import DashboardLayout from "@/components/alumni/sidebar/layout";
import AlumniDesp from "@/components/common/AlumniDesp";
import JobDesp from "@/components/common/JobDesp";
import { Payment } from "@/components/payment/Payment";
import StudentsJobDesp from "@/components/students/job/StudentsJobDesp";
import StudentDashboardLayout from "@/components/students/sidebar/layout";
import StudentAlumniDesp from "@/components/students/StudentAlumniDesp";
import UniversityAlumniDesp from "@/components/university/alumnidetails/UniversityAlumniDesp";
import { AlumniEditForm } from "@/components/university/AlumniEditForm";
import UniversityDashboardLayout from "@/components/university/sidebar/layout";
import { StudentEditForm } from "@/components/university/studentdetails/StudentEditForm";
import UniversityStudentDesp from "@/components/university/studentdetails/UniversityStudentDesp";
import AlumniChatPage from "@/pages/alumni/AlumniChatPage";
import AlumniHomePage from "@/pages/alumni/AlumniHomePage";
import AlumniPersonalProfile from "@/pages/alumni/AlumniPersonalProfile";
import AlumniProfileList, { alumniProfileListLoader } from "@/pages/alumni/AlumniProfileList";
import EventPostingPage from "@/pages/alumni/EventPostingPage";
import FundDonatePage from "@/pages/alumni/FundDonatePage";
import JobPostingPage from "@/pages/alumni/JobPostingPage";
import StudentProfileList from "@/pages/alumni/StudentProfileList";
import HomePage from "@/pages/home-page/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import AlumniPersonalProfilePage from "@/pages/students/AlumniPersonalProfile";
import StudentAlumniProfileList from "@/pages/students/AlumniProfileList";
import FundRequestPage from "@/pages/students/FundRequestPage";
import StudentPersonalProfile from "@/pages/students/StudentPersonalProfile";
import StudentsChatPage from "@/pages/students/StudentsChatPage";
import StudentHomePage from "@/pages/students/StudentsHomePage";
import StudentsJobApplyPage from "@/pages/students/StudentsJobApplyPage";
import FundPage from "@/pages/university/FundPage";
import UniverSityAlumniPage from "@/pages/university/UniverSityAlumniPage";
import UniversityHomePage from "@/pages/university/UniversityHomePage";
import UniversityJobPage from "@/pages/university/UniversityJobPage";
import UniversityProfilePage from "@/pages/university/UniversityProfilePage";
import UniverSityStudentPage from "@/pages/university/UniversityStudentPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path:"/auth/login",
        element: <LoginPage />
    },    
    {
        path: "/alumni",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <AlumniHomePage />
            },
            {
                path: "alumni-profiles",
                element: <AlumniProfileList />,
                loader: alumniProfileListLoader
            },
            {
                path: "student-profiles",
                element: <StudentProfileList />,
                loader: alumniProfileListLoader
            },
            {
                path: "job-posting",
                element: <JobPostingPage />
            },
            {
                path: "job-editing/:id",
                element: <JobEditForm />
            },
            {
                path: "chat",
                element: <AlumniChatPage />
            },
            {
                path: "profile",
                element: <AlumniPersonalProfile />
            },
            {
                path: "personal-details",
                element: <AlumniDesp />
            },
            {
                path:  "edit-personal-details/:id",
                element: <AlumniEditForm />
            },
            {
                path: "fund-donated",
                element: <FundDonatePage />
            },
            {
                path: "event-posting",
                element: <EventPostingPage />
            },
            {
                path: "event-editing/:id",
                element: <EventEditForm />
            },
            {
                path: "payment-gateway",
                element: <Payment />
            }
        ],
    },
    {
        path: "/students",
        element: <StudentDashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <StudentHomePage />
            },
            {
                path: "alumni-profiles",
                element: <StudentAlumniProfileList />,
                loader: alumniProfileListLoader,                    
            },
            {
                path: "apply-job",
                element : <StudentsJobApplyPage />
            },
            {
                path: "chat",
                element: <StudentsChatPage />
            },
            {
                path: "personal-details",
                element: <AlumniPersonalProfilePage />
            },
            {
                path: "fund-request",
                element: <FundRequestPage />
            },
            {
                path:"job-description",
                element: <StudentsJobDesp />
            },
            {
                path: "student-alumni-details",
                element: <StudentAlumniDesp />
            },
            {
                path: "student-personal-details",
                element: <StudentPersonalProfile />
            },            
        ]
    },
    {
        path: "/university",
        element: <UniversityDashboardLayout />,
        children: [
            {
                path: "dashboard",
                element: <UniversityHomePage />
            },
            {
                path: "alumni-list",
                element: <UniverSityAlumniPage />
            },
            {
                path: "student-list",
                element: <UniverSityStudentPage />
            },
            {
                path: "job-list",
                element: <UniversityJobPage />
            },
            {
                path:"job-description/:id",
                element: <JobDesp />
            },
            {
                path: "fund-reports",
                element: <FundPage />
            },
            {
                path: "alumni-personal-details/:id",
                element: <UniversityAlumniDesp />
            },
            {
                path: "student-personal-details/:id",
                element: <UniversityStudentDesp />
            },
            {
                path: "settings",
                element: <UniversityProfilePage />
            },
            {
                path: "edit-personal-details/:id",
                element: <StudentEditForm />
            }
        ]
    }
]);

export default router;