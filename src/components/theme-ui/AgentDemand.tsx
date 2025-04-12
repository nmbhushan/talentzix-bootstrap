import Image from "next/image";
export const AgentDemand = () => {
  return (
    <section>
      <div className="container pt-12">
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 mb-3 flex items-center">
                <div className="w-100 space-y-4 md:space-y-10">
                    <div  className="bg-[#FFFFFF] p-4 rounded-[8px]">
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Effortlessly create your Frontline Agents on demand!</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="bg-[#F6F3FE] p-4 rounded-[8px]">
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Reaching Candidates</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal !mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Image className="max-h-[655px] mx-auto" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/reach-candidates.webp" alt="Image" width="380" height="655" />
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 mb-3 flex items-center">
                <div className="w-100 space-y-4">
                    <div className="bg-[#E9F4E3] p-4 rounded-[8px]">
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Qualification Checks</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal !mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Image className="max-h-[234px] mx-auto w-auto" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/qualification-checks.webp" alt="Image" width="340" height="234" />
                    </div>
                    <div className="bg-[#E8F2FF] p-4 rounded-[8px]">
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Interview Automations</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal !mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Image className="max-h-[218px] mx-auto w-auto" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/automation.webp" alt="Image" width="294" height="218" />
                    </div>
                    <div className="bg-[#E9F4E3] p-4 rounded-[8px]">
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Document Collection</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal !mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Image className="max-h-[151px] mx-auto w-auto" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/collection.webp" alt="Image" width="158" height="151" />
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 mb-3 flex items-center">
                <div className="w-100 space-y-4 md:space-y-10">
                    <div  className="bg-[#F6F3FE] p-4 rounded-[8px]">
                        <Image className="max-h-[330px] mx-auto w-auto mb-4" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/negotiation.webp" alt="Image" width="343" height="189" />
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Offer and Negotiation</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="bg-[#E8F2FF] p-4 rounded-[8px]">
                        <h3 className="leading-tight text-[24px] md:text-[30px] capitalize leading-tight text-[#17012C] font-semibold mb-3">Onboarding</h3>
                        <p className="text-[13px] md:text-[16px] leading-tight text-[#17012C] font-normal !mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Image className="max-h-[330px] mx-auto w-auto" src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/onboarding.webp" alt="Image" width="310" height="230" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default AgentDemand;