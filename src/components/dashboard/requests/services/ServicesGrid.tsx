import { Card, CardContent } from "@/components/ui/card"
import { TypographyH3, TypographyP } from "@/components/typography/typography"
import Image from "next/image"

const ServiceCard = ({ title, image, description }: { title: string; image: string; description: string }) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
    <CardContent className="p-0">
      <div className="relative aspect-video">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-foreground/0 via-foreground/60 to-transparent dark:from-background/80 dark:via-background/50 dark:to-transparent">
        <TypographyH3 className="text-lg font-bold text-background dark:text-foreground">{title}</TypographyH3>
          <TypographyP className="text-xs font-medium line-clamp-2 text-background dark:text-foreground">{description}</TypographyP>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ServicesGrid = ({ services }: { services: { id: number; title: string; image: string; description: string }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {services.map((service) => (
      <ServiceCard key={service.id} title={service.title} image={service.image} description={service.description} />
    ))}
  </div>
)

export default ServicesGrid