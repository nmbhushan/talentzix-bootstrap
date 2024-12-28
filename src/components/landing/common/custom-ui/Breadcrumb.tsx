"use client"

import * as React from "react"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HomeIcon } from "lucide-react"

const ITEMS_TO_DISPLAY = 3

export function BreadcrumbResponsive({ breadcrum }: { breadcrum: { href?: string; label: string }[] }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {/* Home Icon as First Breadcrumb Item */}
        {breadcrum[0] && (
          <BreadcrumbItem>
            <BreadcrumbLink href={breadcrum[0].href || "#"}>
              <HomeIcon className="me-1 h-4 w-4 inline-block" />
              {breadcrum[0].label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        <BreadcrumbSeparator />

        {breadcrum.length > ITEMS_TO_DISPLAY && <BreadcrumbSeparator />}

        {/* Conditionally Render Breadcrumb Items */}
        {breadcrum.length > ITEMS_TO_DISPLAY ? (
          <>
            {/* Dropdown Menu for Middle Items */}
            <BreadcrumbItem>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger
                  className="flex items-center gap-1"
                  aria-label="More items"
                >
                  <BreadcrumbEllipsis className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {breadcrum.slice(1, -2).map((item, index) => (
                    <DropdownMenuItem key={index}>
                      <Link href={item.href || "#"}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            {/* Display Last Two Items */}
            {breadcrum.slice(-2).map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {index === 1 ? (
                    // Display last item as plain text without Link
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href || "#"}>
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index === 0 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </>
        ) : (
          // Display All Items if Count is Within Limit
          breadcrum.slice(1).map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {index === breadcrum.length - 2 ? (
                  // Display last item as plain text
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href || "#"}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrum.length - 2 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
