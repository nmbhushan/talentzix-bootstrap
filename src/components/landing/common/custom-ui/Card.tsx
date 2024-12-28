import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Image from "next/image"
import { SlLocationPin } from "react-icons/sl";
import { IoIosBed, IoIosResize } from "react-icons/io";
import { FaParking, FaBath } from "react-icons/fa";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from 'next/link'
const CommonCard = ({ layout, item }: any) => {
    return (
        <>
            {
                layout === "layout1" ? (
                    <Card className="text-primary overflow-hidden rounded-lg shadow-md">
                        <CardHeader className='p-0'>
                            <Link href={item.propertyUrl}>
                                <Image src={item.propertyImg} width={800} height={800} alt="property" className="object-cover w-full min-h-[200px] md:min-h-[320px]" />
                            </Link>
                        </CardHeader>
                        <CardContent className="p-5 text-sm">
                            <CardTitle className="text-base font-medium mb-2 overflow-hidden text-ellipsis whitespace-nowrap"><Link href={item.propertyUrl}>{item.propertyTitle}</Link></CardTitle>
                            <div className="text-primary">
                                <div className="flex items-center my-2">
                                    <SlLocationPin className="me-1" /><span className="me-1">{item.propertyPlat}</span>|<p className="ms-1 overflow-hidden text-ellipsis whitespace-nowrap">{item.propertyResidency} | {item.propertyLocation}</p>
                                </div>
                                <ul className="flex items-start gap-5 mb-5">
                                    <li className="flex items-center"> <IoIosBed className="me-2" />{item.propertyBed} </li>
                                    <li className="flex items-center"> <FaBath className="me-2" />{item.propertyBath} </li>
                                    <li className="flex items-center"> <IoIosResize className="me-2" />{item.propertySqft} </li>
                                    <li className="flex items-center"> <FaParking className="me-2" />{item.propertyParking} </li>
                                </ul>
                                <div className="flex flex-row items-center justify-between">
                                    <Link href={item.propertyUrl} className={buttonVariants({ variant: "default" })}>Book Now</Link>
                                    <span className="text-base font-semibold">AED {item.propertyPrice}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card >
                )
                    : layout === "layout2" ? (
                        <>
                            <Card>
                                <CardHeader className="pb-4">
                                    <CardTitle>
                                        <Image src={item.img} width={30} height={30} alt="property" className="object-cover" />
                                        <CardDescription className="text-base text-primary mt-5">{item.title}</CardDescription>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{item.description}</p>
                                </CardContent>
                            </Card>
                        </>
                    ) : ''
            }

        </>
    );
}

export default CommonCard;