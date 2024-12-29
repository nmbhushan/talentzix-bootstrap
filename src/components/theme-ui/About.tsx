import Image from "next/image";
import { Statistics } from "./Statistics";
import pilot from "@/assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="https://resumegenie.s3.ap-south-1.amazonaws.com/ats.png"
            alt="resume"
            className="w-[500px] grayscale-[0%] -top-12 rounded-full object-cover"
          />,
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Resumes optimized for applicant tracking systems (ATS)
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Enhancv resumes and cover letters are thoroughly tested with major ATS systems to 
                guarantee full compatibility and accurate parsing.
              </p>
              <ul className="py-3">
                <li className="py-2">Clear and accessible contact information</li>
                <li className="py-2">Complete parsing of the experience section</li>
                <li className="py-2">Streamlined and ATS-friendly skills section</li>
              </ul>
            </div>
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
