'use client'
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/resume-templates",
    label: "Resume Templates",
  },
  {
    href: "/cv-templates",
    label: "CV Templates",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/faqs",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky h-[82px] flex items-center shadow rounded-b-3xl top-0 z-40 w-full bg-gradient-to-b from-[#EDF6FF] to-[#F5E3FC]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href={"/"}><Image
                width="124"
                height="28"
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="dark:invert dark:brightness-0 dark:saturate-0"
            />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-[#000000]">
                    Talentzix
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`!text-[12px] ${buttonVariants({
                  variant: "menu",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div> */}

          <div className="hidden md:flex gap-2">
            <a
              href="/login"
              className={`h-[39px] min-w-[99px] !rounded-[71px] font-bold text-white text-[11px] hover:bg-none hover:!bg-[#219be4] bg-gradient-to-r from-[#C21EFC] to-[#0081EC] border ${buttonVariants({ variant: "secondary" })}`}
            >
              Login
            </a>

            <ModeToggle />
          </div>


        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
