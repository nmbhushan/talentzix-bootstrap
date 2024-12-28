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
import { Button } from '@/components/ui/button';
import Image from 'next/image';
  

const Configurations = () => {

    return (
        <section id="configurations">
            <p className="mb-3 mt-6 text-[#B9B9B9] font-semibold">Configurations and Floor plan</p>
            <Card>
                <CardHeader className='border-b'>
                    <div className='flex space-x-3'>
                        <Button>3 beds 2 baths</Button>
                        <Button variant="secondary">4 beds 2 baths</Button>
                    </div>
                </CardHeader>
                <CardContent className='pt-6'>
                    <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-4 space-y-6'>
                            <div>
                                <p className='text-[#808080] text-sm '>Posesion:</p>
                                <p className='text-black text-[14px] my-2 font-semibold'>May, 2020</p>
                            </div>
                            <div>
                                <p className='text-[#808080] text-sm '>Construction Area:</p>
                                <p className='text-black text-[14px] my-2 font-semibold'>1400 sq.ft</p>
                            </div>
                            <div>
                                <p className='text-[#808080] text-sm '>Base Price:</p>
                                <p className='text-black text-[14px] my-2 font-semibold'>AED 100,000</p>
                            </div>
                        </div>
                        <div className='col-span-8'>
                           <Image src='https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/4.jpg' alt='floorpanal' className='w-full h-auto' width={200} height={200}/>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
        </section>
    );
}

export default Configurations;