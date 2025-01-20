'use client';

import { About } from "@/components/theme-ui/About";
import { Cta } from "@/components/theme-ui/Cta";
import { FAQ } from "@/components/theme-ui/FAQ";
import { Features } from "@/components/theme-ui/Features";
import { Footer } from "@/components/theme-ui/Footer";
import { Hero } from "@/components/theme-ui/Hero";
import { Navbar } from "@/components/theme-ui/Navbar";
import { Newsletter } from "@/components/theme-ui/Newsletter";
import { Pricing } from "@/components/theme-ui/Pricing";
import { ScrollToTop } from "@/components/theme-ui/ScrollToTop";
// import { Services } from "@/components/theme-ui/Services";
import { Sponsors } from "@/components/theme-ui/Sponsors";
import { Team } from "@/components/theme-ui/Team";
import { Testimonials } from "@/components/theme-ui/Testimonials";
import ResumeCarousel from '@/components/theme-ui/ResumeCarousel';
import ResumeExamples from '@/components/theme-ui/ResumeExamples';
import "./App.css";
import { HowItWorks } from "@/components/theme-ui/HowItWorks";
import ChooseUs from "@/components/theme-ui/ChooseUs";
import Test from "@/components/theme-ui/Test";
import Services from "@/components/theme-ui/Servicespage";

// import { useTranslations } from 'next-intl';
// import Banner from '@/components/landing/sections/Banner';
// import PopularProperties from '@/components/landing/sections/PopularProperties';
// import Testimonial from '@/components/landing/sections/Testimonial';
// import PropertiesService from '@/components/landing/sections/PropertiesServices';
// import Discover from '@/components/landing/sections/Discover';
// import PropertiesValues from '@/components/landing/sections/PropertiesValue';
// import Blogs from '@/components/landing/sections/Blog';
// import Videos from '@/components/landing/sections/Videos';
// import PopularSearch from '@/components/landing/sections/PopularSearch';
// import PageContainer from '@/components/ui/page-container';
// import { FIXED_PAGES_CONFIG } from '@/config/portal.config';
// import LoginPage from '../(auth)/login/page';

// export default function HomePage() {
//     const t = useTranslations('HomePage');
//     if(FIXED_PAGES_CONFIG.landing.enable){
//         return (
//             <PageContainer scrollable={false} noPadding={true} >
//                 <Banner />
//                 <PopularProperties />
//                 <Testimonial />
//                 <PropertiesService />
//                 <Discover />
//                 <PropertiesValues />
//                 <Blogs />
//                 <hr />
//                 <Videos />
//                 {/* <PopularSearch /> */}
//             </PageContainer>
//         );
//     }else{
//         return(
//             <LoginPage />
//         )
//     }
// }

export default function HomePage() {
    return (
      <>
        <Hero />
        <Sponsors />
        <HowItWorks />
        <About />
        <Services />
        <ResumeCarousel />
        <ResumeExamples />
        <ChooseUs />
        <FAQ />
        <Newsletter />


        {/* <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter /> */}
=======

      </>
    );
}
