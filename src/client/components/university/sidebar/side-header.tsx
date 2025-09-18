import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import logo from "../../../assets/skcet-logo.jpg";
import {  ArrowRightFromLine, BellDot } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 py-3">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="felx justify-center">
          <h1 className="font-bold text-2xl text-center text-black tracking-tight">Welcome to University Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {/* <Button variant="ghost" asChild size="default" className="hidden sm:flex"> */}
            <a
              href="/auth/login"
              className="dark:text-foreground"
            >
            {/* <BellDot className="text-red-500 size-6"/> */}
            <ArrowRightFromLine />
            </a>
          {/* </Button> */}
          {/* <ThemeSelector /> */}
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  )
}