import { MoveUp } from 'lucide-react';
import Image from 'next/image';

export const HeroStatistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "40%",
      description: "More Interviews",
      icon: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/quantity.webp",
    },
    {
      quantity: "28%",
      description: "More Likely to get a job offer",
      icon: "https://resumegenie.s3.ap-south-1.amazonaws.com/landing/description.webp",
    }
  ];

  return (
    <section id="statistics">
      <div className="flex items-center gap-4">
        {stats.map(({ quantity, description, icon }: statsProps) => (
          <div className="flex items-center me-3">
              <Image
                  src={icon}
                  alt="Icon"
                  width="42"
                  height="42"
              />
              <div
                key={description}
                className="space-y-2 text-center"
              >
                <h2 className="text-[21px] font-semibold text-[#17012C] flex items-center">
                  <MoveUp className="me-1 text-[10px]"/> {quantity}
                </h2>
                <p className="text-[11px] text-[#504E4E] uppercase text-start ms-2">{description}</p>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};
