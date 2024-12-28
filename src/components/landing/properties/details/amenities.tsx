"use client";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

  import { imageConfig } from "@/config/imageConfig";

import Image from "next/image";

const Amenities = () => {

    const amenitie = [
        {
            id:1,
            name:'Gym and Swimming Pool',
            icon: imageConfig.properties.swimmingPool
        },
        {
            id:2,
            name:'Close proximity to retail and restaurants',
            icon: imageConfig.properties.closeProx
        },
        {
            id:3,
            name:'Concierge',
            icon: imageConfig.properties.concierge
        },
        {
            id:4,
            name:'Central AC',
            icon: imageConfig.properties.centralAC
        },
        {
            id:5,
            name:'Private Parking',
            icon: imageConfig.properties.parking
        },
        {
            id:6,
            name:'Built in Wardrobes',
            icon: imageConfig.properties.builtIn
        },
        {
            id:7,
            name:'Pets Allowed',
            icon: imageConfig.properties.pets
        },
        {
            id:8,
            name:'Maids room (only for 3 and 4 bedrooms)',
            icon: imageConfig.properties.maidsRoom
        },
    ]

    return (
        <section id="amenities">
            <p className="mb-3 mt-6 text-[#B9B9B9] font-semibold">Amenities</p>
            <Card>
                <CardContent className='pt-6'>
                    <div className="grid grid-cols-4 gap-3">
                        {amenitie.map((item:any, index:number) => (
                            <div key={index} className="bg-[#f7f7f7] text-center p-4 text-xs h-full rounded-lg">
                                <Image src={item.icon} alt="SwimmingPool" width={50} height={50} className="m-auto h-auto mb-2"/>
                                {item.name}
                            </div>
                        ))}
                           
                    </div>
                </CardContent>
            </Card>
            
        </section>
    );
}

export default Amenities;