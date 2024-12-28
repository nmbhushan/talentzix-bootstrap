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
    title: 'Contact Us - Get in touch to know more aboutRealcube services',
    description: 'We would love to hear from you, drop us a call or fill out the contact form to get information related to any property listing on our website.'
};
const breadcrum = [
    { href: "/", label: "Home" },
    { label: "Contact Us" },
]
const ContactUs = () => {
    const contactAddress = {
        abuDhabi: {
            address: siteConfig.address.abudhabi.address,
            phone: siteConfig.address.abudhabi.phone,
        },
        london: {
            address: siteConfig.address.abudhabi.address,
            phone: siteConfig.address.abudhabi.phone,
        },
        dubai: {
            address: siteConfig.address.abudhabi.address,
            phone: siteConfig.address.abudhabi.phone,
        },
        bengaluru: {
            address: siteConfig.address.abudhabi.address,
            phone: siteConfig.address.abudhabi.phone,
        },
    }
    const tabItems = [
        {
            title: "Abu Dhabi",
            content: (
                <div>
                    <ContactUsCard item={contactAddress.abuDhabi} />
                </div>
            ),
        },
        {
            title: "London",
            content: (
                <div>
                    <ContactUsCard item={contactAddress.london} />
                </div>
            ),
        },
        {
            title: "Dubai",
            content: (
                <div>
                    <ContactUsCard item={contactAddress.dubai} />
                </div>
            ),
        },
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
                        <div className="col-span-12 md:col-span-6">
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