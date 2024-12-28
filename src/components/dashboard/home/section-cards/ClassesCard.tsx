import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Users, MapPin, Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ClassItem = {
  id: number
  name: string
  price: string
  capacity: number
  location: string
  image: string
  description?: string
  features?: string[]
}

interface ClassesCardProps {
  classes: ClassItem[]
}

export function ClassesCard({ classes }: ClassesCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Classes and Offerings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map(({
            id,
            name,
            price,
            capacity,
            location,
            image,
            description,
            features,
          }) => (
            <Card key={id} className="overflow-hidden cursor-pointer">
              <div className="relative aspect-video">
                <Image 
                  src={image} 
                  alt={name} 
                  className="object-cover transition-transform hover:scale-105" 
                  fill 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-2 right-2">{price}</Badge>
              </div>
              <CardContent className="grid gap-2.5 p-4">
                <h3 className="text-lg font-semibold leading-none tracking-tight">{name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{location}</span>
                  </div>
                </div>
                {features && features.length > 0 && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          <Info className="mr-2 h-4 w-4" />
                          View Features
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <ul className="list-disc pl-4 text-sm">
                          {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}