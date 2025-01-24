import { Breadcrumbs } from "@/components/landing/common/Breadcrumb";
import CustomTab from "@/components/landing/common/custom-tab";
import Amenities from "@/components/landing/properties/details/amenities";
import Configurations from "@/components/landing/properties/details/configurations";
import GalleryView from "@/components/landing/properties/details/gallery-view";
import GeneralDescription from "@/components/landing/properties/details/general-description";
import MakeOffer from "@/components/landing/properties/details/make-offer";
import Overview from "@/components/landing/properties/details/overview";
import PropertyLocation from "@/components/landing/properties/details/property-location";

const breadcrum = [
    { href: "/", label: "Home" },
    { href: "/", label: "Blogs" },
    { label: "Blog Details" },
  ]
  
  const tab = [{
    name:'General',
    id:'general'
    },{
        name:'Configurations',
        id:'configurations'
    },{
        name:'Overview',
        id:'overview'
    },{
        name:'Amenities',
        id:'amenities'
    },{
        name:'Location',
        id:'location'
    }];

const PropertiesDetails = () => {
    return (
        <>
            <div className="container">
                <Breadcrumbs breadcrum = {breadcrum}/>
                <GalleryView/>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <CustomTab tab = {tab} className = "justify-between"/>
                        <GeneralDescription/>
                        <Configurations/>
                        <Overview/>
                        <Amenities/>
                    </div>
                    <div className="col-span-4">
                        <MakeOffer/>
                    </div>
                </div>
                <PropertyLocation/>
            </div>
        </>
    );
}

export default PropertiesDetails;