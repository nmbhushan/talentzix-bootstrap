import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { SiteFooter } from '../ui/site-footer'

interface PageContainerProps {
    children: React.ReactNode
    scrollable?: boolean
    footerSections?: Array<any>
    logoSrc?: string
    companyName?: string
    hideInfo?: boolean
    noPadding?: boolean // New prop to control padding
}

export default function PageContainer({
    children,
    scrollable = false,
    noPadding = false,
}: PageContainerProps) {
    return (
        <>
            {scrollable ? (
                <ScrollArea className={`h-[calc(100dvh-52px)] ${noPadding ? '' : 'px-[20px] py-4'}`}>
                    <div className={`h-full mx-auto ${noPadding ? '' : 'px-[20px] py-4'}`}>
                        {children}
                    </div>
                </ScrollArea>
            ) : (
                <div className={`h-full ${noPadding ? '' : 'p-4 px-[20px]'}`}>
                    {children}
                </div>
            )}
        </>
    )
}
