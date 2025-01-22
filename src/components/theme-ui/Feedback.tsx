import React from 'react';
import chooseUsImage from '@/assets/Choose.png';
import  Cofounder from  '@/assets/Cofounder.png';
import phone_icon from '@/assets/phone_icon.png';
import Image from 'next/image';

const letter: Letter[] = [
    {
        id: '1',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/empower-4.webp',
        title: 'Easily edit online',
        desc: 'Creating the perfectly formatted, custom tailored resume has never been easier.',
    },
    {
        id: '2',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/empower-4.webp',
        title: 'Easily edit online',
        desc: 'Creating the perfectly formatted, custom tailored resume has never been easier.',
    },
    {
        id: '3',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/empower-4.webp',
        title: 'Easily edit online',
        desc: 'Creating the perfectly formatted, custom tailored resume has never been easier.',
    },
    {
        id: '4',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/empower-4.webp',
        title: 'Easily edit online',
        desc: 'Creating the perfectly formatted, custom tailored resume has never been easier.',
    },

]

const Feedback = () => {
  return (
    <div className="py-12">
        <div className="flex flex-col md:flex-row items-center px-6 bg-white">
          {/* Left Content */}
          <div className="max-w-lg">
            <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
                Cover Letter
            </p>
            <h2 className="text-[24px] mb-4 capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold">Easily create a job-ready resume and cover letter to get hired faster.</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around px-6 pt-4 bg-white">
          <Image
              src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/letter.webp"
              width="330"
              height="330"
              alt="Choose Us"
              className="hidden md:block w-24 md:w-auto h-80 mt-8 md:mt-0"
            />
            <div className="mb-3 h-[320px] overflow-y-auto pe-1 cover-scroll">
            {letter.map((letter, index) => (
                <div className="flex items-center p-4 max-w-[611px] mb-3 mx-auto bg-[#F6F3FE] rounded-[14px]">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="md:col-span-4">
                            <div className="bg-[#EEE8FD] rounded-[14px] flex items-center justify-center h-full">
                                <Image
                                  src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/empower-4.webp"
                                  width="28"
                                  height="28"
                                  alt="Choose Us"
                                  className="h-[28px] w-[28px]"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <h6 className="text-[18px] text-[#17012C] font-bold mb-2">Easily edit online</h6>
                            <p className="text-[15px] text-[#504E4E]">Creating the perfectly formatted, custom tailored resume has never been easier.</p>
                        </div>
                    </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Feedback;
