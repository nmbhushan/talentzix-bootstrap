import PropertyCard from "../property-card/property-card";

const PropertySection = () => {
    const data =[{
        img: '/images/property/card/property-1.jpg',
        title: 'Azizi Riviera'
    },
    {
        img: '/images/property/card/property-2.jpg',
        title: 'Azizi Plaza'
    },
    {
        img: '/images/property/card/property-3.jpg',
        title: 'Park Heights'
    },
    {
        img: '/images/property/card/property-11.jpg',
        title: 'Marina Residences'
    },{
        img: '/images/property/card/property-5.jpg',
        title: 'Polo Residence'
    },{
        img: '/images/property/card/property-6.jpg',
        title: 'Elite Sports Residence'
    },{
        img: '/images/property/card/property-7.jpg',
        title: 'Emerald'
    },{
        img: '/images/property/card/property-8.jpg',
        title: 'Palazzo Versace'
    },{
        img: '/images/property/card/property-9.jpg',
        title: 'Amna'
    }]
    return ( 
        <section className="pb-[30px]">
            <div className="container">
                <div className="grid grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <PropertyCard propertyImg={item.img} propertyTitle={item.title} />
                    </div>
                ))}     
                </div>
            </div>
        </section>
     );
}
 
export default PropertySection;