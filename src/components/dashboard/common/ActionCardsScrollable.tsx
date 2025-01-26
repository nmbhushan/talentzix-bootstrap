//Backup file, not being used
'use client'

import { TypographyH4 } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const actionItems: CardItem[] = [
    {
        title: 'Commission',
        value: '10%',
        action: 'button',
        actionType: 'primary',
        actionText: 'Claim Now',
        actionLink: '#',
    },
    {
        title: 'Doc Expiry',
        value: '3-May-2024',
        action: 'button',
        actionType: 'secondary',
        actionText: 'Update',
        actionLink: '#',
    },
    {
        title: 'Commission',
        value: '10%',
        action: 'button',
        actionType: 'primary',
        actionText: 'Claim Now',
        actionLink: '#',
    },
    {
        title: 'Doc Expiry',
        value: '3-May-2024',
        action: 'button',
        actionType: 'secondary',
        actionText: 'Update',
        actionLink: '#',
    },
    {
        title: 'Commission',
        value: '10%',
        action: 'button',
        actionType: 'primary',
        actionText: 'Claim Now',
        actionLink: '#',
    },
    {
        title: 'Doc Expiry',
        value: '3-May-2024',
        action: 'button',
        actionType: 'secondary',
        actionText: 'Update',
        actionLink: '#',
    },

    // ... more items
]

export type CardItem = {
    title: string
    value: string
    action: 'button'
    actionType: 'primary' | 'secondary'
    actionText: string
    actionLink: string
}

export default function ActionCardsScrollable({ title, items = actionItems }: { title?: string, items?: CardItem[] }) {
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <section className="w-full p-4">
            <div className="flex justify-between items-center mb-4">
                <TypographyH4>{title}</TypographyH4>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div
                ref={containerRef}
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory pr-4"
                onScroll={checkScroll}
            >
                {items.map((item, index) => (
                    <Card key={index} className="min-w-[16rem] flex-shrink-0 snap-start">
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-semibold">{item.value}</p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant={item.actionType === 'primary' ? 'default' : 'secondary'}
                                className="w-full"
                                asChild
                            >
                                <a href={item.actionLink}>{item.actionText}</a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}