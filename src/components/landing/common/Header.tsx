"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import Language from "./Language";
// import LoginToggle from "./LoginToggle";
import { IoChevronDownSharp } from "react-icons/io5";
import LocaleSwitcher from "@/components/landing/common/LocaleSwitcher";
import LoginToggle from "@/components/landing/LoginToggle";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { siteConfig } from "@/config/siteConfig";
import {
    usePathname, useRouter,
} from "@/i18n/routing";
const Header = () => {
    const items = [
        "Al bateen garden",
        "Nation tower",
        "Lulut AL raha",
        "Lulut AL raha",
        "Al bateen garden",
        "Nation tower",
        "Lulut AL raha",
        "Lulut AL raha",
    ];
    const pathname = usePathname();
    return (
        <div className="w-full py-4 fixed top-0 bg-white z-50 shadow-md">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 justify-center items-center">
                    <div className="col-span-12 md:col-span-2">
                        <div className="flex flex-row gap-4 items-center">
                            <Link href={"/"}>
                                <Image
                                    width={siteConfig.logoWidth}
                                    height={siteConfig.logoHeight}
                                    src={siteConfig.logo}
                                    alt={siteConfig.name}
                                    className="dark:invert dark:brightness-0 dark:saturate-0"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-10">
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-12 md:col-span-5">
                                <div className="hidden lg:flex flex-row gap-3">
                                    {/* <DropdownMenu>
                                        <DropdownMenuTrigger className="me-3">
                                            {" "}
                                            <p className="outline-none cursor-pointer capitalize font-medium text-primary hover:text-primary-foregroundHoverText focus:text-primary-foregroundHoverText flex flex-row items-center">Area Guide <IoChevronDownSharp className="ms-1" /> </p>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="grid grid-cols-4 mt-5 p-2" align="start">
                                            {items.map((item, index: number) => (
                                                <Link href={""} className={`px-2 ${index % 4 === 3 ? '' : 'border-e-[1px]'}`} key={index}><DropdownMenuItem className="p-2 text-[13px]">Al bateen garden</DropdownMenuItem></Link>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu> */}
                                    {/* <DropdownMenu>
                                        <DropdownMenuTrigger className="me-3 outline-none">
                                            {" "}
                                            <p className="outline-none cursor-pointer capitalize font-medium text-primary hover:text-primary-foregroundHoverText flex flex-row items-center">Upcoming Properties <IoChevronDownSharp className="ms-1"/> </p>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <Link href={"/media-center/press-release"}>
                                                <DropdownMenuItem> Press release </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/media-center/picture-gallery"}>
                                                <DropdownMenuItem> Picture Gallery</DropdownMenuItem>
                                            </Link>
                                            <Link href={"/media-center/video-gallery"}>
                                                <DropdownMenuItem> Video Gallery </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/media-center/media-query"}>
                                                <DropdownMenuItem> Media query </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuContent>
                                    </DropdownMenu> */}
                                    {/* <Link
                                        href={"/"}
                                        className="me-3 outline-none cursor-pointer capitalize font-normal text-primary hover:text-primary-foregroundHoverText flex flex-row items-center"
                                    >
                                        Upcoming Properties
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="me-3 outline-none cursor-pointer capitalize font-normal text-primary hover:text-primary-foregroundHoverText flex flex-row items-center"
                                    >
                                        Marketing
                                    </Link> */}
                                    {siteConfig.header.headerLinks.map((link) => (
                                        <Link
                                            href={link.href}
                                            key={link.title}
                                            className={`me-3 outline-none cursor-pointer capitalize font-normal text-primary hover:text-primary-foregroundHoverText flex flex-row items-center ${pathname === link.href ? "text-primary-foregroundHoverText font-semibold" : ""
                                                }`}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-7 justify-end ">
                                <div className="hidden lg:flex flex-row gap-3 justify-end items-center">
                                    {siteConfig.header.buylinks.map((link, index) => (
                                        <div key={link.title} className="flex items-center">
                                            <Link
                                                href={link.href}
                                                className={`me-1 pe-1 outline-none cursor-pointer capitalize font-normal text-primary hover:text-primary-foregroundHoverText flex flex-row items-center ${pathname === link.href ? "text-primary-foregroundHoverText font-semibold" : ""
                                                    }`}
                                            >
                                                {link.title}
                                            </Link>
                                            {index < siteConfig.header.buylinks.length - 1 && <span>|</span>}
                                        </div>
                                    ))}
                                    <div>
                                        <Link
                                            href={siteConfig.header.quickPay[0].href}
                                            className={`ms-2 me-1 pe-1 outline-none cursor-pointer capitalize font-normal text-primary hover:text-primary-foregroundHoverText flex flex-row items-center ${pathname === siteConfig.header.quickPay[0].href ? "text-primary-foregroundHoverText font-semibold" : ""
                                                }`}
                                        >
                                            {siteConfig.header.quickPay[0].title}
                                        </Link>
                                    </div>
                                    <LoginToggle text="Login" />
                                    <LocaleSwitcher />
                                    <Link href="/">
                                        <IoIosSearch className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="flex lg:hidden">
                                    <Sheet>
                                        <SheetTrigger>
                                            <AiOutlineMenu />
                                        </SheetTrigger>
                                        <SheetContent className="flex flex-start items-start">
                                            <SheetHeader className="mt-8">
                                                <SheetTitle className="flex flex-row gap-3">
                                                    <LoginToggle text="Login" />
                                                    <LocaleSwitcher />
                                                </SheetTitle>
                                                <SheetDescription className="mt-5 flex flex-col gap-3 items-start">
                                                    <p className="cursor-pointer text-black mt-6">Home </p>
                                                    <Link href={"/about-us/what-we-do"} className="cursor-pointer text-black decoration-none">About Us</Link>
                                                    <Link href={"/property-list"} className="cursor-pointer text-black">Properties</Link>
                                                    <Link href={"/hospitality"} className="cursor-pointer text-black">Hospitality</Link>
                                                    <Link href={"/media-center/press-release"} className="cursor-pointer text-black">Media Center</Link>
                                                    <Link href={"/contact-us"} className="cursor-pointer text-black">Contact us</Link>
                                                    <Link href={"/properties-listing"} className="cursor-pointer text-black">Property Search</Link>
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
