"use client";

import React, { useState } from "react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Header } from "@/components/dashboard/common/Header";
import sidebarData from "@/mock/sidebar-items";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const isMobile = useIsMobile();

    const toggleSidebar = () => {
        setIsSidebarExpanded((prev) => !prev);
    };

    // Ensure sidebar is expanded by default on desktop
    React.useEffect(() => {
        if (!isMobile) {
            setIsSidebarExpanded(true);
        }
    }, [isMobile]);

    return (
        <div className="relative w-full h-screen flex">
            {isMobile && (
                <Button
                    variant="ghost"
                    size="icon"
                    className={
                        isSidebarExpanded ? "hidden" : "fixed top-4 left-4 z-50 md:hidden"
                    }
                    onClick={toggleSidebar}
                >
                    <Menu className={"h-6 w-6"} />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:relative top-0 left-0 h-full transition-all duration-300 ease-in-out z-40 
          ${isSidebarExpanded ? "w-[250px]" : "w-0 md:w-16"} 
          ${isMobile && !isSidebarExpanded
                        ? "-translate-x-full"
                        : "translate-x-0 h-full"
                    }
        `}
            >
                <AppSidebar
                    className="bg-sidebar-background h-[100vh] overflow-hidden"
                    navMain={sidebarData.navMain}
                    navSecondary={sidebarData?.navSecondary ?? null}
                    projects={sidebarData.projects ?? null}
                    user={sidebarData.user}
                    variant="sidebar"
                    collapsible={isMobile ? "none" : "icon"}
                    onToggle={toggleSidebar}
                    isExpanded={isSidebarExpanded}
                />
            </aside>
            <div className="flex flex-col w-full h-auto">
                <Header></Header>
                <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
            </div>

            {/* Overlay for mobile view when sidebar is expanded */}
            {isMobile && isSidebarExpanded && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                />
            )}
        </div>
    );
}
