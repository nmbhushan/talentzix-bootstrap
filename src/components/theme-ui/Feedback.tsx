import React, { useRef } from "react";
import Link from 'next/link';
import chooseUsImage from '@/assets/Choose.png';
import  Cofounder from  '@/assets/Cofounder.png';
import phone_icon from '@/assets/phone_icon.png';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LeftArrow from "@/assets/Left.png"; // Import Left arrow image
import RightArrow from "@/assets/Right.png"; // Import Right arrow image
import { Star } from 'lucide-react';

const feedbackData = [
  {
    title: "Effortless online resume builder",
    description: '"Craft an amazing resume in minutes, directly in your browser."',
  },
  {
    title: "Automatic spell-checker",
    description:
      '"Our built-in spell checker ensures your resume is free of typos and errors."',
  },
  {
    title: "Your data is safe with us",
    description: '"Your data is kept private and secured with 256-bit encryption."',
  },
  {
    title: "Multi-format resume options",
    description: '"Save your resume in Word or PDF with one click."',
  },
  {
    title: "AI-generated phrases",
    description: '"Leverage AI to select pre-generated phrases and keywords."',
  },
  {
    title: "Auto summary generator",
    description:
      '"Create a powerful summary or cover letter with one click. Try it today!"',
  },
];

const Feedback: React.FC = () => {
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
    <div className="py-12 relative bg-feedback-bg bg-cover bg-no-repeat overflow-x-hidden">
        <div className="container overflow-x-hidden max-w-[400px] md:max-w-[100%] grid-cols-3 flex flex-col md:flex-row items-center justify-around px-6">
          <div className="grid-cols-3 md:grid-cols-1">
              <Image
                src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/feedback-girl.webp"
                width="409"
                height="451"
                alt="Choose Us"
                className="hidden md:block w-24 md:w-auto h-80 mt-8 md:mt-0"
              />
          </div>
          <div className="grid-cols-3 md:grid-cols-2">
              <div className="relative">
              <div className="relative text-center md:text-start">
                <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
                    Testimonials
                </p>
                <h2 className="text-[24px] mb-4 capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold mx-auto md:mx-0">people say about us</h2>

                {/* Arrows Positioned on the Right */}
              <div className="relative md:absolute top-1/2 right-0 transform -translate-y-1/2 flex space-x-4 flex justify-center mt-0 pt-4">
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
      <div className="relative sm:max-w-[400px] md:max-w-[600px] empower mt-1 md:mt-8">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-hidden scrollbar-hide scroll-smooth"
        >
          {feedbackData.map((feedback, index) => (
            <Card
              key={index}
              className="empower-card min-w-[192px] max-w-[192px] h-[192px] flex-shrink-0 rounded-[21px] bg-[#FFFFFF] transition-all duration-300"
            >
              <CardHeader className="p-4 bg-empower-bg bg-contain bg-right bg-no-repeat">
                <CardTitle className="flex items-center justify-between font-bold text-[#635AD9]">
                  {/* <div className="w-[57px] h-[57px] empower-image bg-contain mb-3 flex items-center justify-center">
                    <Image src={feedback.image} alt="Empower" width={24} height={24} />
                  </div>
                  {feedback.title} */}
                  <div className="flex items-center ">
                      <Star className="h-[15px] w-auto"/>
                      <Star className="h-[15px] w-auto"/>
                      <Star className="h-[15px] w-auto"/>
                      <Star className="h-[15px] w-auto"/>
                      <Star className="h-[15px] w-auto"/>
                  </div>
                  <Image src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/quote.webp" alt="Empower" width={20} height={20} />
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 leading-tight font-medium text-[11px] text-[#504E4E]">
                {feedback.description}
                <div className="flex items-center mt-3">
                    <Image
                      src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/dummy.webp"
                      width="40"
                      height="40"
                      alt="Co-founder"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="text-[#17012C] text-[12px] font-semibold">Kristin Watson</p>
                      <p className="text-[#504E4E] text-[10px]">Web Designer</p>
                    </div>
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
        </div>
        </div>
  );
};

export default Feedback;
