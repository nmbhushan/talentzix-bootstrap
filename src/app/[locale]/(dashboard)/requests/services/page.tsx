'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyH2, TypographyH4 } from "@/components/typography/typography"
import ServicesGrid from "@/components/dashboard/requests/services/ServicesGrid"
import RecentRequests from "@/components/dashboard/requests/services/RecentRequests"
import { recentRequests, services } from "@/mock/mock"
import { Breadcrumb } from "@/components/dashboard/common/Breadcrumb"

export default function ServicesPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/" },
    { label: "Request", href: "/request" },
    { label: "Services", href: "/request/services" },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <div className="space-y-8">
        <section>
          <TypographyH4 className="mb-4">Select a Service</TypographyH4>
          <ServicesGrid services={services} />
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <TypographyH4>My Requests</TypographyH4>
            <Button variant="outline">View All</Button>
          </div>
          <RecentRequests data={recentRequests} />
        </section>
      </div>
    </div>
  )
}