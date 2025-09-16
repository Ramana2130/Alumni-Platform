import DashboardLayout from "@/components/alumni/sidebar/layout";
import AlumniHomePage from "@/pages/alumni/AlumniHomePage";
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
            }
        ],
    }
]);

export default router;