import { Button } from "../ui/button";

const LoginBg = ({bgImg,topbarIcon,topbarText,bottomIcon,bottomText}:any) => {
    return (
        <>
            <div className="relative">
                <img src={`/images/${bgImg}`} alt="login-bg" className="md:min-h-[600px]" />
                <div className="absolute p-5 bottom-2">
                    <Button variant="outline" className="mb-3 md:mb-4 bg-white text-primary border-none flex rounded-full p-3 min-w-[150px] h-auto px-1 pe-5 py-1 justify-start">
                        <img src={`/images/${topbarIcon}`} width="47" height="47" loading="lazy" alt="Flash Circle" />
                        {topbarText}</Button>
                    <div className="mt-2 rounded-lg py-3 px-4 bg-primary/40 [backdrop-filter:blur(16.718px)] max-w-[250px] text-white">
                        <div> <img src={`/images/${bottomIcon}`} width="49" height="45" loading="lazy" alt="Register Search" /></div>
                        <p className="mt-4">{bottomText}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginBg;