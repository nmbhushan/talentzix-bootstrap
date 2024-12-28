const PropertyBanner = () => {
    return (
        <section className="bg-property-banner bg-bottom bg-no-repeat bg-cover relative max-h-[400px] h-100 top-[10px]">
            <div className="container">
                <div className="grid grid-cols-2 items-center">
                    <div className="col-span-1">
                        <h2 className="text-white font-semibold xl:text-[64px] leading-[88px] max-w-[450px]">Find Your perfect place</h2>
                    </div>
                    <div className="col-span-1">
                        <img src="/images/property/find-perfect-place.png" width={'646px'} height={'371'} loading="lazy" alt="Find Your perfect place" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PropertyBanner;