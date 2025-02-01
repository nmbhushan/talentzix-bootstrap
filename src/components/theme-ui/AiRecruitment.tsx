import Image from "next/image";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/theme-ui/StarRating";
import { CircleCheck } from 'lucide-react';
const recruitment: Recruitment[] = [
    {
        id: '1',
        title: 'JobCraft AI #1',
        description: 'Job Posting Specialist',
        rating: '4.5',
        url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/jobcraft.webp',
        content: 'Craft compelling job descriptions using industry insights and market trends',
        price: '29.00',
        list1: 'Create SEO - Optimized job posts',
        list2: 'Customize for company culture',
        list3: 'Analyze market competition',
        list4: 'Generate inclusive language',
    },
    {
        id: '2',
        title: 'ResumeMatch AI',
        description: 'Resume Screening Expert',
        rating: '4.5',
        url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-match.webp',
        content: 'Advanced AI for parsing and matching resume to job requirements',
        price: '49.00',
        list1: 'Parse multiple resume formats',
        list2: 'Score based on job match',
        list3: 'Identity key qualifications',
        list4: 'Generate candidate summaries',
    },
    {
        id: '3',
        title: 'InterviewPrep AI',
        description: 'Interview Question Generator',
        rating: '4.5',
        url: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/interview-prep.webp',
        content: 'Creates role-specific interview questions and evaluation criteria',
        price: '39.00',
        list1: 'Generate technical questions',
        list2: 'Create behavioral scenarios',
        list3: 'Custom evaluation rubrics',
        list4: 'Skill assessment templates',
    },
]
export const AiRecruitment = () => {
  return (
    <section className="bg-hire-bg bg-no-repeat bg-right-top">
      <div className="container pt-12 pb-5">
          <div className="grid grid-cols-12 gap-3 ai-team">
            <div className="col-span-12 flex text-center justify-center">
              <div className="max-w-[700px] mx-auto mb-3">
                  <h2 className="text-[24px] md:text-[35px] capitalize leading-tight text-[#17012C] font-semibold">
                    Meet Your AI Recruitment Team
                  </h2>
                  <p className="mt-4 text-[#504E4E] text-[14px] font-medium leading-normal pb-3">
                    Our Specialized AI agents handle different aspects of your recruitment process, Each agent is trained for specific tasks to ensure optimal results
                  </p>
              </div>
            </div>
            {recruitment.map((recruitment, index) => (
            <div key={index} className="col-span-12 md:col-span-4 ai-item">
                <div className="p-4 md:p-10 bg-[#E8F2FF] rounded-[8px] space-y-3 h-full">
                    <div className="flex justify-between">
                        <div className="space-y-1">
                            <h5 className="text-[20px] font-bold text-[#181A20]">{recruitment.title}</h5>
                            <p className="text-[14px] font-normal text-[#969696]">{recruitment.description}</p>
                            <StarRating/>
                        </div>
                        <div className="h-[83px] flex items-center justify-center">
                            <Image className="me-2 max-h-[83px]" src={recruitment.url} alt="Image" width="52" height="83" />
                        </div>
                    </div>
                    <p className="text-[14px] font-normal text-[#181A20]">{recruitment.content}</p>
                    <ul className="py-5 block space-y-3">
                        <li className="text-[14px] font-normal text-[#181A20] flex items-center m-0">
                            <CircleCheck className="me-2"/>
                            {recruitment.list1}</li>
                        <li className="text-[14px] font-normal text-[#181A20] flex items-center m-0">
                            <CircleCheck className="me-2"/>
                            {recruitment.list2}</li>
                        <li className="text-[14px] font-normal text-[#181A20] flex items-center m-0">
                            <CircleCheck className="me-2"/>
                            {recruitment.list3}</li>
                        <li className="text-[14px] font-normal text-[#181A20] flex items-center m-0">
                            <CircleCheck className="me-2"/>
                            {recruitment.list4}</li>
                    </ul>
                    <p className="text-[20px] lg:text-[30px] font-bold text-[#181A20] text-center">${recruitment.price}/Month</p>
                    <p className="text-[14px] font-normal text-[#181A20] text-center !mb-4">Starting From</p>
                    <Button variant="link" className="bg-[#E1EAFD] border border-[#635AD9] table px-5 mx-auto text-[#635AD9] rounded-[9px] hover:bg-white hover:no-underline">Hire this Agent</Button>
                </div>
            </div>
            ))}
          </div>
      </div>
    </section>
  );
};
export default AiRecruitment;