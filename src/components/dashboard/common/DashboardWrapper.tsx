import { WelcomeCardCommon } from "@/components/dashboard/home/section-cards/WelcomeCardCommon";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';
import {
    announcements,
    chartConfig,
    classes,
    issuesData,
    marketPlaces,
    servicesData,
} from "@/mock/mock";
import { AnnouncementsCard } from "../home/section-cards/AnnouncementCard";
import { PieChartCard } from "../home/section-cards/ChartCard";
import { ClassesCard } from "../home/section-cards/ClassesCard";
import { MarketPlacesCard } from "../home/section-cards/MarketplaceCard";
import { QuickLinkCards, TQuickLinkCard } from "../home/section-cards/QuickLinkCards";
import { WelcomeCard } from "../home/section-cards/WelcomeCard";
import DashboardInfo from "@/components/dashboard/home/DashboardInfo";
import DashboardOverview from "@/components/dashboard/home/DashboardOverview";
import {ResumeTemplateTabs} from "@/components/dashboard/home/ResumeTemplateTabs";
import {RecommendedJobs} from "@/components/dashboard/home/RecommendedJobs";

export default function DashboardWrapper({ children, welcomeTitle, quickLinks, type = 'common' }: { children?: React.ReactNode, welcomeTitle: string, quickLinks: TQuickLinkCard[], type: 'common' | 'modern' }) {
    if (type === 'modern')
        return (
            <div className="flex min-h-screen flex-col">
                <main className="flex-1 space-y-4 p-4 md:p-8">
                    <div className="w-full flex gap-4">
                        <div className="w-[60%]">
                            <WelcomeCard />
                        </div>
                        <div className="w-[40%]">
                            <QuickLinkCards cardList={quickLinks} />
                        </div>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                        <AnnouncementsCard announcements={announcements} />
                        <MarketPlacesCard marketPlaces={marketPlaces} />
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                        <PieChartCard
                            title="My Services"
                            data={servicesData}
                            chartConfig={chartConfig}
                        />
                        <PieChartCard
                            title="My Issues Reported"
                            data={issuesData}
                            chartConfig={chartConfig}
                        />
                    </div>
                    <ClassesCard classes={classes} />
                </main>
            </div>
        );

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <div className="block sm:flex items-center justify-center bg-[#726ADC] h-auto py-3 sm:py-0 sm:h-[86px] space-x-3 px-3">
                <p className="text-[12px] sm:text-[15px] leading-tight sm:leading-normal mb-3 sm:mb-0 font-medium text-[#FFFFFF]">Boost your career with a job-winning resume – upgrade now and land your dream job!</p>
                <Button className="text-[12px] !m-auto bg-transparent border border-[#FFFFFF] hover:border-[#219BE4]"><Crown className="me-1"/> Upgrade Now</Button>
            </div>
            <div className="w-full">
                {/* <WelcomeCardCommon content={welcomeTitle} /> */}
                <div className="flex items-center justify-between mb-3">
                    <h6 className="text-[14px] text-[#000112] font-semibold mb-0">Dashboard</h6>
                    {/* <Image src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/my-account/dashboard-set.webp" width="20" height="20" alt="Image" /> */}
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <DashboardInfo/>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <DashboardOverview/>
                    </div>
                </div>
            </div>
            <ResumeTemplateTabs/>
            <RecommendedJobs/>
            {children}
        </div>
    );
}
