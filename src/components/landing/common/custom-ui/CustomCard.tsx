import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const CustomCard = ({ children, variant }: { children: React.ReactNode; variant: 'no-space' | 'with-space'; }) => {
    return (
        <>
            <Card className="overflow-hidden mb-4 shadow-lg">
                {/* <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader> */}
                <CardContent className={`${variant === 'no-space' ? 'p-0' : ''}`}>
                    {children}
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>

        </>
    );
}

export default CustomCard;