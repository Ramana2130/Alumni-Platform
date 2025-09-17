import DashboardLayout from "@/components/alumni/sidebar/layout";
import StudentDashboardLayout from "@/components/students/sidebar/layout";
import AlumniChatPage from "@/pages/alumni/AlumniChatPage";
import AlumniHomePage from "@/pages/alumni/AlumniHomePage";
import AlumniPersonalProfile from "@/pages/alumni/AlumniPersonalProfile";
import AlumniProfileList, { alumniProfileListLoader } from "@/pages/alumni/AlumniProfileList";
import JobPostingPage from "@/pages/alumni/JobPostingPage";
import StudentProfileList from "@/pages/alumni/StudentProfileList";
import LoginPage from "@/pages/login/LoginPage";
import AlumniPersonalProfilePage from "@/pages/students/AlumniPersonalProfile";
import StudentAlumniProfileList from "@/pages/students/AlumniProfileList";
import StudentsChatPage from "@/pages/students/StudentsChatPage";
import StudentHomePage from "@/pages/students/StudentsHomePage";
import StudentsJobApplyPage from "@/pages/students/StudentsJobApplyPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
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
            }
        ]
    }
]);

export default router;