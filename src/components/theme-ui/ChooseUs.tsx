
import React from 'react';
import chooseUsImage from '@/assets/Choose.png';
import  Cofounder from  '@/assets/Cofounder.png';
import phone_icon from '@/assets/phone_icon.png';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-around px-6 py-12 bg-white">
      {/* Left Content */}
      <div className="max-w-lg">
        <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
            Why Choose Us
        </p>
        <h2 className="text-[24px] mb-4 capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold mx-auto">Why Choose Us</h2>
        <p className="text-[#504E4E] text-[12px] mb-4">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex items-center gap-4 mb-6 border-y border-[#EAF3F8] py-5">
          {/* Profile Section */}
          <div className="flex items-center">
            <Image
              src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/dummy.webp"
              width="40"
              height="40"
              alt="Co-founder"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-[#17012C] text-[12px] font-medium">Jonna Merlin</p>
              <p className="text-[#504E4E] text-[10px]">Co-Founder</p>
            </div>
          </div>

          {/* Call Section */}
          <div className="flex items-center">
            <Image
              src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/phone-icon.webp"
              width="40"
              height="40"
              alt="Call Us Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-[#504E4E] text-[12px] font-semibold">Call Us Now</p>
              <p className="text-[#17012C] text-[12px] font-semibold">+208-555-0112</p>
            </div>
          </div>
        </div>
        <button className="h-[36px] uppercase bg-[#635AD9] hover:bg-[#219be4] text-white rounded-[71px] font-bold text-[11px] text-center px-5">
          KNOW MORE
        </button>
      </div>

      {/* Right Image */}
      <Image
  src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/choose-right.webp"
  width="496"
  height="384"
  alt="Choose Us"
  className="hidden md:block w-24 md:w-auto h-80 mt-8 md:mt-0"
/>
    </div>
  );
};

export default WhyChooseUs;
