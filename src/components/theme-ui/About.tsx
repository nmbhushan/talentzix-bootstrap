import Image from "next/image";
import Arrow from '@/assets/arrow_about.png'
export const About = () => {
  return (
    <section
      id="about"
      className="container py-2 sm:py-16 bg-gradient-to-r from-purple-50 to-purple-100"
    >
      <div className="py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="https://resumegenie.s3.ap-south-1.amazonaws.com/ats.png"
            alt="resume"
            className="w-[500px] grayscale-[0%] -top-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Resumes Optimized For Applicant Tracking Systems (ATS)
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Enhancv resumes and cover letters are thoroughly tested with
                major ATS systems to guarantee full compatibility and accurate
                parsing.
              </p>
              <ul className="py-3">
                <li className="py-2 flex items-center">
                  <Image
                    src={Arrow} 
                    alt="Check"
                    className="w-5 h-5 mr-3"
                  />
                  Clear and accessible contact information
                </li>
                <li className="py-2 flex items-center">
                  <Image
                    src={Arrow} 
                    alt="Check"
                    className="w-5 h-5 mr-3"
                  />
                  Complete parsing of the experience section
                </li>
                <li className="py-2 flex items-center">
                  <Image
                    src={Arrow}
                    alt="Check"
                    className="w-5 h-5 mr-3"
                  />
                  Streamlined and ATS-friendly skills section
                </li>
              </ul>
            </div>
            <div className="flex">
              <button
                className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              >
                ABOUT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};