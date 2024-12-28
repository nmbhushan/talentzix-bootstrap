import CustomTable, { TableColumn } from "@/components/table/custom-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TListingConfigPagination, TListingConfigTable } from "@/types/dynamicListingPageTypes"
import { MoreVertical } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import DropdownForPageNumbers from "../pageCount/DropdownForPageNumbers"

//TODO: handle status for all possible values
const StatusBadge = ({ status }: { status: string }) => {
    const colorMap: { [key: string]: string } = {
        Available: "bg-green-500",
        "Active": "bg-green-500",
        Rejected: "bg-red-500",
        "In-Active": "bg-red-500",
        "On hold": "bg-blue-500",
    }

    return <Badge className={`${colorMap[status]} text-white`}>{status}</Badge>
}

const DynamicTable = ({ data, tableConfig, paginationConfig, viewUrl }: { data: any[], viewUrl?: string, paginationConfig?: TListingConfigPagination, tableConfig: TListingConfigTable }) => {
    const [columns, setColumns] = useState<TableColumn[]>([{ key: "id", label: "S.No" }])
    useEffect(() => {
        setColumns(
            tableConfig.columns.map((col) => {
                if (col.type === 'status') {
                    return {
                        key: col.dataIndex,
                        label: col.title,
                        render: (row) => <StatusBadge status={row[col.dataIndex]} />
                    }
                }
                return {
                    key: col.dataIndex,
                    label: col.title
                }
            })
        )
    }, [data, tableConfig])

    //TODO: add dynamic action based on data and config 
    const actions = (row: any) => (
        <>
            {viewUrl &&
                <Link href={`/view/${viewUrl}`}>
                    <Button variant="ghost" size="sm">
                        View
                    </Button>
                </Link>
            }
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )

    return (
        <>
            {paginationConfig && <DropdownForPageNumbers paginationConfig={paginationConfig} />}
            <CustomTable data={data} columns={columns} actions={actions} />
        </>
    )
}

export default DynamicTable