import { BreadcrumbResponsive } from "@/components/landing/common/custom-ui/Breadcrumb";
import HeadingOne from "@/components/landing/common/custom-ui/HeadingOne";
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
    { label: "Resume Templates" },
]
export const metadata: Metadata = {
    title: 'Resume Templates - Talentzix ',
    description: 'Resume Templates - Talentzix'
};

const PropertiesListing = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs breadcrum={breadcrum} />
                
                <div className="flex justify-between space-y-3 mt-3">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Resume Templates</h3>
                    </div>
                    <div className="flex space-x-3 items-start">
                    </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
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