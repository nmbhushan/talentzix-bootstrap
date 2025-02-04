'use client'
import Image from 'next/image';
export default function DashboardOverview() {
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                    <div className="flex items-center bg-[#F6F3FE] p-5 min-h-[130px] rounded-[10px]">
                        <Image src="https://resumegenie.s3.ap-south-1.amazonaws.com/my-account/overview.webp" width="57" height="57" alt="Image" className="me-3" />
                        <div>
                            <p className="text-[14px] text-[#000000] font-bold">750</p>
                            <p className="text-[11px] text-[#8A8888]">Job Related your profile</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="flex items-center bg-[#E8F2FF] p-5 min-h-[130px] rounded-[10px]">
                        <Image src="https://resumegenie.s3.ap-south-1.amazonaws.com/my-account/overview.webp" width="57" height="57" alt="Image" className="me-3" />
                        <div>
                            <p className="text-[14px] text-[#000000] font-bold">00</p>
                            <p className="text-[11px] text-[#8A8888]">Job Applied</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="flex items-center bg-[#F3FEF7] p-5 min-h-[130px] rounded-[10px]">
                        <Image src="https://resumegenie.s3.ap-south-1.amazonaws.com/my-account/overview.webp" width="57" height="57" alt="Image" className="me-3" />
                        <div>
                            <p className="text-[14px] text-[#000000] font-bold">00</p>
                            <p className="text-[11px] text-[#8A8888]">Shortlisted</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="flex items-center bg-[#FFF4E8] p-5 min-h-[130px] rounded-[10px]">
                        <Image src="https://resumegenie.s3.ap-south-1.amazonaws.com/my-account/overview.webp" width="57" height="57" alt="Image" className="me-3" />
                        <div>
                            <p className="text-[14px] text-[#000000] font-bold">00</p>
                            <p className="text-[11px] text-[#8A8888]">Interview</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
