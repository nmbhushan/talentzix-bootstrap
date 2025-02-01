'use client';

import { About } from "@/components/theme-ui/About";
import { Cta } from "@/components/theme-ui/Cta";
import { FAQ } from "@/components/theme-ui/FAQ";
import { Features } from "@/components/theme-ui/Features";
import { Footer } from "@/components/theme-ui/Footer";
import { HeroHire } from "@/components/theme-ui/HeroHire";
import { Navbar } from "@/components/theme-ui/Navbar";
import { Pricing } from "@/components/theme-ui/Pricing";
import { ScrollToTop } from "@/components/theme-ui/ScrollToTop";
// import { Services } from "@/components/theme-ui/Services";
import { Sponsors } from "@/components/theme-ui/Sponsors";
import { Team } from "@/components/theme-ui/Team";
import { Testimonials } from "@/components/theme-ui/Testimonials";
import ResumeCarousel from '@/components/theme-ui/ResumeCarousel';
import ResumeExamples from '@/components/theme-ui/ResumeExamples';
import "../App.css";
import AgentDemand from "@/components/theme-ui/AgentDemand";
import { HowItWorks } from "@/components/theme-ui/HowItWorks";
import CoverLetter from "@/components/theme-ui/CoverLetter";
import Feedback from "@/components/theme-ui/Feedback";
import AgentControlCenter from "@/components/theme-ui/AgentControlCenter";
import ChooseUs from "@/components/theme-ui/ChooseUs";
import Test from "@/components/theme-ui/Test";
import Blogs from "@/components/theme-ui/Blogs";
import Hireworks from "@/components/theme-ui/Hireworks";
import AiRecruitment from "@/components/theme-ui/AiRecruitment";

export default function HomePage() {
    return (
      <>
        <HeroHire />
{/*         <Sponsors /> */}
{/*         <HowItWorks /> */}
{/*         <About /> */}
{/*         <ResumeCarousel /> */}
{/*         <ResumeExamples /> */}
        <AgentDemand/>
        <AiRecruitment/>
        <Hireworks/>
        <AgentControlCenter/>
        <Blogs />
        <div className="bg-contain bg-no-repeat bg-right">
{/*             <CoverLetter /> */}
            <ChooseUs />
        </div>
        <Feedback/>
        <FAQ />
      </>
    );
}
