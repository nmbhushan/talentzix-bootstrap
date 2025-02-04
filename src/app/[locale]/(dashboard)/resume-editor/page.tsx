'use client'
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2, Car, Calendar, Users, LucideIcon } from "lucide-react"
import DashboardWrapper from "@/components/dashboard/common/DashboardWrapper";
import { siteConfig } from "@/config/siteConfig";
import { TQuickLinkCard } from "@/components/dashboard/home/section-cards/QuickLinkCards";
import { EditableResume } from "@/components/custom-ui/resume-editor/resume-builder";

export default function ResumeEditor() {
    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-3">
                Menu
            </div>
            <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-9">
                        <EditableResume/>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        Menu
                    </div>
                </div>
            </div>
        </div>
    )
}
