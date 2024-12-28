'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
    title: '404 - Page Not Found',
    description: '404 - Page Not Found',
}

export default function PageNotFound() {
    const { push, back: goBack } = useRouter();
    
    return (
        <div className="relative z-20 h-full flex justify-center items-center">
            <div className='flex flex-col items-center '>
                <h1 className="font-bold">404</h1>
                {/* <Image src={'/images/404.svg'} alt="404 image" width={386} height={276} className="mb-4" /> */}
                <h1>Oops, page not found!</h1>
                <p className="mb-8">Seems like something went wrong.</p>
                <button onClick={goBack} className='btn btn-warning font-bold'>Go back</button>
            </div>
        </div>
    );
};