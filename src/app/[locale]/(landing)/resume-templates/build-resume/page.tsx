'use client';
import { Cta } from "@/components/theme-ui/Cta";
import { FAQ } from "@/components/theme-ui/FAQ";
import { Features } from "@/components/theme-ui/Features";
import { Footer } from "@/components/theme-ui/Footer";
import { Hero } from "@/components/theme-ui/Hero";
import { Navbar } from "@/components/theme-ui/Navbar";
import { Pricing } from "@/components/theme-ui/Pricing";
import { ScrollToTop } from "@/components/theme-ui/ScrollToTop";
import { Sponsors } from "@/components/theme-ui/Sponsors";
import { Team } from "@/components/theme-ui/Team";
import { Testimonials } from "@/components/theme-ui/Testimonials";
import Feedback from "@/components/theme-ui/Feedback";
import TemplateTabs from "@/components/theme-ui/TemplateTabs/TemplateTabs";
import { BreadcrumbResponsive } from "@/components/landing/common/custom-ui/Breadcrumb";
import { Breadcrumbs } from "@/components/landing/common/Breadcrumb";
import ChooseUs from "@/components/theme-ui/ChooseUs";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const breadcrum = [
    { href: "/", label: "Home" },
    { href: "/resume-templates", label: "Resume Templates" },
    { label: "Build Resume" },
]

export default function BuildResume() {
    return (
      <>
        <div className="container pt-5 px-3">
            <Breadcrumbs breadcrum={breadcrum} />
        </div>
        <div className="container grid grid-cols-12 gap-4 md:gap-12 px-3">
            <div className="col-span-12 md:col-span-5">
                <div className="bg-[#F4F4F4] border border-[#E4E4E4] p-5 rounded-[12px] shadow flex items-center justify-center">
                    <Image src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/resume-3.webp" alt="Image" width="281" height="400" className="max-h-[400px] h-auto md:h-full" />
                </div>
            </div>
            <div className="col-span-12 md:col-span-7">
                <h1 className="text-[24px] md:text-[25px] lg:text-[35px] leading-tight font-semibold text-foreground">Just three simple steps to Build professional Resume</h1>
                <div className="block py-9 space-y-5">
                    <div className="block relative ps-10">
                        <span className="bg-[#D9D9D9] text-[#000000] text-[15px] font-semibold w-[24px] h-[24px] rounded-[71px] inline-flex items-center justify-center text-center left-0 absolute top-0">1</span>
                        <h6 className="text-foreground text-[15px] font-semibold mb-2">Select Template</h6>
                        <p className="text-foreground text-[12px] leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="block relative ps-10">
                        <span className="bg-[#D9D9D9] text-[#000000] text-[15px] font-semibold w-[24px] h-[24px] rounded-[71px] inline-flex items-center justify-center text-center left-0 absolute top-0">2</span>
                        <h6 className="text-foreground text-[15px] font-semibold mb-2">Enter Your Details</h6>
                        <p className="text-foreground text-[12px] leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="block relative ps-10">
                        <span className="bg-[#D9D9D9] text-[#000000] text-[15px] font-semibold w-[24px] h-[24px] rounded-[71px] inline-flex items-center justify-center text-center left-0 absolute top-0">3</span>
                        <h6 className="text-foreground text-[15px] font-semibold mb-2">Select Template</h6>
                        <p className="text-foreground text-[12px] leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <Button className="rounded-[71px] px-5">Get Started</Button>
            </div>
        </div>
        <ChooseUs />
        <Feedback/>
        <FAQ />
      </>
    );
}
