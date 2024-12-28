"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import { IoIosInformationCircleOutline } from "react-icons/io";


const MakeOffer = () => {

    return (
        <Card className="mt-4 sticky top-[90px]">
            <CardContent className='p-3'>
                <div className="bg-[#FAFAFA] p-4 rounded-lg mb-4">
                    <p className="font-bold text-[22px] text-black mb-4">AED 85,000 / Year</p>
                    <div className="flex space-x-4">
                        <Button className="w-1/2">Make an offer</Button>
                        <Button variant="outline" className="w-1/2">Schedule a Visit</Button>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] p-4 rounded-lg text-[16px] space-y-4">
                    <p className="font-semibold text-[#252525] flex items-center"><IoIosInformationCircleOutline className="me-2 text-2xl"/> Need to Know</p>
                    <hr/>
                    <p><span className="text-black font-semibold">Duration</span> : <span>12 month</span></p>
                    <hr/>
                    <p><span className="text-black font-semibold">Pricing</span> : <span>AED 7,000</span> <span className="text-xs">per year</span></p>
                    <hr/>
                    <div>
                        <p className="text-black font-semibold mb-2">Description</p>
                        <p className="text-[14px]">You will have after hours access and can choose your own timing to enter into the office. Despitebeing a shared office you will have keys to lock your office and a FOB to enter any time.</p>
                    </div>
                    <hr/>
                    <p><span className="text-black font-semibold">Monday - Friday</span> : <span>9:00am - 6:00pm</span></p>
                </div>
            </CardContent>
        </Card>
    );
}

export default MakeOffer;