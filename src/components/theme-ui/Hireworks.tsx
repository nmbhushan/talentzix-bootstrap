import Image from "next/image";
export const Hireworks = () => {
  return (
    <section>
      <div className="container py-6 md:py-12">
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-3">
                <div className="max-w-[710px]">
                  <h2 className="text-[24px] md:text-[35px] capitalize leading-tight text-[#17012C] font-semibold mb-3">
                    How Its Works
                  </h2>
                  <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal">Our Specialized AI agents handle different aspects of your recruitment process, Each agent is trained for specific tasks to ensure optimal results</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-3 border border-[#E9E9E9] bg-[#FBFDFD] rounded-[12px] flex items-center justify-center">
                <Image className="max-h-[378px] mx-auto table w-auto" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/hire-banner-image.webp" alt="Image" width="564" height="460" />
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <div className="border border-[#E9E9E9] rounded-[12px] p-5 relative">
                            <Image className="absolute right-3" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/step-1.webp" alt="Image" width="40" height="40" />
                            <h2 className="text-[28px] font-semibold text-[#635AD9] mb-3 mt-10">01</h2>
                            <h6 className="text-[14px] font-semibold text-[#181A20] mb-1">Choose Your Agent</h6>
                            <p className="text-[13px] font-normal text-[#717171]">Get ready to launch your real estate website without...</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="border border-[#E9E9E9] rounded-[12px] p-5 relative">
                            <Image className="absolute right-3" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/step-2.webp" alt="Image" width="40" height="40" />
                            <h2 className="text-[28px] font-semibold text-[#635AD9] mb-3 mt-10">02</h2>
                            <h6 className="text-[14px] font-semibold text-[#181A20] mb-1">Configure Settings</h6>
                            <p className="text-[13px] font-normal text-[#717171]">Get ready to launch your real estate website without...</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="border border-[#E9E9E9] rounded-[12px] p-5 relative">
                            <Image className="absolute right-3" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/step-3.webp" alt="Image" width="40" height="40" />
                            <h2 className="text-[28px] font-semibold text-[#635AD9] mb-3 mt-10">03</h2>
                            <h6 className="text-[14px] font-semibold text-[#181A20] mb-1">Monitor Progress</h6>
                            <p className="text-[13px] font-normal text-[#717171]">Get ready to launch your real estate website without...</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="border border-[#E9E9E9] rounded-[12px] p-5 relative">
                            <Image className="absolute right-3" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/step-4.webp" alt="Image" width="40" height="40" />
                            <h2 className="text-[28px] font-semibold text-[#635AD9] mb-3 mt-10">04</h2>
                            <h6 className="text-[14px] font-semibold text-[#181A20] mb-1">Get Results</h6>
                            <p className="text-[13px] font-normal text-[#717171]">Get ready to launch your real estate website without...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Hireworks;