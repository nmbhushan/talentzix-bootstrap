'use client'
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import CircularProgress from "@/components/dashboard/common/CircularProgressChart";

export default function DashboardInfo() {
    return (
        <>
            <div className="bg-welcome-object bg-cover bg-no-repeat p-5 rounded-[10px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-7 text-center sm:text-start">
                        <h6 className="text-[16px] font-bold text-[#F5F5F5] mb-3">Good Morning, John Doe</h6>
                        <p className="text-[14px] font-normal text-[#F5F5F5] mb-3">You have completed 70% of your profile. please update the missing details.</p>
                        <div className="flex justify-center sm:justify-start">
                            <div className="block">
                                <CircularProgress percentage={70} />
                                <Button className="mt-3">Update</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-5 flex items-end justify-center">
                        <Image src="https://resumegenie.s3.ap-south-1.amazonaws.com/my-account/welcome-info.webp" width="191" height="172" alt="Image" />
                    </div>
                </div>
            </div>
        </>
    )
}
