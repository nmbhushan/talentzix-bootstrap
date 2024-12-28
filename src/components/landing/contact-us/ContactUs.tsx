import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { IoLocationSharp, IoCallSharp, IoMail } from "react-icons/io5";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const ContactUsCard = ({ item }: { item: { address: string, phone: string } }) => {
    return (
        <Card className="backdrop-blur-md bg-white/20  text-white mt-5">
            <CardHeader>
                <CardTitle className="mb-3">  Find us at  </CardTitle>
                <CardDescription className="flex text-white items-center text-base">
                    <Button variant="ghost" size="icon" className="rounded-full p-0  me-4">
                        <IoLocationSharp className="text-white" />
                    </Button>
                    {item.address}</CardDescription>
            </CardHeader>
            <CardContent className="mt-3 text-base">
                <p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">
                    Reach out to us at
                </p>
                <div className="bg-white/30 rounded-full inline-block min-w-72  mb-4 p-2">
                    <div className="flex items-center">
                        <Link href={`tel:${item.phone}`}>
                            <Button variant="outline" size="icon" className="rounded-full p-1 me-4">
                                <IoCallSharp className="text-primary w-7 h-7" />
                            </Button>
                            {item.phone}
                        </Link>
                    </div>
                </div>
                <br />
                <div className="bg-white/30 rounded-full inline-block min-w-72  mb-4 p-2">
                    <div className="flex items-center">
                        <Link href={`mailto:${siteConfig.contact.email}`}>
                            <Button variant="outline" size="icon" className="rounded-full p-1 me-4">
                                <IoMail className="text-primary w-7 h-7" />
                            </Button>
                            {siteConfig.contact.email}
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ContactUsCard;
