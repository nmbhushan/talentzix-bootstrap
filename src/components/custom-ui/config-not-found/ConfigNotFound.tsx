'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
    title: '404 - Page Not Found',
    description: '404 - Page Not Found',
}

export default function ConfigNotFound() {
    const { push, back: goBack } = useRouter();
    
    return (
        <div className="relative z-20 h-full flex justify-center items-center">
            <div className='flex flex-col items-center '>
                {/* <Image src={'/images/404.svg'} alt="404 image" width={386} height={276} className="mb-4" /> */}
                <h1>
                    Oops, config not found!
                </h1>
                <p className="my-8">
                    Please contact support.
                </p>
            </div>
        </div>
    );
};