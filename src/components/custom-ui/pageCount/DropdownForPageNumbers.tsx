import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TListingConfigPagination } from '@/types/dynamicListingPageTypes';
const DropdownForPageNumbers = ({ paginationConfig }: { paginationConfig: TListingConfigPagination }) => {
    const { showPageSizeOptions, pageSizeOptions } = paginationConfig;
    return (

        showPageSizeOptions &&
        <div className='flex justify-end mb-5'>
            <Select
            // onValueChange={handlePageSizeChange}
            // defaultValue={defaultPageSize.toString()}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select page size" />
                </SelectTrigger>
                <SelectContent>
                    {pageSizeOptions.map((option) => (
                        <SelectItem key={option} value={option.toString()}>
                            {option} per page
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default DropdownForPageNumbers