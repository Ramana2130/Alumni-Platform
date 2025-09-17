import DashboardLayout from "@/components/alumni/sidebar/layout";
import AlumniDesp from "@/components/common/AlumniDesp";
import JobDesp from "@/components/common/JobDesp";
import StudentDashboardLayout from "@/components/students/sidebar/layout";
import UniversityDashboardLayout from "@/components/university/sidebar/layout";
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
import StudentsChatPage from "@/pages/students/StudentsChatPage";
import StudentHomePage from "@/pages/students/StudentsHomePage";
import StudentsJobApplyPage from "@/pages/students/StudentsJobApplyPage";
import FundPage from "@/pages/university/FundPage";
import UniverSityAlumniPage from "@/pages/university/UniverSityAlumniPage";
import UniversityHomePage from "@/pages/university/UniversityHomePage";
import UniversityJobPage from "@/pages/university/UniversityJobPage";
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
                path: "fund-donated",
                element: <FundDonatePage />
            },
            {
                path: "event-posting",
                element: <EventPostingPage />
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
            }
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
                path: "job-list",
                element: <UniversityJobPage />
            },
            {
                path:"job-description",
                element: <JobDesp />
            },
            {
                path: "fund-reports",
                element: <FundPage />
            }
        ]
    }
]);

export default router;