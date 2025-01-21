import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { Linkedin, Facebook, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/siteConfig';
import { FlipWords } from '@/components/ui/flip-words';

const LoginLayout = ({
    children,
    description = siteConfig.authPageDesc,
    title = [siteConfig.authPageTitle],
    buttonText,
    buttonURL,
    siteTitle,
    buttonShow,
    size,
}: {
    children: React.ReactNode;
    description?: string;
    title?: any;
    buttonText?: string;
    buttonURL?: any;
    buttonShow?: boolean;
    siteTitle?: string;
    size?: any;
}) => {
    return (
        <div className="relative md:h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col p-0 dark:text-white dark:border-r lg:flex dark:bg-[primary] bg-[#FFF5E4]">
                <div className="relative h-full z-20 flex items-center">
                    <Image
                        width="704"
                        height="768"
                        src="https://resumegenie.s3.ap-south-1.amazonaws.com/login/login-banner.webp"
                        alt="Login Banner"
                        className="object-cover h-full dark:invert dark:brightness-0 dark:saturate-0"
                    />
                    <div className="z-20 absolute bottom-[50px] px-5 pb-5 text-center left-0 right-0">
                        <blockquote className="space-y-2">
                            <FlipWords className="text-white text-[22px] font-semibold inline-block" words={title} />
                            <p className="text-[22px] leading-[22px] text-white">{description}</p>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className="h-full bg-background lg:p-8">
                <div className={`mx-auto flex w-full h-full flex-col justify-center space-y-6 ${size === 'lg' ? 'sm:w-md' : 'sm:w-[400px]'}  p-8 lg:p-0`}>
                    <div className="flex flex-col space-y-2 md:pb-0">
                        <div className="flex flex-col space-y-1">
                            <Link href={"/"} className="flex items-center justify-center mb-5 pb-4">
                                <Image
                                    width="167"
                                    height="39"
                                    src={siteConfig.logo}
                                    alt={siteConfig.name}
                                />
                            </Link>
                            <h1 className="text-[24px] mb-4 font-semibold tracking-tight text-center text-foreground/90">
                                {siteTitle}
                            </h1>
                            <div className="flex items-center justify-between space-x-3 text-center !mt-4">
                                <Link href={'www.linkedin.com'} className="text-[#0077B5] hover:text-[#FFFFFF] w-full flex items-center justify-center border border-[#0077B5] hover:bg-[#0077B5] rounded-[7px] px-3 py-3">
                                    <Linkedin className="me-1 text-[12px]"/>
                                    <span className="hidden sm:block">Linkedin</span>
                                </Link>
                                <Link href={'www.google.com'} className="text-[#E94235] hover:text-[#FFFFFF] w-full flex items-center justify-center border border-[#E94235] hover:bg-[#E94235] rounded-[7px] px-3 py-3">
                                    <Mail className="me-1 text-[12px]"/>
                                    <span className="hidden sm:block">Google</span>
                                </Link>
                                <Link href={'www.facebook.com'} className="text-[#1A97F0] hover:text-[#FFFFFF] w-full flex items-center justify-center border border-[#1A97F0] hover:bg-[#1A97F0] rounded-[7px] px-3 py-3">
                                    <Facebook className="me-1 text-[12px]" />
                                    <span className="hidden sm:block">Facebook</span>
                                </Link>
                            </div>
                            <p className="text-[12px] text-[#555555] text-center !mt-4">or use your email</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;
