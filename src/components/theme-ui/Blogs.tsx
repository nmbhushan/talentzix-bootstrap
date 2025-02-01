import React, { useRef } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LeftArrow from "@/assets/Left.png"; // Import Left arrow image
import RightArrow from "@/assets/Right.png"; // Import Right arrow image
import { MoveRight } from 'lucide-react';

const servicesData = [
  {
    title: "Resume Builder using AI - New market trends",
    image: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/blog-banner-1.webp",
    description: '"Craft an amazing resume in minutes, directly in your browser."',
  },
  {
    title: "Resume Builder using AI - New market trends",
    image: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/blog-banner-2.webp",
    description:
      '"Our built-in spell checker ensures your resume is free of typos and errors."',
  },
  {
    title: "Resume Builder using AI - New market trends",
    image: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/blog-banner-3.webp",
    description: '"Your data is kept private and secured with 256-bit encryption."',
  },
  {
    title: "Resume Builder using AI - New market trends",
    image: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/blog-banner-1.webp",
    description: '"Save your resume in Word or PDF with one click."',
  },
  {
    title: "Resume Builder using AI - New market trends",
    image: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/blog-banner-2.webp",
    description: '"Leverage AI to select pre-generated phrases and keywords."',
  },
  {
    title: "Resume Builder using AI - New market trends",
    image: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/blog-banner-3.webp",
    description:
      '"Create a powerful summary or cover letter with one click. Try it today!"',
  },
];

const Blogs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? scrollRef.current.scrollLeft - 300
          : scrollRef.current.scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container bg-white py-6 md:py-12">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto relative">
        <div className="flex items-center justify-between mt-0">
          <div className="max-w-[600px] lg:max-w-[710px]">
              <h2 className="text-[24px] md:text-[35px] capitalize leading-tight text-[#17012C] font-semibold mb-3">
                Blogs
              </h2>
              <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          {/* Arrows Positioned on the Right */}
          <div className="absolute top-1/2 right-0 transform -translate-y-[62px] sm:-translate-y-[40px] md:-translate-y-1/2 flex space-x-4">
            <button
              className="flex items-center justify-center"
              onClick={() => handleScroll("left")}
            >
              <Image src={LeftArrow} alt="Left Arrow" width={44} height={44} />
            </button>
            <button
              className="flex items-center justify-center"
              onClick={() => handleScroll("right")}
            >
              <Image src={RightArrow} alt="Right Arrow" width={44} height={44} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative empower max-w-[1200px] mx-auto mt-8">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scrollbar-hide scroll-smooth"
        >
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="empower-card min-w-[255px] md:min-w-[375px] max-w-[255px] md:max-w-[375px] h-[418px] flex-shrink-0 rounded-[12px] bg-[#E8F2FF] transition-all duration-300"
            >
              <CardHeader className="p-4 bg-empower-bg bg-contain bg-right bg-no-repeat">
                <CardTitle className="text-[16px] font-semibold text-[#000000]">
                  <div className="w-full h-[248px] bg-contain mb-3 flex items-center justify-center">
                    <Image src={service.image} className="rounded-[12px] mx-auto" alt="Empower" width={327} height={248} />
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 leading-tight text-[16px] text-[#474747]">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
