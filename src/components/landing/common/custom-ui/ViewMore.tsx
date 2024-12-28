import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
const ViewMore = ({url,buttonText}:any) => {
    return ( 
        <>
          <Link href={url} className="flex items-center text-primary hover:text-primary-hover text-sm hover:font-medium">{buttonText} <FaArrowRight className="ms-2"/></Link>  
        </>
     );
}
 
export default ViewMore;