"use client";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"


const PropertyLocation = () => {

    return (
        <section id="location">
            <p className="mb-3 mt-6 text-[#B9B9B9] font-semibold">Property Location</p>
            <Card>
                <CardContent className='pt-6'>
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-4 space-y-4">
                            <div>
                                <p className="text-[#A8A8A8] text-sm font-semibold mb-2">Location</p>
                                <p className="text-black text-xs">4321 Calle Harold, Urb.<br/>
                                Herrera, Santo Domingo, DN</p>
                            </div>
                            <div>
                                <p className="text-[#A8A8A8] text-sm font-semibold mb-2">Neiborhoods</p>
                                <p className="text-black text-xs">Hatta</p>
                            </div>
                        </div>
                        <div className="col-span-8">
                        
                        </div>
                    </div>
                </CardContent>
            </Card>
            
        </section>
    );
}

export default PropertyLocation;