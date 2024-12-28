import { PropertyCardData } from "@/config/imageConfig";
import CommonCard from "../common/custom-ui/Card";
import HeadingOne from "../common/custom-ui/HeadingOne";
import TabsLayout from "../common/custom-ui/Tabs";
import ViewMore from "../common/custom-ui/ViewMore";
import PropertiesCard from "../common/custom-ui/cards/card-layouts/PropertiesCard";

const PopularProperties = () => { 
    const tabItems = [
        {
            title: "For Sale - Residential",
            content: (
                <>
                    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {PropertyCardData.map((item, index: any) => (
                            <div key={index} className="card">
                                <PropertiesCard item={item} />
                            </div>
                        ))}
                    </div>
                </>
            )
        },
        {
            title: "To Rent - Residential",
            content: ''
        },
        {
            title: "For Sale - Commercial",
            content: ''
        },
        {
            title: "To Rent - Commercial",
            content: ''
        },
    ];
    return (
        <>
            <section className="py-10">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <HeadingOne title="Our Popular Properties" />
                        <ViewMore url="" buttonText='Explore All' />
                    </div>
                    <div className="mt-6">
                        <TabsLayout tabs={tabItems} layout="layout1" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default PopularProperties;