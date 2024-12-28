import ViewMore from "./ViewMore";

const HeadingOne = ({title}:any) => {
    return ( 
        <>
            <h2 className="text-sm md:text-2xl lg:text-4xl font-bold mb-2">{title}</h2> 
        </>
     );
}
 
export default HeadingOne;