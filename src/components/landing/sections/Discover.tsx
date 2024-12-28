import Image from "next/image";

const Discover = () => {
    return (
        <>
            <section className="py-4 md:pb-12">
                <div className="container">
                    <div className="flex items-center relative bg-cover bg-landing-discover bg-no-repeat min-h=[150px] md:min-h-[210px]">
                        <div className="p-3 md:p-7 text-white">
                            <h3 className="text-2xl md:text-3xl mb-2 font-semibold">Discover immersive 360 property tours</h3>
                            <p className="text-base">Explore properties from the comfort of your home</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Discover;