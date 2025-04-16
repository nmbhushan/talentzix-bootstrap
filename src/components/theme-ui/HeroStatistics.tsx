import { MoveUp } from 'lucide-react';
import Image from 'next/image';

export const HeroStatistics = () => {
  // Include the `icon` property in the `statsProps` interface
  interface statsProps {
    quantity: string;
    description: string;
    icon: string; // Added 'icon' property
  }

  // Define the `stats` array with proper type
  const stats: statsProps[] = [
    {
      quantity: "40%",
      description: "More Interviews",
      icon: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/quantity.webp",
    },
    {
      quantity: "28%",
      description: "More Likely to get a job offer",
      icon: "https://talentzixmedia.s3.ap-south-1.amazonaws.com/landing/description.webp",
    },
  ];

  return (
    <section id="statistics">
      <div className="flex items-center gap-4">
        {/* Iterate over the stats array */}
        {stats.map(({ quantity, description, icon }) => (
          <div className="flex items-center me-3" key={description}>
            {/* Use the icon for the Image component */}
            <Image
              src={icon}
              alt="Icon"
              width={42}
              height={42}
            />
            <div className="space-y-2 text-center">
              <h2 className="text-[21px] font-semibold text-foreground flex items-center">
                <MoveUp className="me-1 text-[10px]" /> {quantity}
              </h2>
              <p className="text-[11px] text-foreground uppercase text-start ms-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
