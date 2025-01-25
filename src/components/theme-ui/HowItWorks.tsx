  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/theme-ui/Icons";
  import Image from 'next/image';
  import { Button } from "@/components/ui/button";

  interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  const features: FeatureProps[] = [
    {
      icon: <Image
              src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/recruit-approve.webp"
              alt="resume"
              width="181"
              height="140"
              className="grayscale-[0%] -top-12 rounded-full object-cover"
            />,
      title: "Recruiter-Approved Resume",
      description:
        "We collaborate with recruiters on auto-formatting resume templates",
    },
    {
      icon: <Image
            src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/recruit-timer.webp"
            alt="resume"
            width="181"
            height="140"
            className="grayscale-[0%] -top-12 rounded-full object-cover"
          />,
      title: "Finish Your Resume in 10 Minutes",
      description:
        "Resume Now helps you rediscover your professional accomplishments",
    },
    {
      icon: <Image
            src="https://resumegenie.s3.ap-south-1.amazonaws.com/landing/recruit-chance.webp"
            alt="resume"
            width="181"
            height="140"
            className="grayscale-[0%] -top-12 rounded-full object-cover"
          />,
      title: "Increase Your Interview Chances",
      description:
        "We suggest skills that land interviews for over a million people",
    }
  ];

  export const HowItWorks = () => {
    return (
      <section
        id="howItWorks"
        className="py-14 sm:py-14 bg-vertical-bg bg-no-repeat bg-right"
      >
        <div className="container text-center">
            <p className="text-semibold text-[11px] uppercase bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-transparent inline-block">
              Create Resume
            </p>

            <h2 className="text-[24px] md:text-[35px] capitalize max-w-[420px] leading-tight mx-auto text-[#17012C] font-semibold pb-5">
                Create a resume that gets results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-[840px] mx-auto">
              {features.map(({ icon, title, description }: FeatureProps) => (
                <Card
                  key={title}
                  className="bg-muted/50"
                >
                  <CardHeader className="p-3">
                    <CardTitle className="grid gap-4 place-items-center">
                      {icon}
                      <span className="mt-2 text-[#17012C] text-[14px] font-bold max-w-[150px] mx-auto leading-tight">{title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-[#504E4E] text-[11px] font-normal max-w-[250px] mx-auto leading-tight">{description}</CardContent>
                </Card>
              ))}
            </div>
            <Button className=" mt-10 h-[36px] uppercase bg-[#635AD9] text-white rounded-[71px] font-bold text-[11px] text-center px-5">
                Get Started with Us
            </Button>
        </div>
      </section>
    );
  };
