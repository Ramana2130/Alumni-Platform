import DashboardLayout from "@/components/alumni/sidebar/layout";
import AlumniChatPage from "@/pages/alumni/AlumniChatPage";
import AlumniHomePage from "@/pages/alumni/AlumniHomePage";
import AlumniPersonalProfile from "@/pages/alumni/AlumniPersonalProfile";
import AlumniProfileList, { alumniProfileListLoader } from "@/pages/alumni/AlumniProfileList";
import JobPostingPage from "@/pages/alumni/JobPostingPage";
import StudentProfileList from "@/pages/alumni/StudentProfileList";
import LoginPage from "@/pages/login/LoginPage";
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
    }
]);

export default router;