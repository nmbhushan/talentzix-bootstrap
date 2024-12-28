'use client'
import { TypographyH4 } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

export type TActionCard = {
    title?: string;
    icon?: LucideIcon;
    value?: string | number;
    action: 'info' | 'button' | 'popup';
    actionType?: 'primary' | 'secondary';
    actionText?: string;
    actionLink?: any; //TODO
}

export function ActionCards({ cardList }: { cardList: TActionCard[] }) {

    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4`}> {/* Grid of Cards */}
            {cardList?.map(({ title, icon: Icon, value, action, actionType, actionText, actionLink }, index) => (
                <Card
                    key={index}
                    className="shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out"
                >
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            {Icon && <Icon className="h-8 w-8 text-primary mr-2" />}
                            <div className="">
                                <CardTitle className={`text-xs font-medium mb-1 text-muted-foreground`}>
                                    {title}
                                </CardTitle>
                                <TypographyH4 className="font-medium mt-">
                                    {value}
                                </TypographyH4>
                            </div>
                        </div>

                        {(action === 'button' || action === 'popup') && <Button className="" variant={actionType === 'primary' ? 'default' : 'secondary'}>{actionText}</Button>}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
