import { BreadcrumbResponsive } from "@/components/landing/common/custom-ui/Breadcrumb";
import HeadingOne from "@/components/landing/common/custom-ui/HeadingOne";
import PropertyFilter from "@/components/landing/properties-listing/PropertyFilter";
import { Button } from "@/components/ui/button"
import { FaList, FaMapMarkedAlt } from "react-icons/fa";
import { Metadata } from 'next';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FaBuilding } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import PropertiesCard from "@/components/landing/common/custom-ui/cards/card-layouts/PropertiesCard";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { PropertyCardData } from "@/config/imageConfig";
import { Breadcrumbs } from "@/components/landing/common/Breadcrumb";

const breadcrum = [
    { href: "/", label: "Home" },
    { label: "Blogs" },
]
export const metadata: Metadata = {
    title: 'buy/rent residential and commercial properties',
    description: 'RealCube offer villas, apartments, and townhouses for residential purposes, we also have a commercial space for buying and rent at the prime location of the city.'
};

const PropertiesListing = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs breadcrum={breadcrum} />
                <PropertyFilter />
                <div className="flex justify-between space-y-3 mt-3">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Blogs</h3>
                    </div>
                    <div className="flex space-x-3 items-start">
                        <Select>
                            <SelectTrigger className="w-[180px] h-9">
                                <SelectValue placeholder="Sort by newest" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                                <SelectItem value="size-low-high">Size: Low to High</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex space-x-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className="inline-flex justify-between items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-3 py-2 min-h-[36px] leading-none rounded-lg border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                                        <IoGrid className="h-4 w-4" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Grid View</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className="inline-flex justify-between items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-3 py-2 min-h-[36px] leading-none rounded-lg border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                                        <FaBuilding className="h-4 w-4" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Floor Plan View</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger className="inline-flex justify-between items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-3 py-2 min-h-[36px] leading-none rounded-lg border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                                        <FaMapMarkedAlt className="h-4 w-4" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Map View</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    {PropertyCardData.map((item, index: any) => (
                        <div key={index} className="card">
                            <PropertiesCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PropertiesListing;