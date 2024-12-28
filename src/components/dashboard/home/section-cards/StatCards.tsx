'use client'
import { TypographyH4 } from "@/components/typography/typography"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

export type TStatCard = {
    title: string
    icon: LucideIcon
    url?: string
    count?: number
}

export function StatCards({ cardList }: { cardList: TStatCard[] }) {

    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4`}> {/* Grid of Cards */}
            {cardList?.map(({ title, icon: Icon, count, url }, index) => (
                <Card
                    key={index}
                    className={"hover:shadow-md hover:scale-105 transition-transform duration-200 ease-in-out" + (url ? " cursor-pointer" : "")}
                >
                    <CardContent className="flex flex-col items-start p-5">
                        <div className="flex justify-between w-full mb-1">
                            <CardTitle className="text-sm font-normal">
                                {title}
                            </CardTitle>
                            <Icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <TypographyH4 className="text-center font-medium">
                            {count}
                        </TypographyH4>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
