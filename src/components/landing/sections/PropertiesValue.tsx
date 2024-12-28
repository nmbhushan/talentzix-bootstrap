import Image from "next/image";

const items = [
    {
        icon:'sla-resolved.png',
        price:'11,000',
        title:"SLA's Resolved",
    },
    {
        icon:'reg-users.png',
        price:'25,000',
        title:"Registered Users",
    },
    {
        icon:'prop-activated.png',
        price:'100,000',
        title:"Properties Activated",
    }
]
const PropertiesValues = () => {
    return (
        <>
            <section className="py-4 md:py-12 bg-cover bg-landing-properties-value bg-no-repeat">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-5">
                        {items.map((item, index) => (
                            <div key={index} className="text-white">
                                <Image alt="icon" src={`/images/landing/${item.icon}`} width={85} height={95} className="mx-auto object-cover mb-6"/>
                                <span className="text-lg md:text-3xl font-bold block mb-1">{item.price} +</span>
                                <p className="text-base">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PropertiesValues;