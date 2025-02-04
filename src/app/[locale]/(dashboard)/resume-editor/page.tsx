'use client'
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2, Car, Calendar, Users, LucideIcon } from "lucide-react"
import DashboardWrapper from "@/components/dashboard/common/DashboardWrapper";
import { siteConfig } from "@/config/siteConfig";
import { TQuickLinkCard } from "@/components/dashboard/home/section-cards/QuickLinkCards";
import { EditableResume } from "@/components/custom-ui/resume-editor/resume-builder";
import { EditorMenu } from "@/components/custom-ui/resume-editor/editor-menu";

export default function ResumeEditor() {
    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <EditorMenu/>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <EditableResume/>
            </div>
        </div>
    )
}
