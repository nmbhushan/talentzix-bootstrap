import { siteConfig } from "@/config/siteConfig"
import Image from "next/image"
import Link from "next/link"

export default function LayoutEmptyPage({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative h-screen ">
            <div className="relative hidden h-full flex-col  p-8 dark:text-white dark:border-r lg:flex dark:bg-[primary] bg-sidebar-background">
                <div className="relative z-20 flex items-center">
                    <Link href={"/"}><Image
                        width={siteConfig.logoWidth}
                        height={siteConfig.logoHeight}
                        src={siteConfig.logo}
                        alt={siteConfig.name}
                        className="dark:invert dark:brightness-0 dark:saturate-0"
                    />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    )
}
