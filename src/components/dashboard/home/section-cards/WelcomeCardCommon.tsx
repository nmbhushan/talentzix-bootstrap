import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function WelcomeCardCommon({ content }: { content: string }) {
    return (
        <Card className="relative overflow-visible rounded-lg bg-gradient-to-br from-[#09090B] py-1 to-[#5C5C71] text-white">
            <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-light md:text-xl">
                    Welcome, <span className="font-bold"> Nagmani </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-white/80 max-w-md">To</p>
                <p className="text-l font-medium">{content}</p>
            </CardContent>
            {/* <CardFooter>
                <Button className="bg-amber-500 text-white w-fit px-8">Move in</Button>
            </CardFooter> */}
            {/* Image Placeholder */}
            {/* <div className="absolute -top-4 right-0 z-0">
                <Image
                    src="/images/dashboard/building.svg" // Replace with the correct path
                    alt="Building"
                    width={250}
                    height={100}
                    className="object-cover"
                />
            </div> */}
        </Card>
    );
}
