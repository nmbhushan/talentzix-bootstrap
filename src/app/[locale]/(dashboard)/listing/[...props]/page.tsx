'use client'

import React, { useEffect } from "react"
import { TypographyH4 } from "@/components/typography/typography"
import { Breadcrumb } from "@/components/dashboard/common/Breadcrumb"
import { useParams } from "next/navigation"
import { convertStringCase } from "@/helpers/stringHelper"
import { globalListingConfig, sampleTableData } from "@/mock/mockSalesMaster"
import DynamicTable from "@/components/custom-ui/table/dynamicTable"
import DynamicHeader from "@/components/custom-ui/header-section/DynamicHeader"
import DynamicFilterInputs from "@/components/custom-ui/filterConfig-section/DynamicFilterInputs"
import DynamicPagination from "@/components/custom-ui/pagination-section/DynamicPagination"
import { TListingConfigItem } from "@/types/dynamicListingPageTypes"


export default function DynamicListingPage() {
    const { props: routeParams } = useParams<any>()

    const [listingConfig, setListingConfig] = React.useState<TListingConfigItem>(globalListingConfig?.default)
    const [listingData, setListingData] = React.useState<any>([]);

    const breadcrumbItems = routeParams
        ? routeParams?.map((item: string) => ({
            label: convertStringCase(item, 'pascal', false),
            href: `/listing/${item}`,
        }))
        : []

    useEffect(() => {
        const listingId = routeParams?.join('-') ?? ''
        const mockSalesMaster: TListingConfigItem = globalListingConfig?.[listingId]
        if (mockSalesMaster) {
            setListingConfig(mockSalesMaster)
        }
        const data = sampleTableData[listingId] ?? []
        setListingData(data)
    }, [routeParams])

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            {listingData?.length ? (
                <div className="space-y-8">
                    <section>
                        <div className="flex justify-between items-center mb-4 ">
                            <TypographyH4>{listingConfig.listingTitle} List</TypographyH4>
                            <DynamicHeader data={listingConfig.headerActions} />
                        </div>
                        <div className="bg-transparent">
                            <DynamicFilterInputs filtersConfig={listingConfig.filtersConfig} />
                        </div>
                        <DynamicTable data={listingData} viewUrl={routeParams[0]} tableConfig={listingConfig.tableConfig} paginationConfig={listingConfig.paginationConfig} />
                        <div className="pt-2 flex w-full">
                            <DynamicPagination
                                {...listingConfig.paginationConfig}
                                currentPage={1}
                                totalItems={sampleTableData[routeParams?.join('-') ?? '']?.length || 0}
                                onPageChange={(change: any) => console.log(change)}
                                onPageSizeChange={(size: any) => console.log(size)}
                            />
                        </div>
                    </section>
                </div>
            ) :
                <>No data found</>
            }
        </div>
    )
}