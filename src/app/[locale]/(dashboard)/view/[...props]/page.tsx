'use client'
import React, { useEffect } from "react"
import { TypographyH4 } from "@/components/typography/typography"
import { Breadcrumb } from "@/components/dashboard/common/Breadcrumb"
import { useParams } from "next/navigation"
import { convertStringCase } from "@/helpers/stringHelper"
import { globalViewConfig, sampleViewTableData, TViewConfigItem } from "@/mock/mockSalesMaster"
import DynamicAccordian from "@/components/custom-ui/accordian-section/DynamicAccordian"
import DynamicCards from "@/components/custom-ui/cards-section/DynamicCards"

export default function DynamicViewPage() {
    const { props: routeParams } = useParams<any>()

    const [viewConfig, setViewConfig] = React.useState<TViewConfigItem>(globalViewConfig?.default)
    const [viewData, setViewData] = React.useState<any>([]);

    const breadcrumbItems = routeParams
        ? routeParams?.map((item: string) => ({
            label: convertStringCase(item, 'pascal', false),
            href: `/view/${item}`,
        }))
        : []

    useEffect(() => {
        const listingId = routeParams?.join('-') ?? '';
        const mockSalesMaster: TViewConfigItem = globalViewConfig?.[listingId]

        if (mockSalesMaster) {
            setViewConfig(mockSalesMaster)
        }

        mockSalesMaster.cards.map((master) => {
            return master.showTable === true && setViewData(sampleViewTableData[`${listingId}-${master.cardId}`])
        })
    }, [routeParams]);


    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            {viewData?.length ? (
                <div className="space-y-8 flex flex-col">
                    <section>
                        <div className="flex flex-col justify-between flex-start mb-4 ">
                            <TypographyH4 className="mb-1">{viewConfig.pageTitle} List</TypographyH4>
                            <div className="p-10">
                            </div>
                            <DynamicAccordian accordians={viewConfig.accordions} />
                            {
                                viewConfig.cards.map((card:any, index) => {
                                    return <DynamicCards data={viewData} cardData={card} key={index} tableConfig={card.tableConfig}
                                        paginationConfig={viewConfig.paginationConfig}
                                        viewUrl={routeParams[0]} />
                                })
                            }
                        </div>
                    </section>
                </div>
            ) : (
                <>No data found</>
            )}
        </div>
    )
}
