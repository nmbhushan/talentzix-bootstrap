import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HeroStatistics } from "./HeroStatistics";

export const Hero = () => {
  return (
    <section className="w-full bg-landing-banner bg-cover">
      <div className="container grid lg:grid-cols-2 gap-10">
          <div className="text-center lg:text-start">
            <div className="space-y-4 my-12">
                <p className="text-[14px] text-[#2F9DFD] uppercase">
                  Build Your Resume
                </p>
                <h1 className="text-[24px] md:text-[51px] font-bold text-[#000000] leading-[54px] mt-0">Land Your Dream Job with a Resume in Minutes</h1>
                <Button className="h-[36px] uppercase bg-[#635AD9] text-white rounded-[71px] font-bold text-[11px] text-center px-5">
                    Create your resume
                </Button>
            </div>
            <div className="z-10">
                <HeroStatistics />
            </div>
          </div>
          <div className="text-center lg:text-start grid-cols-1">
            <HeroCards />
          </div>
      </div>
    </section>
  );
};
