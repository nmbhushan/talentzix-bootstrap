import Image from "next/image";
export const About = () => {
  return (
    <section
      id="about"
      className="bg-resume-bg bg-no-repeat bg-cover"
    >
      <div className="container py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/resume-optimize.webp"
            alt="resume"
            width="410"
            height="438"
            className="object-contain"
          />
          <div className="flex flex-col">
            <div className="pb-0">
              <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
                Lorem Ipsum
              </p>
              <h2 className="text-[24px] md:text-[35px] capitalize max-w-[610px] leading-tight text-[#17012C] font-semibold">
                Resumes Optimized For Applicant Tracking Systems (ATS)
              </h2>
              <p className="mt-4 text-[#504E4E] text-[14px] font-medium max-w-[500px] leading-normal border-b border-[#DEE6F1] pb-3">
                Enhancv resumes and cover letters are thoroughly tested with
                major ATS systems to guarantee full compatibility and accurate
                parsing.
              </p>
              <ul className="py-3">
                <li className="text-[#17012] text-[11px] font-medium leading-normal pb-2 flex items-center">
                  <Image
                    src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/arrow.webp"
                    width="15"
                    height="15"
                    alt="Check"
                    className="mr-1"
                  />
                  Clear and accessible contact information
                </li>
                <li className="text-[#17012] text-[11px] font-medium leading-normal pb-2 flex items-center">
                  <Image
                    src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/arrow.webp"
                    width="15"
                    height="15"
                    alt="Check"
                    className="mr-1"
                  />
                  Complete parsing of the experience section
                </li>
                <li className="text-[#17012] text-[11px] font-medium leading-normal pb-2 flex items-center">
                  <Image
                    src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/arrow.webp"
                    width="15"
                    height="15"
                    alt="Check"
                    className="mr-1"
                  />
                  Streamlined and ATS-friendly skills section
                </li>
              </ul>
            </div>
            <div className="flex">
              <button
                className="mt-4 h-[36px] uppercase bg-[#635AD9] hover:bg-[#219be4] text-white rounded-[71px] font-bold text-[11px] text-center px-5"
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