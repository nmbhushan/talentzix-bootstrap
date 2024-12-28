'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

let interval: any

type Card = {
    id: number
    name: string
    designation: string
    content: React.ReactNode
}

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[]
    offset?: number
    scaleFactor?: number
}) => {
    const CARD_OFFSET = offset || 10
    const SCALE_FACTOR = scaleFactor || 0.06
    const [cards, setCards] = useState<Card[]>(items)

    useEffect(() => {
        startFlipping()

        return () => clearInterval(interval)
    }, [])

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]
                newArray.unshift(newArray.pop()!)
                return newArray
            })
        }, 5000)
    }

    return (
        <div className="relative h-full w-full flex items-center justify-center">
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    className="absolute w-full max-w-2xl h-60 md:h-80 rounded-3xl p-4 shadow-lg flex flex-col justify-between bg-card text-foreground border border-muted shadow-muted/10 dark:shadow-muted/5"
                    style={{ transformOrigin: 'top center' }}
                    animate={{
                        top: index * -CARD_OFFSET,
                        scale: 1 - index * SCALE_FACTOR,
                        zIndex: cards.length - index,
                    }}
                >
                    <div className="font-normal text-muted-foreground">
                        {card.content}
                    </div>
                    <div>
                        <p className="text-foreground font-medium">
                            {card.name}
                        </p>
                        <p className="text-muted-foreground font-normal">
                            {card.designation}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
