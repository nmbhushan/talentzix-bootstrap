import { imageConfig } from "@/config/imageConfig";
import HeadingOne from "@/components/landing/common/custom-ui/HeadingOne";
import ScrollNavigation from "@/components/landing/common/custom-ui/ScrollNavigation";
import { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'RealCube offer villas, apartments, and townhouses for residential purposes, we also have a commercial space for buying and rent at the prime location of the city.'
};
const breadcrum = [
    { href: "/", label: "Home" },
    { label: "About Us" },
]
const Aboutus = () => {
    const ourMission = [
        { imageurl: imageConfig.aboutus.ourMissionImg.image1 },
        { imageurl: imageConfig.aboutus.ourMissionImg.image2 },
        { imageurl: imageConfig.aboutus.ourMissionImg.image3 },
        { imageurl: imageConfig.aboutus.ourMissionImg.image4 },
    ]
    const ourValues = [
        { imageurl: imageConfig.aboutus.ourValuesImg.image1 },
        { imageurl: imageConfig.aboutus.ourValuesImg.image2 },
        { imageurl: imageConfig.aboutus.ourValuesImg.image3 },
        { imageurl: imageConfig.aboutus.ourValuesImg.image4 },
    ]
    const sections = [
        {
            id: "our-mission",
            label: "Our Mission",
            content: (
                <div className="space-y-5 text-lg">
                    <h2 className="text-center mb-2 text-2xl md:text-3xl font-semibold">Our Mission</h2>
                    <p>At RealCube, our mission is to revolutionize the property and facilities management industry through our cutting-edge, cloud-based technology.</p>
                    <p>We believe in the power of modern solutions to transform the way people manage communities, properties and facilities, making it easier, more efficient and more sustainable. We are committed to our customers and to making a positive impact in the world.</p>
                    <div className="grid lg:grid-cols-4 gap-5">
                        {ourMission.map((item, index: any) => (
                            <div key={index} className="card">
                                <Image src={item.imageurl} alt="our mission" width={300} height={300} className="w-full rounded-lg min-h-[290px] mt-6" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: "our-values",
            label: "Our Values",
            content: (
                <div className="space-y-5 text-lg">
                    <h2 className="text-center mb-2 text-2xl md:text-3xl font-semibold">Our Values</h2>
                    <p>Integrity, innovation, and excellence are the core values that drive everything we do at RealCube. We believe in honesty, transparency and ethical business practices, and we always strive to do the right thing, even when no one is looking. We are dedicated to pushing the boundaries of technology and delivering innovative solutions that change the world for the better.</p>
                    <div className="grid lg:grid-cols-4 gap-5">
                        {ourValues.map((item, index: any) => (
                            <div key={index} className="card">
                                <Image src={item.imageurl} alt="Our Values" width={300} height={300} className="w-full rounded-lg min-h-[290px] mt-6" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: "our-vision",
            label: "Our Vision",
            content: (
                <div className="space-y-5 text-lg">
                    <h2 className="text-center mb-2 text-2xl md:text-3xl font-semibold">Our Vision</h2>
                    <p>Our vision is to become the world's leading provider of cutting-edge technology solutions for sustainable communities and cities. We aim to empower people and businesses with the tools they need to succeed in the digital age, and we will continue to push the limits of what's possible to make this vision a reality. With a focus on innovation and excellence, we will continue to create products that transform the world and make a positive impact on society.</p>
                    <div className="grid lg:grid-cols-4 gap-5">
                        {ourValues.map((item, index: any) => (
                            <div key={index} className="card"> 
                                <Image src={item.imageurl} alt="Our Values" width={300} height={300} className="w-full rounded-lg min-h-[290px] mt-6" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="container  text-base">
                <div className="mb-8 grid gap-4 md:grid-cols-12 lg:grid-cols-12 justify-between items-center">
                    <div className="col-span-12 md:col-span-6 space-y-6">
                        <HeadingOne title='About Us' />
                        <p>We believe in the power of technology to change the world for the better, and we are committed to creating products that empower people and businesses to achieve their goals.</p>
                        <p>With a focus on innovation, excellence, and integrity, RealCube is dedicated to leading the way in the technology industry.</p>
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
                <ScrollNavigation sections={sections} />
            </div>
        </>
    );
}

export default Aboutus;