"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react'

const DynamicAccordian = ({ accordians }: { accordians: any }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleAccordionClick = (itemIndex: number) => {
        setActiveIndex((prevIndex) => (prevIndex === itemIndex ? 0 : itemIndex));
    };

    return (
        <Card className='w-full p-3 overflow-y-auto bg-transparent mb-3'>
            <Accordion type="single" collapsible className="w-full" defaultValue={`item-${activeIndex}`}>
                {
                    accordians.map((accor: { accordianId: string, title: string, content: any[], isExpanded: boolean }, index: number) => {
                        return (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b m-3">
                                <AccordionTrigger
                                    onClick={() => handleAccordionClick(index)}
                                    className={`text-lg font-semibold px-4 py-2`}
                                >
                                    {accor.title}
                                </AccordionTrigger>
                                <AccordionContent
                                    className="grid grid-cols-3 gap-8 p-5 "
                                >
                                    {accor.content.map((accordItems, index) => {
                                        return <div key={index}>
                                            <span className="font-normal text-[14px] leading-5 text-[#556B82]">{accordItems.label}</span>
                                            <p className="font-normal leading-6 text-[#131E29] text-[16px]">{accordItems?.value}</p>
                                        </div>
                                    })
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </Card>
    );
}

export default DynamicAccordian