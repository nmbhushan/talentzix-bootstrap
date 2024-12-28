import CommonCard from "../common/custom-ui/Card";
import HeadingOne from "../common/custom-ui/HeadingOne";
import BlogView from "./BlogView";

const Videos = () => {
    const videoItem = [
        {
            url: '',
            img: 'https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/property-img.png',
            date: 'June 19, 2023',
            title: 'Highlights from RealCube at Cityscape 2022 - The Future of Property Management',
        },
        {
            url: '',
            img: 'https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/property-img2.png',
            date: 'June 19, 2023',
            title: 'Introducing The Integrated Community Management Platform',
        },
        {
            url: '',
            img: 'https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/property-img3.jpg',
            date: 'June 19, 2023',
            title: 'Webinar: Bringing Facility management into the digital realm with RealCube Connect',
        }
    ]
    return (
        <>
            <section className="py-4 md:py-10">
                <div className="container">
                    <h3 className="text-xl font-semibold mb-3">Videos</h3>
                    <HeadingOne title="Highlights From RealCube at Cityscape" />
                    <div className="grid lg:grid-cols-3 gap-4 md:gap-8 my-8">
                        {videoItem.map((item, index: any) => (
                            <div key={index} className="card mb-3">
                                <BlogView item={item} lineClamp='line-clamp-2' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Videos;