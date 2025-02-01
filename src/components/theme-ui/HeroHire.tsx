import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HeroStatistics } from "./HeroStatistics";
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="w-full bg-landing-banner bg-cover min-h-[470px] flex items-center">
      <div className="container grid md:grid-cols-2 gap-10 pb-10 lg:pb-5 bg-hire-bg bg-no-repeat bg-right">
          <div className="text-center md:text-start">
            <div className="space-y-4 my-12">
                <h1 className="text-[24px] md:text-[44px] text-[#000000] leading-normal md:leading-[48px] mt-0">Hire Self-Learning <b>AI Agents</b> to Run Your Operations</h1>
                <p className="text-[14px] text-[#504E4E]">
                  Meet the leading platform for Agentic Process Automation. Used by Fortune 500 companies and scale-ups, the platform automates workflows with AI agents to reduce operational cost and create leverage.
                </p>
                <Button className="h-[36px] uppercase bg-[#635AD9] text-white rounded-[71px] font-bold text-[11px] text-center px-5">
                    Book a Demo
                </Button>
            </div>
          </div>
          <div className="text-center flex items-center justify-center md:text-start grid-cols-1">
              <Image
                src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/hire-banner-right.webp"
                alt="resume"
                width="445"
                height="376"
                className="object-contain h-auto"
              />
          </div>
      </div>
    </section>
  );
};
