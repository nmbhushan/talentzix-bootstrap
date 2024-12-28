import { Card } from '@/components/ui/card'
import { TListingConfigPagination, TListingConfigTable } from '@/types/dynamicListingPageTypes'
import DynamicTable from '../table/dynamicTable'

const DynamicCards = ({ data, tableConfig, paginationConfig, viewUrl, cardData }: { data: any[], cardData: any, viewUrl: string, tableConfig: TListingConfigTable, paginationConfig: TListingConfigPagination }) => {
    console.log("cardData", cardData)
    const { cardId, showTable, description, title } = cardData;
    return (
        <Card className='flex mr-auto flex-col p-3 bg-transparent w-full mb-3'>
            <h2 className='mr-auto mb-2 text-xl font-semibold'>{title}</h2>
            {
                showTable ?
                    <div className='overflow-auto'>
                        <DynamicTable data={data} tableConfig={tableConfig} viewUrl={viewUrl} paginationConfig={paginationConfig} />
                    </div>
                    : "No Data Available"
            }
        </Card>
    )
}

export default DynamicCards