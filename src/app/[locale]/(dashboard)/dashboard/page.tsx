'use client'
import { Building2, Car, Calendar, Users, LucideIcon } from "lucide-react"
import DashboardWrapper from "@/components/dashboard/common/DashboardWrapper";
import { siteConfig } from "@/config/siteConfig";
import { TQuickLinkCard } from "@/components/dashboard/home/section-cards/QuickLinkCards";

const ACTION_CARDS: TQuickLinkCard[] = [
    { title: "Companies", icon: Building2 },
    { title: "Projects", icon: Building2 },

]

export default function Dashboard() {
    return (
        <DashboardWrapper type='common' welcomeTitle={siteConfig.authPageDesc} quickLinks={ACTION_CARDS} />
    )
}
