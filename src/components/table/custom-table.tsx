import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type TableColumn = {
  key: string
  label: string
  render?: (row: any) => React.ReactNode
  className?: string
}

export type CustomTableProps = {
  data: any[]
  columns: TableColumn[]
  actions?: (row: any) => React.ReactNode
}

const CustomTable: React.FC<CustomTableProps> = ({ data, columns, actions }) => {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader className="text-[12px]">
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className={column.className}>
                {column.label}
              </TableHead>
            ))}
            {actions && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody className="text-[12px]">
          {data.map((row, index) => (
            <TableRow key={row.id || index}>
              {columns.map((column) => (
                <TableCell key={column.key} className={column.className}>
                  {column.render ? column.render(row) : row[column.key]}
                </TableCell>
              ))}
              {actions && (
                <TableCell>
                  <div className="flex items-center gap-2">{actions(row)}</div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CustomTable
