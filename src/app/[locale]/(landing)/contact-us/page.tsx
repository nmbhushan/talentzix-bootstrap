import { imageConfig } from "@/config/imageConfig";
import { siteConfig } from "@/config/siteConfig";
import ContactUsForm from "@/components/forms/contactus-form";
import CustomCard from "@/components/landing/common/custom-ui/CustomCard";
import HeadingOne from "@/components/landing/common/custom-ui/HeadingOne";
import TabsLayout from "@/components/landing/common/custom-ui/Tabs";
import ContactUsCard from "@/components/landing/contact-us/ContactUs";
import { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Contact Us - Talentzix',
    description: 'Contact Us - Talentzix'
};
const breadcrum = [
    { href: "/", label: "Home" },
    { label: "Contact Us" },
]
const ContactUs = () => {
    const contactAddress = {
        bengaluru: {
            address: siteConfig.address.bengaluru.address,
            phone: siteConfig.address.bengaluru.phone,
        },
    }
    const tabItems = [
        {
            title: "Bengaluru",
            content: (
                <div>
                    <ContactUsCard item={contactAddress.bengaluru} />
                </div>
            ),
        },
    ];
    return (
        <>
            <div className='bg-no-repeat bg-contact-banner bg-cover py-8 -mt-[20px]'>
                <div className="container">
                    <div className="mb-8 grid gap-10 md:grid-cols-12 lg:grid-cols-12 justify-between">
                        <div className="col-span-12 md:col-span-6 space-y-6 text-white">
                            <HeadingOne title='Get in touch with us' />
                            <TabsLayout tabs={tabItems} layout="layout1" theme="dark" align='center' />
                        </div>
                        <div className="col-span-12 md:col-span-6 py-10">
                            <CustomCard variant='with-space'>
                                <ContactUsForm />
                            </CustomCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;