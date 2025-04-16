import React, { useRef } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LeftArrow from "@/assets/Left.png"; // Import Left arrow image
import RightArrow from "@/assets/Right.png"; // Import Right arrow image
import { MoveRight } from 'lucide-react';

const servicesData = [
  {
    title: "Effortless online resume builder",
    image: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/empower-1.webp",
    description: '"Craft an amazing resume in minutes, directly in your browser."',
  },
  {
    title: "Automatic spell-checker",
    image: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/empower-2.webp",
    description:
      '"Our built-in spell checker ensures your resume is free of typos and errors."',
  },
  {
    title: "Your data is safe with us",
    image: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/empower-3.webp",
    description: '"Your data is kept private and secured with 256-bit encryption."',
  },
  {
    title: "Multi-format resume options",
    image: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/empower-4.webp",
    description: '"Save your resume in Word or PDF with one click."',
  },
  {
    title: "AI-generated phrases",
    image: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/empower-4.webp",
    description: '"Leverage AI to select pre-generated phrases and keywords."',
  },
  {
    title: "Auto summary generator",
    image: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/empower-4.webp",
    description:
      '"Create a powerful summary or cover letter with one click. Try it today!"',
  },
];

const Services: React.FC = () => {
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
    <div className="container bg-background py-12">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto relative">
        <h3 className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
          Our Best Services
        </h3>
        <div className="flex items-center justify-between mt-0">
          <h2 className="text-[24px] md:text-[35px] capitalize max-w-[610px] leading-tight text-foreground font-semibold">
            Empowering you to achieve your career goals
          </h2>
          {/* Arrows Positioned on the Right */}
          <div className="absolute top-1/2 right-0 transform translate-y-[20px] md:-translate-y-1/2 flex space-x-4">
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
              className="empower-card min-w-[192px] max-w-[192px] h-[250px] flex-shrink-0 rounded-[21px] bg-[#E8F2FF] transition-all duration-300"
            >
              <CardHeader className="p-4 bg-empower-bg bg-contain bg-right bg-no-repeat">
                <CardTitle className="text-[14px] font-bold text-[#17012C]">
                  <div className="w-[57px] h-[57px] empower-image bg-contain mb-3 flex items-center justify-center">
                    <Image src={service.image} alt="Empower" width={24} height={24} />
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 leading-tight text-[11px] text-[#504E4E]">
                {service.description}
                <Link href="" className="flex items-center mt-3 leading-tight font-semibold capitalize text-[11px] text-[#504E4E]">Read More <MoveRight className="ms-1 w-[15px]"/></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
