import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { PieGraph } from "@/components/charts/pie/pie-chart"

interface PieChartCardProps {
  title: string
  data: any[]
  chartConfig: any
}

export function PieChartCard({ title, data, chartConfig }: PieChartCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Button size="icon" variant="ghost">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <PieGraph data={data} config={chartConfig} title="" description="" />
      </CardContent>
    </Card>
  )
}
