import Image from "next/image";

const Testimonial = () => {
    return (
        <>
            <section className="py-4 md:py-12 bg-cover bg-landing-testimonal relative z-10 before:bg-black-transparent before:-z-10 before:w-full before:h-full before:absolute before:top-0 ">
                <div className="container">
                    <div className="flex max-w-full justify-center">
                        <div className=" md:max-w-screen-md px-4 py-3 md:px-14 md:pt-16 relative">
                            <Image src="/images/landing/quote.png" alt='quote' width={49} height={40} className="absolute ltr:left-0 rtl:right-0 top-0 w-[47px] h-[39px] bg-center" />
                            <p className="text-xl md:text-2xl lg:text-3xl text-white">Smooth and Transparent Process. We are very much satisfied with the service of RealCube. From the tenant visit till signing off.</p>
                            <div className="flex justify-end mt-6">
                                <div className="pt-3 w-full md:w-3/6 text-end border-t-2 border-t-primary-hover">
                                    <Image src="https://exalogic-store.s3.us-east-2.amazonaws.com/al-saqer/testimonial-logo.png" alt='logo' width={400} height={300} className="w-[150px] rtl:ml-0 rtl:mr-auto ltr:mr-0 ltr:ml-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;