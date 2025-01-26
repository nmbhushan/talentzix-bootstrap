import React, { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
const TemplateData=[
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-1.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-2.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-3.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-4.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-1.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-2.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-3.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-4.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-1.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-2.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-3.webp',
},
{
    url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-4.webp',
},
]

export default function AllTab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-6">
      {TemplateData.map((item, index: any) => (
          <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 group overflow-hidden relative">
            <div className="absolute inset-0 bg-black bg-opacity-50  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image src={item.url} width="281" height="400" alt="Image" className="border border-[#E4E4E4] rounded max-h-[400px] h-full mx-auto" />
            <Button className="hidden group-hover:block rounded-[70px] px-5 absolute top-[80%] z-10 left-0 right-0 mx-auto w-auto max-w-[137px]">Use Template</Button>
          </div>
      ))}
    </div>
  );
}
