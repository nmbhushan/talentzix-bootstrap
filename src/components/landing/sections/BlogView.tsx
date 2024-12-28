import Image from "next/image";
import CustomCard from "../common/custom-ui/CustomCard";

const BlogView = ({ item, view, lineClamp }: any) => {
    return (
        <>
            <div className={`mb-3 w-full ${view === 'compact-view' ? 'flex gap-4' : view === 'treaser-view' ? 'mb-5' : ''} `}>
                {item.img &&
                    <div className={` ${view === 'compact-view' ? 'w-2/6 test' : ''} `}>
                        <CustomCard variant='no-space'>
                            <div className="relative">
                                <Image
                                    src={item.img}
                                    alt='' width={500} height={500}
                                    className={`w-full object-cover
                                    ${view === 'compact-view' ? 'h-[128px]' : view === 'treaser-view' ? 'h-[200px] md:h-[350px]' : view === 'full-view' ? 'h-[500px]' : 'h-[250px] md:h-[300px]' }  `}
                                />
                            </div>
                        </CustomCard>
                    </div>
                }
                <div className={` ${view === 'compact-view' ? 'w-4/6 test' : ''} `}>
                    {item.date && <span className="text-slate-500">{item.date}</span>}
                    {item.title && <h3 className={`my-2 text-base md:text-lg font-semibold ${lineClamp}`}>{item.title}</h3>}
                    {(view === 'treaser-view' || view === 'full-view') && (
                        <p className={`text-sm ${view === 'treaser-view' ? 'line-clamp-4' : ''}`}>
                            {item.description}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default BlogView;