import { ChevronRight } from 'lucide-react'
import Link from "next/link"
import { TypographySmall } from "@/components/typography/typography"

type BreadcrumbItem = {
  label: string;
  href: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />}
            {index === items.length - 1 ? (
              <TypographySmall className="font-medium text-foreground">{item.label}</TypographySmall>
            ) : (
              <Link href={item.href}>
                <TypographySmall className="text-muted-foreground hover:text-primary">{item.label}</TypographySmall>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}