import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  interface PropertyCardProps {
    propertyTitle: string;
    propertyImg: string;
  }
const PropertyCard = ({propertyTitle, propertyImg}:PropertyCardProps) => {
    // const {propertyImg, propertyTitle} = props;
    return ( 
        <>
            <Card className="shadow-none hover:shadow-lg border-none hover:border hover:border-white/30 transition-all delay-75">
                <CardContent className="p-0">
                    <img src={propertyImg} alt={propertyTitle} height={300} width={397} loading="lazy" className="rounded-[12px] object-cover min-h-[300px] max-h-[300px] w-100 h-100"/>
                </CardContent>
                <CardFooter className="min-h-[61px] px-[16px] py-[20px] leading-[25px] bg-white relative block mt-0 rounded-[12px]">
                    <h3 className="font-semibold text-[17px] text-black whitespace-nowrap overflow-hidden text-ellipsis">{propertyTitle}</h3>
                </CardFooter>
            </Card>
        </>
     );
}
 
export default PropertyCard;