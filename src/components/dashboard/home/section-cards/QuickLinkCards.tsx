'use client'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

export type TQuickLinkCard = {
    title: string
    icon: LucideIcon
    url?: string
}

export function QuickLinkCards({ cardList }: { cardList: TQuickLinkCard[] }) {

    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4`}> {/* Grid of Cards */}
            {cardList?.map(({ title, icon: Icon }, index) => (
                <Card
                    key={index}
                    className="flex flex-col items-center justify-center p-4 text-center border shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                >
                    <CardContent className="flex items-center gap-3 py-2">
                        <Icon className="h-8 w-8 text-primary" />
                        <CardTitle className={`text-xs font-medium text-left`}>
                            {title}
                        </CardTitle>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
