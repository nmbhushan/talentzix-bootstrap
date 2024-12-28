import CommonCard from "../common/custom-ui/Card";
import HeadingOne from "../common/custom-ui/HeadingOne";
import BlogView from "./BlogView";

const Blogs = () => {
    const blogItem = [
        {
            url: '',
            img: 'https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/property-img.png',
            date: '20-10-2025',
            title: 'The convenience of paying rent automatically through the Ejari Direct Debit Service',
            description: "Are you looking for an effective and sustainable approach to waste management that can improve the efficiency of your organization? Making smart choices around your organization's waste management systems is essential, both financially and environmentally. As a property manager, you need to prioritize cost-effective methods that are also in line with sustainability efforts.",
        },
        {
            url: '',
            img: 'https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/property-img2.png',
            date: '20-10-2025',
            title: 'Top 5 Rental Property Investment Tips',
            description: "Are you looking for an effective and sustainable approach to waste management that can improve the efficiency of your organization? Making smart choices around your organization's waste management systems is essential, both financially and environmentally. As a property manager, you need to prioritize cost-effective methods that are also in line with sustainability efforts.",
        },
        {
            url: '',
            img: 'https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/property-img3.jpg',
            date: '20-10-2025',
            title: 'Examining the Advantages and Disadvantages of Outsourcing Facilities Management',
            description: "Are you looking for an effective and sustainable approach to waste management that can improve the efficiency of your organization? Making smart choices around your organization's waste management systems is essential, both financially and environmentally. As a property manager, you need to prioritize cost-effective methods that are also in line with sustainability efforts.",
        }
    ]
    return (
        <>
            <section className="py-4 md:py-10">
                <div className="container">
                    <h3 className="text-xl font-semibold mb-3">Blogs</h3>
                    <HeadingOne title="Articles Related to Aesthetic Home Design" />
                    <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8 mb-3 md:mb-3">
                        <div>
                            {blogItem.slice(0, 1).map((item, index:any) => (
                                <div key={index} className="card mb-3">
                                    <BlogView item={item} view='treaser-view' lineClamp='line-clamp-2'/>
                                </div>
                            ))}
                        </div>
                        <div>
                            {blogItem.map((item, index:any) => (
                                <div key={index} className="card">
                                    <BlogView item={item} view='compact-view' lineClamp='line-clamp-2'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;