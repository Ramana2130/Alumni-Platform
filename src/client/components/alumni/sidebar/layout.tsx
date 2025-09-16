import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/alumni/sidebar/app-sidebar"
import { SiteHeader } from "@/components/alumni/sidebar/side-header"
import { Outlet } from "react-router-dom" // <-- Import Outlet

export default function DashboardLayout() {
  return (
    <SidebarProvider
      // style={
      //   {
      //     "--sidebar-width": "calc(var(--spacing) * 72)",
      //   } as React.CSSProperties
      // }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <Outlet /> {/* <-- Render child routes here */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
