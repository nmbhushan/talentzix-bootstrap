import Link from "next/link";
import { FaFacebookF,FaInstagram ,FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = () => {
    const social = [
        {
            icon:<FaFacebookF/>,
            url:''
        },
        {
            icon:<FaInstagram/>,
            url:''
        },
        {
            icon:<FaXTwitter/>,
            url:''
        },
        {
            icon:<FaYoutube/>,
            url:''
        },
    ]
    return (
        <>
            <ul className="flex gap-4 items-center justify-between">
                {social.map((item, index: any) => (
                    <li key={index}>
                        <Link href={item.url} className='rounded-full w-9 h-9 p-2 bg-[rgba(255,255,255,0.4)] text-primary hover:bg-primary-hover text-lg text-center inline-block'>
                            {item.icon} 
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SocialIcons;