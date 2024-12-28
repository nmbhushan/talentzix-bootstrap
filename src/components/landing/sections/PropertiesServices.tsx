import Image from "next/image";
import HeadingOne from "../common/custom-ui/HeadingOne";
import CommonCard from "../common/custom-ui/Card";
import { imageConfig } from "@/config/imageConfig";

const PropertiesService = () => {
    const servicesData = [
        {
            img: imageConfig.landing.budgetFriendly,
            title: 'Budget Friendly',
            description: 'Rent like never before. Here’s how'
        },
        {
            img: imageConfig.landing.primeLocation,
            title: 'Prime Location',
            description: 'Rent like never before. Here’s how'
        },
        {
            img: imageConfig.landing.trusted,
            title: 'Trusted',
            description: 'Rent like never before. Here’s how'
        },
    ]
    return (
        <>
            <section className="py-4 md:py-10">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
                        <div className="ltr:text-end rtl:text-start mb-4 md:mb-0">
                            <Image src={imageConfig.landing.properServiceTop} alt='prop-right-1' width={430} height={320} className="object-cover rounded-lg rtl:ml-0 rtl:mr-auto ltr:mr-0 ltr:ml-auto" />
                        </div>
                        <div>
                            <HeadingOne title='We Provide Right Choice of Properties that you need' />
                            <p className="text-base mt-6">Our record-breaking deals and global reach has combined forces on a strong marketing and technology platform to create the most influential luxury real estate firm in the region is supported by the world's largest global realty brand.</p>
                        </div>
                    </div>

                    <div className="grid gap-4 grid-cols-12 items-end">
                        <div className="col-span-12 md:col-span-4 md:-mt-10 mt-0">
                            <Image src={imageConfig.landing.properServiceBottom} alt='prop-right-3' width={354} height={284} className="object-cover rounded-lg" />
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="grid grid-cols-12 md:grid-cols-3 gap-4 md:gap-6">
                                {servicesData.map((item, index: any) => (
                                    <div key={index} className="card">
                                        <CommonCard layout="layout2" item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PropertiesService;