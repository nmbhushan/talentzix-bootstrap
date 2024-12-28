import HeadingOne from "../common/custom-ui/HeadingOne";
import TabsLayout from "../common/custom-ui/Tabs";

const PopularSearch = () => {
    const dubaiApartments = [
        { name: 'Dubai Marina' },
        { name: 'Jumeirah Village Circle' },
        { name: 'Jumeirah Lake Towers' },
        { name: 'Downtown Dubai' },
        { name: 'Business Bay' },
    ]
    const abudhabiApartments = [
        { name: 'Al Reem Island' },
        { name: 'Al Raha Beach' },
        { name: 'Khalifa City A' },
        { name: 'Al Khalidiyah' },
        { name: 'Corniche Area' },
    ]
    const otherEmirates = [
        { name: 'Sharjah' },
        { name: 'Ajman' },
        { name: 'Ras Al Khaimah' },
        { name: 'Al Sawan' },
        { name: 'Al Nahda (Sharjah)' },
    ]
    const tabItems = [
        {
            title: "For Sale",
            content: (
                <>
                    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div>
                            <h4 className="text-base font-bold underline mb-5">Dubai Apartments</h4>
                            {dubaiApartments.slice(0, 5).map((item, index:any) => (
                                <div key={index} className="card">
                                    <ul>
                                        <li className="mb-3">{item.name}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-base font-bold underline mb-5">Abu Dhabi Apartments                            </h4>
                            {abudhabiApartments.slice(0, 5).map((item, index:any) => (
                                <div key={index} className="card">
                                    <ul>
                                        <li className="mb-3">{item.name}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-base font-bold underline mb-5">Apartments in other Emirates</h4>
                            {otherEmirates.slice(0, 5).map((item, index:any) => (
                                <div key={index} className="card">
                                    <ul>
                                        <li className="mb-3">{item.name}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "To Rent",
            content: ''
        },
    ];
    return (
        <>
            <section className="py-4 md:py-10 bg-primary/95 text-white">
                <div className="container">
                    <HeadingOne title="Popular searches in the UAE" />
                    <div className="md:mt-4 mt-2">
                        <TabsLayout tabs={tabItems} layout="layout1" theme="dark" align='center' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default PopularSearch;