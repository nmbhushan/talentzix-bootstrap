import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';
import Image from 'next/image';

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter" className="flex items-center bg-news-bg bg-no-repeat bg-cover mx-auto absolute top-[-100px] left-0 right-0 min-h-[162px] max-w-[832px] rounded-[12px]">
      <div className="container py-3">
        <div className="grid md:grid-cols-12 relative">
            <div className="col-span-12 md:col-span-6  overflow-hidden flex items-center min-h-[162px]">
                <Image
                    src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/news-img.webp"
                    alt="Spiral Decoration"
                    width={386}
                    height={189}
                    className="absolute bottom-[-11px]"
                  />
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center min-h-[162px]">
                <div>
                    <h3 className="text-white text-[22px] mb-3 font-bold">
                      Subscribe To Our Newsletter!
                    </h3>
                    <form
                      className="relative flex flex-col w-full gap-4 md:gap-2"
                      onSubmit={handleSubmit}
                    >
                      <Input
                        placeholder="Enter your Email ID"
                        className="bg-white h-[39px] rounded-[71px] text-[#504E4E] text-[12px]"
                        aria-label="email"
                      />
                      <Button className="absolute right-[5px] top-[1.5px] w-[33px] h-[33px] z-1 bg-[#635AD9] hover:bg-[#0081EC] text-[#FFFFFF] rounded-full"><Send /></Button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
