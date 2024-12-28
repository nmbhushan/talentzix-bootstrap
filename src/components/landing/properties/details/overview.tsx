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
  

const Overview = () => {

    return (
        <section id="configurations">
            <p className="mb-3 mt-6 text-[#B9B9B9] font-semibold">Overview</p>
            <Card>
                <CardContent className='pt-6 space-y-5'>
                    <div>
                        <p className='text-black text-[14px] font-semibold mb-3'>About this space</p>
                        <p className='text-[#A8A8A8] text-sm '>Located just few steps away the surfing beach Matara. Love Birds Hotel has 04 standard Rooms with amazing se view. The beach area is still very quiet and tidy enough to spend whole day on it. </p>
                    </div>
                    <div>
                        <p className='text-black text-sm font-semibold mb-2'>The space </p>
                        <p className='text-[#A8A8A8] text-sm '>Love Birds hotel is most popular place for surf lovers. Amazing beach and ocean view to all rooms. </p>
                    </div>
                    <div>
                        <p className='text-black text-sm font-semibold mb-2'>Guest access </p>
                        <p className='text-[#A8A8A8] text-sm '>You can enjoy sea breeze on the garden and milky waves in few steps away.</p>
                    </div>
                </CardContent>
            </Card>
            
        </section>
    );
}

export default Overview;