import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HeroStatistics } from "./HeroStatistics";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-20 gap-10 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="text-center lg:text-start space-y-6">
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build YOUR RESUME.
        </p>
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#000000]  to-[#000000] text-transparent bg-clip-text">
              Land Your Dream Job with a Resume in Minutes
            </span>
          </h1>
        </main>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            Create your resume
          </Button>         
        </div>
        <HeroStatistics />
        
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
