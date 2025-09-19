import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/alumni/sidebar/mode-toggle"
import { ThemeSelector } from "@/components/alumni/sidebar/theme-selector"
import { ArrowRightFromLine, BellDot } from "lucide-react"
import { Arrow } from "@radix-ui/react-tooltip"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function SiteHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear authentication tokens/session
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // (Optional) Call backend logout if you’re storing sessions
    // await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, { method: "POST" });

    // ✅ Redirect user to login page
    navigate("/auth/login");
    toast.success("Logged out successfully");
  };
  
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky top-0 z-10 bg-background">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 py-3">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="font-bold text-2xl">Welcome to Alumni Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Logout"
          >
            <ArrowRightFromLine />
          </button>
        </div>
      </div>
    </header>
  )
}