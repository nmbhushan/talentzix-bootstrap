import { WelcomeCardCommon } from "@/components/dashboard/home/section-cards/WelcomeCardCommon";
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
            <div className="w-full">
                <WelcomeCardCommon content={welcomeTitle} />
            </div>
            {children}
        </div>
    );
}
