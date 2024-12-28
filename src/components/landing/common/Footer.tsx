import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { AiFillPhone } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import SocialIcons from "./SocialIcons";
import { siteConfig } from "@/config/siteConfig";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { IoIosSend } from "react-icons/io";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import HeadingOne from "./custom-ui/HeadingOne";
const Footer = () => {
    // const menus = [
    //     {
    //         url: '',
    //         name: 'About Us'
    //     },
    //     {
    //         url: '',
    //         name: 'Contact Us'
    //     },
    //     {
    //         url: '',
    //         name: 'Terms & Conditions'
    //     },
    //     {
    //         url: '',
    //         name: 'Privacy Policy'
    //     },
    // ]
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        // <div className="w-full p-10 flex md:flex-row flex-col justify-around bg-black text-white">
        //     <div className="flex flex-col items-left justify-start">
        //         <div>
        //             <Image
        //                 src="/images/logo-white.svg"
        //                 alt="logo"
        //                 width={150}
        //                 height={40}

        //             />

        //         </div>
        //         <div className="flex flex-row items-start mt-4 gap-2">
        //             <span className=" p-2 rounded-md bg-white text-black"><HiOutlineLocationMarker /></span>
        //             <p className="md:w-[25vw] w-[80vw]">
        //                 
        //             </p>
        //         </div>
        //         <div className="flex flex-row items-center gap-2 mt-4">
        //             <span className=" p-2 rounded-md bg-white text-black"><AiFillPhone /></span>
        //             <p>+971 </p>
        //         </div>
        //         <div className="flex flex-row items-center gap-2 mt-4">
        //             <span className=" p-2 rounded-md bg-white text-black"><AiFillMail /></span>
        //             <p></p>
        //         </div>
        //     </div>

        //     <div className="flex flex-col mt-5 md:mt-0">
        //         <b>USEFUL LINKS</b>
        //         <ul className="list-none">
        //             <li className="mt-2 md:mt-4 text-[#757575]">Terms & condition</li>
        //             <li className="mt-2 md:mt-4 text-[#757575]">Privacy policy</li>
        //             <li className="mt-2 md:mt-4 text-[#757575]">Disclaimer</li>
        //         </ul>
        //     </div>


        //     <div className="flex flex-col mt-5 md:mt-0">
        //         <b>MAIN MENU</b>
        //         <ul className="list-none">
        //             <li className="mt-2 md:mt-4 text-[#757575]">About Us</li>
        //             <li className="mt-2 md:mt-4 text-[#757575]">Properties</li>
        //         </ul>
        //         <div className="flex flex-row gap-2 mt-3">
        //             <span className="bg-white p-2 rounded-md hover:bg-[#00FFFF] text-xl cursor-pointer text-black"><FaFacebookF /></span>
        //             <span className="bg-white p-2 rounded-md hover:bg-[#00FFFF] text-xl cursor-pointer text-black"><FaInstagram /></span>
        //             <span className="bg-white p-2 rounded-md hover:bg-[#00FFFF] text-xl cursor-pointer text-black"><FaTwitter /></span>
        //             <span className="bg-white p-2 rounded-md hover:bg-[#00FFFF] text-xl cursor-pointer text-black"><FaYoutube /></span>
        //         </div>
        //     </div>
        // </div>
        <>
            <section className="bg-[#FAFAFA] py-8">
                <div className="container">
                    <HeadingOne title="Need Help?" />
                    <div className="grid lg:grid-cols-3 mt-10 gap-5">
                        {siteConfig.needHelp.map((item, index: any) => (
                            <div className="flex space-x-4 text-primary" key={index}>
                                <span className="border rounded-lg bg-white p-2 relative flex shrink-0 overflow-hidden w-12 h-12">
                                    <Image
                                        src={item.icon}
                                        width={30}
                                        height={30}
                                        alt="need-help"
                                    />
                                </span>
                                <div className="space-y-4">
                                    <p className="text-sm font-medium leading-none">{item.title}</p>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                    <Link href={item.link} className="text-primary-foregroundHoverText text-semibold mt-3 inline-block text-base">{item.linkText}</Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer>
                <div className="py-10">
                    <div className="container">
                        <div className="grid gap-5 md:grid-cols-12 lg:grid-cols-12">
                            <div className="col-span-2">
                                <Image
                                    width={siteConfig.logoWidth}
                                    height={siteConfig.logoHeight}
                                    src={siteConfig.logo}
                                    alt={siteConfig.name}
                                    className="dark:invert dark:brightness-0 dark:saturate-0"
                                />
                            </div>
                            <div className="col-span-10 grid max-w-6xl grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3">
                                <div>
                                    <h3 className="text-base font-bold"> {siteConfig.footer.quickLinks.title}</h3>
                                    <span className="mt-3 mb-5 border-b-2 border-b-primary-hover w-10 h-[2px] inline-block"></span>
                                    <ul className="space-y-4">
                                        {siteConfig.footer.quickLinks.links.map((link: any) => (
                                            <li key={link.title}>
                                                <Link href={link.href} className="inline-block outline-none cursor-pointer capitalize font-normal text-primary hover:text-primary-foregroundHoverText">

                                                    {link.title}

                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="">
                                    <h3 className="text-base font-bold"> {siteConfig.footer.subscribe.title}</h3>
                                    <span className="mt-3 mb-5 border-b-2 border-b-primary-hover w-10 h-[2px] inline-block"></span>
                                    <div className="space-y-3">
                                        <p className="leading-7">
                                            Get insights, Updates and newsletters
                                            delivered to your inbox
                                        </p>
                                        <div className="relative">
                                            <Input placeholder="Email Address" className="pe-10" />
                                            <Button variant="default" size="icon" className="h-[41px] bg-primary-hover text-primary absolute top-0 ltr:right-0">
                                                <IoIosSend className="w-10 h-10 text-3xl" />
                                            </Button>
                                        </div>
                                        <ul className="mt-2 flex space-x-2">
                                            {siteConfig.footer.socialLinks.links.map((link, index: any) => (
                                                <li key={index}>
                                                    <Link href={link.href}>
                                                        {link.icon && <link.icon className="text-3xl text-primary-foregroundHoverText hover:text-primary" />}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className="text-base font-bold">{siteConfig.footer.socialLinks.title}</h3>
                                    <span className="mt-3 mb-5 border-b-2 border-b-primary-hover w-10 h-[2px] inline-block"></span>
                                    <div className="flex items-center mb-5">
                                        <Button variant="secondary" size="icon" className="me-3 rounded-full">
                                            <IoCallOutline />
                                        </Button>
                                        <Link href={`tel:${siteConfig.contact.phone}`}>
                                            {siteConfig.contact.phone}
                                        </Link>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <Button variant="secondary" size="icon" className="me-3 rounded-full">
                                            <IoMailOutline />
                                        </Button>
                                        <Link href={`tel:${siteConfig.contact.email}`}>
                                            {siteConfig.contact.email}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <footer>
                <div className="py-10 bg-primary text-white">
                    <div className="container">
                        <div className="flex md:flex-row flex-col justify-between footer-top">
                            <div>
                                <Image
                                    src="/images/logo-white.svg"
                                    alt="logo"
                                    width={150}
                                    height={40}
                                />
                            </div>
                            <div className="flex gap-5">
                                <Link href="" className={`rounded-none ${buttonVariants({ variant: "outline" })}`}>Broker Login</Link>
                                <Link href="" className={`rounded-none ${buttonVariants({ variant: "outline" })}`}>Broker Registration</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-row flex-col justify-between mt-5 md:mt-8">

                            <ul className="flex gap-4 md:gap-5">
                                {menus.map((item, index: any) => (
                                    <li key={index}>
                                        <Link href={item.url} className={`border-e-[1px] border-e-color-white pe-5 ${((index + 1) % 4 === 0) ? 'border-e-0' : ''}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-end gap-7">
                                <SocialIcons />
                                <div className="flex gap-4">
                                    <Link href={''}>
                                        <Image
                                            src="/images/landing/google_play_store.webp"
                                            alt="play-store"
                                            width={112}
                                            height={34}
                                        />
                                    </Link>
                                    <Link href={''}>
                                        <Image
                                            src="/images/landing/app_store.webp"
                                            alt="play-store"
                                            width={112}
                                            height={34}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-2 py-4 text-center">
                    <p>© Copyright {currentYear}. RealCube. All Rights Reserved.</p>
                </div>
            </footer> */}
        </>
    );
};

export default Footer;
