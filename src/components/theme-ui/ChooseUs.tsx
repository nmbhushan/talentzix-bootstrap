
import React from 'react';
import chooseUsImage from '@/assets/Choose.png';
import  Cofounder from  '@/assets/Cofounder.png';
import phone_icon from '@/assets/phone_icon.png';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around px-6 py-12 bg-white">
      {/* Left Content */}
      <div className="max-w-lg">
        <h4 className="text-sm font-semibold text-blue-500 uppercase mb-2">Why Choose Us</h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex items-center gap-4 mb-6">
          {/* Profile Section */}
          <div className="flex items-center">
            <Image
              src={Cofounder}
              alt="Co-founder"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">Co-Founder</p>
            </div>
          </div>

          {/* Call Section */}
          <div className="flex items-center">
            <Image
              src={phone_icon}
              alt="Call Us Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Call Us Now</p>
              <p className="text-sm text-blue-500">+208-555-0112</p>
            </div>
          </div>
        </div>
        <button className="px-8 py-3 bg-[#635ad9] text-white font-semibold rounded-full shadow-md hover:bg-[#514bb5] focus:outline-none focus:ring-2 focus:ring-[#635ad9] focus:ring-opacity-50">
          KNOW MORE
        </button>
      </div>

      {/* Right Image */}
      <Image
  src={chooseUsImage}
  alt="Choose Us"
  className="hidden md:block w-24 md:w-auto h-80 mt-8 md:mt-0"
/>
    </div>
  );
};

export default WhyChooseUs;
