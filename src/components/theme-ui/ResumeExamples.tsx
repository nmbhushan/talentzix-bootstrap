import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import Spiral from '@/assets/Spiral.png'; // Adjust the path based on where Spiral.png is located
import { FaBriefcase, FaLaptop, FaCreativeCommons, FaRegBuilding } from 'react-icons/fa';
import { MdEngineering, MdOutlineHealthAndSafety } from 'react-icons/md';
import { BiBook, BiSupport } from 'react-icons/bi';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { RiShieldStarLine } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';

const ResumeExamples = () => {
  const categories = [
    { title: 'Accounting & Finance', Icon: FaBriefcase },
    { title: 'Business', Icon: FaRegBuilding },
    { title: 'Computer & Software', Icon: FaLaptop },
    { title: 'Creative', Icon: FaCreativeCommons },
    { title: 'Customer Service', Icon: AiOutlineCustomerService },
    { title: 'Education', Icon: BiBook },
    { title: 'Engineering', Icon: MdEngineering },
    { title: 'Healthcare & Medical', Icon: MdOutlineHealthAndSafety },
    { title: 'Hospitality', Icon: BiSupport },
    { title: 'Legal', Icon: FaBriefcase },
    { title: 'Maintenance & Repair', Icon: MdEngineering },
    { title: 'Management', Icon: FaRegBuilding },
    { title: 'Marketing & PR', Icon: FaCreativeCommons },
    { title: 'Other', Icon: AiOutlineCustomerService },
    { title: 'Retail & Sales', Icon: BiBook },
    { title: 'Security & Protective Service', Icon: RiShieldStarLine },
    { title: 'Student', Icon: HiOutlineUserGroup },
    { title: 'Transport & Logistics', Icon: BiSupport },
  ];

  return (
    <div className="relative flex items-center justify-center px-4 pt-12">
      {/* Main Container */}
      <div className="container relative z-10 bg-[#F7F9FC] rounded-[20px] px-6 md:px-10 py-14">
        {/* Spiral Decoration Inside the Container */}
        <div className="absolute top-2 right-6 md:top-3 md:right-10">
          <Image
            src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/spiral.webp"
            alt="Spiral Decoration"
            width={95}
            height={88}
            className="opacity-70"
          />
        </div>

        <h2 className="text-[24px] text-center mb-10 capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold mx-auto">
          Look At Resume Examples For Inspiration
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-x-2 gap-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-[#1A91F0] bg-[#F1F2FF] rounded-[50%] flex items-center justify-center w-[25px] h-[25px] md:w-[35px] md:h-[35px]">
                <category.Icon className="text-[#1A91F0] w-[15px] h-[15px] md:w-[19px] md:h-[19px]" />
              </div>
              <span className="text-[12px] md:text-[15px] text-[#17012C] rounded-[24px] font-normal">{category.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeExamples;
