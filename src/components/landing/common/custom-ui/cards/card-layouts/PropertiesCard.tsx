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
            <CardHeader className='p-0 relative'>
                <Link href={item.propertyUrl}>
                    <Image src={item.propertyImg} width={800} height={800} alt="property" className="object-cover w-full min-h-[200px] md:min-h-[300px]" />
                </Link>
                <div className="absolute top-0 right-3">
                    <Button
                        onClick={() => toggleLike(item.id)}
                        variant="outline"
                        className="group w-9 h-8 p-1 mt-2 flex items-center gap-2"
                        aria-label={likedItems[item.id] ? "Unlike" : "Like"}
                    >
                        {likedItems[item.id] ? (
                            <FaHeart className="text-primary-500" />
                        ) : <FaRegHeart className="w-9 h-9" />}

                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-4 text-sm">
                <CardTitle className="text-base font-medium mb-2 overflow-hidden text-ellipsis whitespace-nowrap"><Link href={item.propertyUrl}>{item.propertyTitle}</Link></CardTitle>
                <div className="text-primary">
                    <ul className="flex flex-wrap items-start gap-2 mb-4">
                        <li className="flex items-center bg-[#F8F8F8] px-2 py-1 rounded-sm min-w-[50px]"> <Image src="/images/landing/bed.svg" alt="Beds" width={20} height={20} className="me-2 " />{item.propertyBed}  </li>
                        <li className="flex items-center bg-[#F8F8F8] px-2 py-1 rounded-sm min-w-[50px]"> <Image src="/images/landing/baths.svg" alt="Baths" width={20} height={20} className="me-2" />{item.propertyBath} </li>
                        <li className="flex items-center bg-[#F8F8F8] px-2 py-1 rounded-sm min-w-[50px]"> <Image src="/images/landing/sqft.svg" alt="Sqft" width={20} height={20} className="me-2" />{item.propertySqft} </li>
                        <li className="flex items-center bg-[#F8F8F8] px-2 py-1 rounded-sm min-w-[50px]"> <Image src="/images/landing/parking.svg" alt="Parking" width={20} height={20} className="me-2" />{item.propertyParking}</li>
                    </ul>
                    <div className="flex items-center my-2 mb-0">
                        <SlLocationPin className="me-1 w-5 h-5" /><span className="me-1">{item.propertyPlat}</span>|<p className="ms-1 overflow-hidden text-ellipsis whitespace-nowrap">{item.propertyResidency} | {item.propertyLocation}</p>
                    </div>

                </div>
            </CardContent>
            <hr />
            <CardFooter className="flex justify-between p-4">
                <p className="text-base font-semibold"><span className="block text-sm font-normal">AED</span> {item.propertyPrice}</p>
                <div className="flex space-x-3 justify-between">
                    <Link href={`tel:${siteConfig.contact.phone}`} className={buttonVariants({ variant: "outline", size: 'icon' })}>
                        <TbPhoneCall />
                    </Link>
                    <Link href={`tel:${siteConfig.contact.email}`} className={buttonVariants({ variant: "outline", size: 'icon' })}>
                        <GoMail />
                    </Link>
                </div>
            </CardFooter>
        </Card >
    )
}

export default PropertiesCard;