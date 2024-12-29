import { Radar } from "lucide-react";
import Image from 'next/image';
interface SponsorProps {
  icon: JSX.Element;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/amazon.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/cognizant.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/dell.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/facebook.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/ibm.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/microsoft.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://resumegenie.s3.ap-south-1.amazonaws.com/company-logo/samsung.png"
          width={130}
          height={60}
          alt="Picture of the author"
        />,
  },
];


export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-20 sm:py-20 nm-30"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Career Partner
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon }: SponsorProps) => (
          <div className="flex items-center gap-1 text-muted-foreground/60">
            <span>{icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
