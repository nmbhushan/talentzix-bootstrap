'use client'
import React, { useState } from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { CirclePlus, Pencil } from 'lucide-react';
import {RadioOpt} from "@/components/dashboard/home/RadioOpt";

export function ResumeTemplateTabs() {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <>
            <div className="border border-[#E4E7EB] p-5 rounded-[5px]">
              {/* Tab Buttons */}
              <div className="flex">
                <button
                  className={`p-2 px-4 ${activeTab === "tab1" ? "border-b-2 border-[#635AD9] text-[11px] sm:text-[13px] text-[#635AD9] font-bold" : "text-[11px] sm:text-[13px] text-[#000000]"}`}
                  onClick={() => setActiveTab("tab1")}
                >
                  Resume Templates
                </button>
                <button
                  className={`p-2 px-4 ${activeTab === "tab2" ? "border-b-2 border-[#635AD9] text-[11px] sm:text-[13px] text-[#635AD9] font-bold" : "text-[11px] sm:text-[13px] text-[#000000]"}`}
                  onClick={() => setActiveTab("tab2")}
                >
                  CV Templates
                </button>
                <button
                  className={`p-2 px-4 ${activeTab === "tab3" ? "border-b-2 border-[#635AD9] text-[11px] sm:text-[13px] text-[#635AD9] font-bold" : "text-[11px] sm:text-[13px] text-[#000000]"}`}
                  onClick={() => setActiveTab("tab3")}
                >
                  Cover Letter
                </button>
              </div>

              {/* Tab Content */}
              <div className="py-4">
                {activeTab === "tab1" &&
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 border border-[#E4E7EB] rounded-[5px] flex items-center justify-center p-1">
                        <Image src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/resume-3.webp" width="175" height="250" alt="Resume" />
                    </div>
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 border border-[#E4E7EB] rounded-[5px] p-3">
                        <div className="flex items-center">
                            <p className="text-[12px] text-[#000000] font-medium">John Doe Resume</p>
                            <Pencil className="h-[10px] text-[#8B8B8B]"/>
                        </div>
                        <p className="text-[12px] text-[#8B8B8B]">Updated 23-12-2024</p>
                        <RadioOpt/>
                    </div>
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 border border-[#E4E7EB] rounded-[5px] flex items-center justify-center p-3">
                        <div className="text-center space-y-1">
                            <CirclePlus className="w-[37px] h-[37px] text-[#2196F3] mx-auto"/>
                            <p className="text-[12px] text-[#000000] font-medium">Create New Resume</p>
                            <p className="text-[12px] text-[#8B8B8B] font-normal leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                }
                {activeTab === "tab2" && <p>CV Templates Coming Soon...</p>}
                {activeTab === "tab3" && <p>Cover Letter Coming Soon...</p>}
              </div>
            </div>
        </>
    )
}
export default ResumeTemplateTabs;