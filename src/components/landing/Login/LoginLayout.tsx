import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
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
        <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            {buttonShow && <Link
                href={buttonURL}
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute right-4 top-4 md:right-8 md:top-8 text-sm'
                )}
            >
                {buttonText}
            </Link>}
            <div className="relative hidden h-full flex-col  p-8 dark:text-white dark:border-r lg:flex dark:bg-[primary] bg-[#FFF5E4]">
                <div className="relative z-20 flex items-center">
                    <Link href={"/"}><Image
                        width={siteConfig.logoWidth}
                        height={siteConfig.logoHeight}
                        src={siteConfig.logo}
                        alt={siteConfig.name}
                        className="dark:invert dark:brightness-0 dark:saturate-0"
                    />
                    </Link>
                </div>
                <div className="relative z-20 h-full flex justify-center items-center">
                    <blockquote className="space-y-2">
                        <FlipWords className="text-primary text-3xl font-bold ml-[-7px] inline-block" words={title} />
                        <p className="text-sm leading-relaxed pt-4 dark:text-white/80">{description}</p>
                    </blockquote>
                </div>
            </div>
            <div className="h-full bg-background lg:p-8">
                <div className={`mx-auto flex w-full h-full flex-col justify-center space-y-6 ${size === 'lg' ? 'sm:w-md' : 'sm:w-[400px]'}  p-8 lg:p-0`}>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-1">
                            <h1 className="text-2xl font-semibold tracking-tight text-center text-foreground/90">
                                {siteTitle}
                            </h1>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;
