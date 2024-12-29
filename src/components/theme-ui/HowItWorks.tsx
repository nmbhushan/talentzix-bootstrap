import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/theme-ui/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <img
            src="https://resumegenie.s3.ap-south-1.amazonaws.com/resume-banner-icon/rb-01.png"
            alt="resume"
            className="grayscale-[0%] -top-12 rounded-full object-cover"
          />,
    title: "Recruiter-Approved Resume",
    description:
      "We collaborate with recruiters on auto-formatting resume templates",
  },
  {
    icon: <img
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/resume-banner-icon/rb-02.png"
          alt="resume"
          className="grayscale-[0%] -top-12 rounded-full object-cover"
        />,
    title: "Finish Your Resume in 10 Minutes",
    description:
      "Resume Now helps you rediscover your professional accomplishments",
  },
  {
    icon: <img
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/resume-banner-icon/rb-03.png"
          alt="resume"
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
      className="container text-center py-20 sm:py-20"
    >
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Create Resume
      </p>
      
      <h2 className="text-3xl md:text-4xl font-bold pb-5">
          Create a resume that gets results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
