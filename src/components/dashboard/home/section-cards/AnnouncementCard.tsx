import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Calendar, ChevronRight } from "lucide-react"

type Announcement = {
  id: number
  title: string
  description: string
  date: string
}

interface AnnouncementsCardProps {
  announcements: Announcement[]
}

export function AnnouncementsCard({ announcements }: AnnouncementsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Announcements</CardTitle>
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
          View All
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.map(({ id, title, description, date }) => (
          <div key={id} className="flex items-start gap-4">
            <div className="rounded-lg border p-2">
              <Building2 className="h-4 w-4" />
            </div>
            <div className="grid gap-1">
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {date}
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
