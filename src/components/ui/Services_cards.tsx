import React, { useRef } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LeftArrow from "@/assets/Left.png"; // Import Left arrow image
import RightArrow from "@/assets/Right.png"; // Import Right arrow image

const servicesData = [
  {
    title: "Effortless online resume builder",
    description: "Craft an amazing resume in minutes, directly in your browser.",
  },
  {
    title: "Automatic spell-checker",
    description:
      "Our built-in spell checker ensures your resume is free of typos and errors.",
  },
  {
    title: "Your data is safe with us",
    description: "Your data is kept private and secured with 256-bit encryption.",
  },
  {
    title: "Multi-format resume options",
    description: "Save your resume in Word or PDF with one click.",
  },
  {
    title: "AI-generated phrases",
    description: "Leverage AI to select pre-generated phrases and keywords.",
  },
  {
    title: "Auto summary generator",
    description:
      "Create a powerful summary or cover letter with one click. Try it today!",
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
    <div className="bg-white py-12">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto relative">
        <h3 className="text-blue-500 text-lg font-medium uppercase tracking-wide">
          Our Best Services
        </h3>
        <div className="flex items-center justify-between mt-4">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Empowering you to achieve your <br />
            career goals
          </h2>
          {/* Arrows Positioned on the Right */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex space-x-4">
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
      <div className="relative max-w-[1200px] mx-auto mt-8">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="min-w-[240px] max-w-[240px] h-[280px] flex-shrink-0 shadow-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
            >
              <CardHeader className="p-4">
                <CardTitle className="text-base font-bold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm text-gray-600">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
