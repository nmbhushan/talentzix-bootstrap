// types.ts
export interface Template {
    id: string;
    imageUrl: string;
    title: string;
}

// components/ResumeCarousel.tsx
import { FC, useState, useCallback } from 'react';
import Image from 'next/image';
import LeftArrow from '@/assets/Left.png'; // Import Left arrow image
import RightArrow from '@/assets/Right.png'; // Import Right arrow image

const templates: Template[] = [
    {
        id: '1',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-1.webp',
        title: 'Recruiter-Approved Resume',
    },
    {
        id: '2',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-2.webp',
        title: 'Finish Your Resume in 10 Minutes',
    },
    {
        id: '3',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-3.webp',
        title: 'Increase Your Interview Chances',
    },
    {
        id: '4',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-4.webp',
        title: 'Increase Your Interview Chances',
    },
    {
        id: '5',
        imageUrl: 'https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-5.webp',
        title: 'Increase Your Interview Chances',
    },
];

interface ResumeCarouselProps {}

const ResumeCarousel: FC<ResumeCarouselProps> = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const getPreviousIndex = useCallback((): number => {
        return currentIndex === 0 ? templates.length - 1 : currentIndex - 1;
    }, [currentIndex, templates.length]);

    const getNextIndex = useCallback((): number => {
        return currentIndex === templates.length - 1 ? 0 : currentIndex + 1;
    }, [currentIndex, templates.length]);

    const handlePrevious = useCallback((): void => {
        setCurrentIndex(getPreviousIndex());
    }, [getPreviousIndex]);

    const handleNext = useCallback((): void => {
        setCurrentIndex(getNextIndex());
    }, [getNextIndex]);

    return (
        <section className="w-full mx-auto py-4 sm:py-10">
            <div className="container text-center mb-12">
                <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
                    Lorem Ipsum
                </p>
                <h2 className="text-[24px] md:text-[35px] capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold mx-auto">
                    Create A Resume That Gets Results
                </h2>
            </div>

            <div className="relative flex items-center justify-center gap-4">
                {/* Left Preview */}
                <div className="relative hidden md:block group">
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2
                                   shadow-md transition-all duration-300 group-hover:scale-110"
                        aria-label="Previous template"
                    >
                        <Image
                            src={LeftArrow} // Use the imported image
                            alt="Previous"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                            priority
                        />
                    </button>
                    <div
                        className="relative w-48 opacity-50 hover:opacity-70 transition-all duration-300
                                   cursor-pointer transform hover:scale-105"
                        onClick={handlePrevious}
                    >
                        <Image
                            src={templates[getPreviousIndex()].imageUrl}
                            alt={`Preview of ${templates[getPreviousIndex()].title}`}
                            width={200}
                            height={280}
                            className="rounded-lg shadow-md transform scale-75"
                        />
                    </div>
                </div>

                {/* Main Template */}
                <div className="relative w-full max-w-2xl h-[300px] flex items-center">
                    <Image
                        src={templates[currentIndex].imageUrl}
                        alt={templates[currentIndex].title}
                        width={405}
                        height={562}
                        className="w-auto h-full border border-[#DDDDDD] mx-auto rounded-lg shadow-xl transition-all img-fluid duration-300"
                        priority
                    />

                    {/* Mobile Navigation Buttons */}
                    <div className="md:hidden absolute inset-0 flex items-center justify-between">
                        <button
                            onClick={handlePrevious}
                            className="bg-white/90 rounded-full p-2 shadow-md ml-2"
                            aria-label="Previous template"
                        >
                            <Image
                                src={LeftArrow} // Use the imported image
                                alt="Previous"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-white/90 rounded-full p-2 shadow-md mr-2"
                            aria-label="Next template"
                        >
                            <Image
                                src={RightArrow} // Use the imported image
                                alt="Next"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </button>
                    </div>
                </div>

                {/* Right Preview */}
                <div className="relative hidden md:block group">
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2
                                   shadow-md transition-all duration-300 group-hover:scale-110"
                        aria-label="Next template"
                    >
                        <Image
                            src={RightArrow}
                            alt="Next"
                            width={30}
                            height={30}
                            className="cursor-pointer"
                            priority
                        />
                    </button>
                    <div
                        className="relative w-48 opacity-50 hover:opacity-70 transition-all duration-300
                                   cursor-pointer transform hover:scale-105"
                        onClick={handleNext}
                    >
                        <Image
                            src={templates[getNextIndex()].imageUrl}
                            alt={`Preview of ${templates[getNextIndex()].title}`}
                            width={200}
                            height={280}
                            className="rounded-lg shadow-md transform scale-75"
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            {/* <div className="flex justify-center gap-2 mt-8">
                {templates.map((template, index) => (
                    <button
                        key={template.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200
                          ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'}`}
                        aria-label={`Go to ${template.title}`}
                    />
                ))}
            </div> */}
        </section>
    );
};

export default ResumeCarousel;
