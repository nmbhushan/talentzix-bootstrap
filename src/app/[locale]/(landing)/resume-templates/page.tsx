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

const breadcrum = [
    { href: "/", label: "Home" },
    { label: "Resume Templates" },
]

export default function ResumeTemplates() {
    return (
      <>
        <div className="bg-[#4B3C59] pb-16 mb-7">
            <div className="custom-breadcrum container pt-5 px-3">
                <Breadcrumbs breadcrum={breadcrum} />
            </div>
            <div className="max-w-[400px] mx-auto text-center space-y-5 pt-14 px-3">
                <h1 className="text-[24px] md:text-[35px] font-semibold text-[#FFFFFF]">Resume Templates</h1>
                <p className="text-[12px] font-medium text-[#FFFFFF]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>
        <TemplateTabs/>
        <Feedback/>
        <FAQ />
      </>
    );
}
