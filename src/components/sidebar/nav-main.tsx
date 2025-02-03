"use client";

import { ChevronRight, TypeIcon as type, LucideIcon } from 'lucide-react';
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: NavItem[];
};

export function NavMain({ items }: { items: NavItem[] }) {
  const currentPath = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const isItemActive = (item: NavItem): boolean =>
    currentPath === item.url ||
    (item.items && item.items.some(isItemActive)) ||
    false;

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const renderNavItems = (items: NavItem[], depth = 0) =>
    items.map((item) => {
      const isActive = isItemActive(item);
      const isExpanded = expandedSections.includes(item.title);
      const hasSubItems = item.items && item.items.length > 0;
      const isExpandable = hasSubItems || item.url === "#" || item.url === "";

      const fontSizeClass = cn({
        "text-sm": depth === 0 || depth === 1,
        "text-[0.80rem]": depth > 1,
      });

      const handleButtonClick = (e: React.MouseEvent) => {
        if (isExpandable) {
          e.preventDefault();
          toggleSection(item.title);
        }
      };

      return (
        <SidebarMenuItem
          key={item.title}
          className={cn("my-0.5", depth > 0 && "ml-4")}
        >
          <Collapsible
            open={isExpanded}
            onOpenChange={() => isExpandable && toggleSection(item.title)}
          >
            <div className="flex items-center group">
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className={cn(
                  "flex w-full items-center justify-between gap-2 size-10 rounded-[0] px-2 py-1.5 font-medium transition-colors",
                  fontSizeClass,
                  depth === 0 && "mb-0",
                  depth > 0 && "size-8 px-2",
                  isActive &&
                  depth === 0 &&
                  "bg-[#EFF3FF] text-[#000112]",
                  isActive &&
                  depth === 1 &&
                  "bg-primary/30 px-2 text-black size-8 dark:bg-primary/30 dark:text-foreground/80",
                  isActive &&
                  isExpanded &&
                  depth === 1 &&
                  "bg-foreground/40 text-accent-foreground",
                  !isActive && "hover:bg-accent/50 hover:text-accent-foreground dark:hover:bg-primary"
                )}
              >
                {!isExpandable ? (
                  <Link href={item.url} className="flex flex-1 items-center">
                    {item.icon && <item.icon className="mr-1 h-4 w-7" />}
                    <span className="flex-1 text-[14px] text-[#404653]">{item.title}</span>
                  </Link>
                ) : (
                  <button
                    onClick={handleButtonClick}
                    className="flex flex-1 items-center"
                  >
                    {item.icon && <item.icon className="mr-2 h-4 w-7" />}
                    <span className="flex-1 text-[14px] text-[#404653]">{item.title}</span>
                  </button>
                )}
              </SidebarMenuButton>
              {isExpandable && (
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction
                    className={cn(
                      depth === 1 ? "h-6 w-6" : "h-7 w-7",
                      "hover:bg-accent/50 hover:bg-transparent"
                    )}
                  >
                    <ChevronRight
                      className={cn(
                        "transition-transform",
                        isExpanded && "rotate-90",
                        isActive
                          ? "text-background"
                          : "text-foreground/60 dark:text-foreground/60",
                        "dark:group-hover:text-background"
                      )}
                    />
                    <span className="sr-only">Toggle {item.title} submenu</span>
                  </SidebarMenuAction>
                </CollapsibleTrigger>
              )}
            </div>
            {hasSubItems && (
              <CollapsibleContent>
                <SidebarMenuSub>
                  {renderNavItems(item.items!, depth + 1)}
                </SidebarMenuSub>
              </CollapsibleContent>
            )}
          </Collapsible>
        </SidebarMenuItem>
      );
    });

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>{renderNavItems(items)}</SidebarMenu>
    </SidebarGroup>
  );
}