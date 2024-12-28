'use client'
import { TypographyH4 } from "@/components/typography/typography"
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils";

export type TSectionLayout = {
    children: React.ReactNode;
    title?: string;
    slider?: boolean;
    scrollable?: boolean;
    className?: string;
    badgeCount?: string | number;
    type: 'open' | 'card';
}

export function SectionLayout({ children, title, slider = false, scrollable, className, badgeCount, type }: TSectionLayout) {
    const sectionElement = (
        <div className={cn("space-y-4", className)}>
            {title || badgeCount ?
                <div className="flex items-center">
                    {title && <TypographyH4 className="">{title}</TypographyH4>}
                    {badgeCount && <Badge className="mx-2 px-[7px]">{badgeCount}</Badge>}
                </div>
                : ''
            }
            {children}
        </div>
    )
    return type === 'card' ? (
        <Card className="p-4">{sectionElement}</Card>
    ) : sectionElement;
}
