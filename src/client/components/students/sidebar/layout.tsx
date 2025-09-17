import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Outlet } from "react-router-dom" // <-- Import Outlet
import { AppSidebar } from "./app-sidebar"
import { SiteHeader } from "./side-header"

export default function StudentDashboardLayout() {
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
