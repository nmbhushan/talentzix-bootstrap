import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CustomTable, { TableColumn } from "@/components/table/custom-table"

const StatusBadge = ({ status }: { status: string }) => {
  const colorMap: { [key: string]: string } = {
    Available: "bg-green-500",
    Rejected: "bg-red-500",
    "On hold": "bg-blue-500",
  }

  return <Badge className={`${colorMap[status]} text-white`}>{status}</Badge>
}

const RecentRequests = ({ data }: { data: any[] }) => {
  const columns: TableColumn[] = [
    { key: "id", label: "S.No" },
    { key: "community", label: "Community" },
    { key: "unitNumber", label: "Unit Number" },
    { key: "serviceType", label: "Service Type" },
    { key: "dateTime", label: "Date & Time" },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ]

  const actions = (row: any) => (
    <>
      <Button variant="ghost" size="sm">
        View
      </Button>
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

  return <CustomTable data={data} columns={columns} actions={actions} />
}

export default RecentRequests