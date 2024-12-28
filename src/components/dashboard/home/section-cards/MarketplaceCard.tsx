import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, ChevronRight } from "lucide-react"

type MarketPlace = {
  id: number
  name: string
  description: string
  type: string
  time: string
}

interface MarketPlacesCardProps {
  marketPlaces: MarketPlace[]
}

export function MarketPlacesCard({ marketPlaces }: MarketPlacesCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Market Places</CardTitle>
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
          View All
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {marketPlaces.map(({ id, name, description, type, time }) => (
          <div key={id} className="flex items-start gap-4">
            <div className="rounded-lg border p-2">
              <Building2 className="h-4 w-4" />
            </div>
            <div className="grid gap-1">
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{type}</span>
                <span>•</span>
                <span>{time}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
