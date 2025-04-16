import { imageConfig } from "@/config/imageConfig";
import HeadingOne from "@/components/landing/common/custom-ui/HeadingOne";
import ScrollNavigation from "@/components/landing/common/custom-ui/ScrollNavigation";
import { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About Us - Talentzix',
    description: 'About Us - Talentzix'
};
const breadcrum = [
    { href: "/", label: "Home" },
    { label: "About Us" },
]
const Aboutus = () => {
    return (
        <>
            <div className="container  text-base">
                <div className="mb-8 grid gap-4 md:grid-cols-12 lg:grid-cols-12 justify-between items-center">
                    <div className="col-span-12 md:col-span-6 space-y-6 my-10">
                        <HeadingOne title='About Us' />
                        <p>
                            Welcome to Talentzix, a dynamic platform dedicated to empowering individuals and 
                            businesses to achieve their career aspirations and talent management goals. 
                            At Talentzix, we believe in bridging the gap between potential and opportunity 
                            by offering innovative solutions that simplify the hiring process, foster professional 
                            growth, and enhance workforce management. Whether you are a job seeker striving to 
                            land your dream role or an organization seeking to build an exceptional team, our 
                            tools and resources are designed to make your journey seamless and efficient.
                        </p>
                        <p>
                            Our Resume Builder is crafted with precision to help individuals create professional, 
                            standout resumes effortlessly. With user-friendly templates and industry-specific guidance,
                            we ensure your resume reflects your unique skills and accomplishments, making you shine in 
                            the competitive job market. At Talentzix, we are committed to being more than just a platform—we 
                            are your partner in success, empowering you to unlock your full potential and achieve your 
                            professional goals with confidence.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image
                            src={imageConfig.aboutus.aboutBanner}
                            width={500}
                            height={500}
                            alt={imageConfig.aboutus.aboutBannerAlt}
                            className="ltr:mr-0 ltr:ml-auto"
                        />
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Aboutus;