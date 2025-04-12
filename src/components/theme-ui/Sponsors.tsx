import { Radar } from "lucide-react";
import Image from 'next/image';
interface SponsorProps {
  icon: JSX.Element;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/amazon.webp"
          width={82}
          height={36}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/microsoft.webp"
          width={102}
          height={36}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/samsung.webp"
          width={102}
          height={36}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/ibm.webp"
          width={53}
          height={36}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/facebook.webp"
          width={86}
          height={36}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/dell.webp"
          width={160}
          height={36}
          alt="Picture of the author"
        />,
  },
  {
    icon: <Image
          src="https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/cognizant.webp"
          width={112}
          height={36}
          alt="Picture of the author"
        />,
  },
];



export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-10"
    >
      <div className="mt-10 relative max-w-[1000px] mx-auto">
          <h2 className="text-center text-[24px] font-semibold absolute text-[#17012C] left-0 right-0 top-[-12px] inline-table bg-white mx-auto px-3">
            Our Career Partner
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 border-y border-[#EAF3F8] py-10">
            {sponsors.map(({ icon }: SponsorProps,index:any) => (
              <div className="flex items-center gap-1" key={index}>
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
