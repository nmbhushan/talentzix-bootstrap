export const HeroStatistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "40%",
      description: "More Interviews",
    },
    {
      quantity: "28%",
      description: "More Likely to get a job offer",
    }
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-left">
                
              {quantity}
            </h2>
            <p className="text-l text-muted-foreground text-left">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
