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
      <div className="relative z-10 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 max-w-5xl w-full">
        {/* Spiral Decoration Inside the Container */}
        <div className="absolute top-2 right-6 md:top-3 md:right-10">
          <Image
            src={Spiral}
            alt="Spiral Decoration"
            width={80}
            height={80}
            className="opacity-70"
          />
        </div>

        <h1 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Look At Resume Examples For Inspiration
        </h1>
        <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-full bg-gray-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <category.Icon className="text-blue-500 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm font-normal text-gray-700">{category.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeExamples;
