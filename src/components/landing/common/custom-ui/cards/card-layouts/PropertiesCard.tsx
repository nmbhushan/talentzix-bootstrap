"use client"
import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { IoIosBed, IoIosResize } from "react-icons/io"
import { FaBath } from "react-icons/fa6"
import { FaParking } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import Image from "next/image"
import { TbPhoneCall } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { siteConfig } from "@/config/siteConfig"
import { Heart, HeartOff } from "lucide-react"
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function PropertiesCard({ item }: any) {
    const [likedItems, setLikedItems] = React.useState<{ [key: number]: boolean }>({})

    // Toggle the liked state for a specific card
    const toggleLike = (id: number) => {
        setLikedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id]  // Toggle the liked state for the card with the given ID
        }))
    }
    return (
        <Card className="text-primary overflow-hidden rounded-lg shadow-md">
            <CardContent className='p-0 relative'>
                <Link href={item.propertyUrl}>
                    <Image src={item.propertyImg} width={400} height={600} alt="property" className="object-cover w-full min-h-[200px] md:min-h-[300px]" />
                </Link>
            </CardContent>
        </Card >
    )
}

export default PropertiesCard;