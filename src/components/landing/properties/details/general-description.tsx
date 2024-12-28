"use client";
import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const GeneralDescription = () => {

    return (
        <section id="general">
            <p className="mb-3 mt-6 text-[#B9B9B9] font-semibold">General Description</p>
            <Card className='p-6'>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <p className='text-[#808080] text-sm '>Price:</p>
                        <p className='text-black text-[16px] my-2 font-bold'>100,000</p>
                        <p className='text-[#A8A8A8] text-sm '>Per month</p>
                    </div>
                    <div>
                        <p className='text-[#808080] text-sm '>Area:</p>
                        <p className='text-black text-[16px] my-2 font-bold'>1,400 sq.ft</p>
                        <p className='text-[#A8A8A8] text-sm '>71.42 per cent</p>
                    </div>
                    <div>
                        <p className='text-[#808080] text-sm '>Rooms</p>
                        <p className='text-black text-[16px] my-2 font-bold'>3-4</p>
                        <p className='text-[#A8A8A8] text-sm '>2 Bathrooms</p>
                    </div>
                    <div>
                        <p className='text-[#808080] text-sm '>Floor:</p>
                        <p className='text-black text-[16px] my-2 font-bold'>12</p>
                        <p className='text-[#A8A8A8] text-sm '>(20 floor building)</p>
                    </div>
                    <div className='col-span-4'>
                        <p className='text-black text-[14px] font-semibold mb-2'>Modern loft homes in the heart of Realcube!  </p>
                        <p className='text-[#A8A8A8] text-sm '>Apartment features: culinary art stainless steel appliances, sleek cabinets and black granite countertops, Lots of closet, cable ready Year-round climate control</p>
                    </div>
                </div>
            </Card>
        </section>
    );
}

export default GeneralDescription;