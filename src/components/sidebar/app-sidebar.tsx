import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { NavItem, NavMain } from "./nav-main";
import { NavProjects, ProjectItem } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { NavUser, User } from "./nav-user";
import { SidebarCloseIcon } from "lucide-react";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user?: User;
  navMain?: NavItem[];
  navSecondary?: NavItem[];
  projects?: ProjectItem[];
  hideUserSection?: boolean;
  hideNavMain?: boolean;
  hideProjects?: boolean;
  hideNavSecondary?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

export function AppSidebar({
  user,
  navMain,
  navSecondary,
  projects,
  hideUserSection = false,
  hideNavMain = false,
  hideProjects = false,
  hideNavSecondary = false,
  isExpanded,
  onToggle,
  ...props
}: AppSidebarProps) {
  return (
    <SidebarProvider
      defaultOpen={isExpanded}
      open={isExpanded}
      onOpenChange={onToggle}
    >
      <Sidebar variant="sidebar" {...props}>
        <SidebarHeader className="h-16 md:h-10 lg:h-16 flex items-center justify-center">
          <SidebarMenu>
            <div className="relative w-full h-full flex items-center justify-between px-1 mt-4">
              <a href="#">
                <div className="relative h-full w-auto">
                  <Image
                    src={
                      isExpanded
                        ? "/images/sidebar/realcube-logo.svg"
                        : "/images/sidebar/realcube-logo-small.svg"
                    }
                    width={isExpanded ? 150 : 50}
                    height={isExpanded ? 30 : 40}
                    alt="realcube-logo"
                    onClick={onToggle}
                  />
                </div>
              </a>
              <SidebarCloseIcon
                onClick={onToggle}
                className={isExpanded ? "h-5 w-5 cursor-pointer" : "hidden"}
              />
            </div>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="mt-4">
          {!hideNavMain && navMain?.length ? <NavMain items={navMain} /> : <></>}
          {!hideProjects && projects?.length ? <NavProjects projects={projects} /> : <></>}
          {!hideNavSecondary && navSecondary && (
            <NavSecondary items={navSecondary} className="mt-auto" />
          )}
        </SidebarContent>

        {!hideUserSection && user && (
          <SidebarFooter>
            <NavUser user={user} />
          </SidebarFooter>
        )}
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}
