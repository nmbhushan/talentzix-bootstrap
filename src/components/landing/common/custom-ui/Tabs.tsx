// components/TabLayout.tsx

"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function TabsLayout({
    tabs, layout,theme,align,
    defaultValue = tabs[0].title,
}: {
    tabs: { title: string; content: React.ReactNode }[];
    defaultValue?: string;
    theme?: any;
    align?: any;
    layout?: "layout1" | "layout2";
}) {
    const [loading, setLoading] = useState(false);
    return (
        <Tabs defaultValue={defaultValue} className={`${layout}`} >
            <TabsList className={`p-0 justify-normal items-stretch h-auto rounded-none rounded-tl-lg rounded-tr-lg overflow-hidden text-primary ${align === 'center' ? '!justify-center md:gap-8' : '' } ${layout === 'layout1' ? 'justify-around' : '' } ${layout === 'layout2' ? 'w-auto bg-primary border-transparent' : 'w-full border-b-[1px] border-color-[#f0f0f0] bg-transparent'}`}>
                {tabs.map((tab, index: any) => (
                    <TabsTrigger key={index} value={tab.title} className={`bg-transparent text-primary font-normal text-base leading-none rounded-none min-w-[100px] px-3 py-4 shadow-none  data-[state="active"]:font-medium  data-[state=active]:text-shadow-sm data-[state=active]:border-primary-hover border-transparent border-b-2 transition-colors duration-300  data-[state="active"]:shadow-none ${layout === 'layout2' ? 'bg-primary data-[state="active"]:text-primary text-white px-3 py-4 ' : ''} ${theme === 'dark' ? 'justify-center bg-transparent text-white data-[state="active"]:!bg-transparent' :''}`}>
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab, index: any) => (
                <TabsContent key={index} value={tab.title} className={`${layout === 'layout2' ? 'mt-0 rounded-none' : ''}`}>
                    {loading ? (<p>Loading ....</p>) : tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
}
