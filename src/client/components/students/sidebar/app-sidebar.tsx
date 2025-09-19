import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavDocuments } from "./nav-documents"
import { NavUser } from "./nav-user"
import { NavSecondary } from "./nav-secondary"
import logo from '../../../../client/assets/skcet-logo.jpg'
import { BellPlus, GraduationCap, HandCoins, House, MessageCircle, Users } from "lucide-react"
import { useAuthUser } from "@/app/useAuthUser"


const data = {
  user: {
    name: "Michael",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/students/student-personal-details",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    }
  ],
  documents: [
    {
      name: "Dashboard",
      url: "/students/dashboard",
      icon: House,
    },
    {
      name: "Alumni Profile's",
      url: "/students/alumni-profiles",
      icon: GraduationCap,
    },
    {
      name: "Apply Jobs",
      url: "/students/apply-job",
      icon: BellPlus,
    },
    {
      name: "Fund Request",
      url: "/students/fund-request",
      icon: HandCoins,
    },
    // {
      //   name: "Chat",
    //   url: "/students/chat",
    //   icon: MessageCircle,
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const email = useAuthUser();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 py-7 "
            >
              <a href="#">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                {/* <img src={logo} alt="" className="size-10" /> */}
                <GraduationCap className="" />                
                <span className="text-base font-semibold">Alumni Platform</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary}  />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          email: email ?? "",
          avatar: "/avatars/shadcn.jpg"
        }} />
      </SidebarFooter>
    </Sidebar>
  )
}