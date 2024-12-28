'use client';
import { useRouter } from "next/navigation";

export default function MaintenancePage() {
    const { back: goBack } = useRouter();

    return (
        <>
            <div className="relative h-full flex justify-center items-center">
                <div className='flex flex-col items-center '>
                    {/* <Image src={'/images/under-maintenance.svg'} alt="404 image" width={246} height={246} className="mb-8" /> */}
                    <h1 className="mb-4">We&apos;ll be right back!</h1>
                    <p className="mb-2 text-center">Sorry, we are down for maintenance but we will be back in no times!</p>
                    {/* <p className="text-center">For any queries - Email to: <a href={`email:${AQAAR_EMAIL}`} className="text-[#000000]">{AQAAR_EMAIL}</a> / Tel: <a href={`tel:${AQAAR_MOB}`} className="text-[#000000]">{AQAAR_MOB}</a></p> */}
                </div>
            </div>
        </>

    );
};