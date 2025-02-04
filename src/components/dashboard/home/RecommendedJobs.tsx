'use client'
import React, { useState } from "react";
import { CirclePlus, Pencil } from 'lucide-react';
import Link from 'next/link';
import CustomTable, { TableColumn } from "@/components/table/custom-table"
import RecentRequests from "@/components/dashboard/requests/services/RecentRequests"
import { recentRequests, services } from "@/mock/mock"

export function RecommendedJobs() {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <>
            <div className="border border-[#E4E7EB] p-5 rounded-[5px]">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-[13px] text-[#000000]">Recommended Jobs</h6>
                <Link href="/" className="text-[13px] text-[#000000] underline hover:text-[#635AD9]">View All</Link>
              </div>
              <RecentRequests data={recentRequests} />
            </div>
        </>
    )
}
export default RecommendedJobs;