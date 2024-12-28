"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import BannerSearch from "./BannerSearch";
import TabsLayout from "../common/custom-ui/Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

const Banner = () => {
    const t = useTranslations('HomePage');
    const tabItems = [
        {
            title: "Buy",
            content: <BannerSearch />
        },
        {
            title: "Rent",
            content: <BannerSearch />
        },
    ];

    const services = [
        {
            value: '200k',
            desc: 'People believes in our services',
        },
        {
            value: '4.5k',
            desc: 'Properties & Houses are ready for occupancies',
        },
        {
            value: '80k',
            desc: 'Partners who have worked with us',
        },
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

    return (
        <div
            className="bg-top-left -mt-5 w-full lg:pt-20 pt-5 lg:pb-12 pb-5 sm:min-h-[480px] min-h-[960px] bg-cover bg-landing-banner">
            <div className="container">
                <h1 className="text-white  sm:text-3xl lg:text-6xl max-w-[640px] font-bold sm:leading-normal lg:leading-[74px]">{t('title')}</h1>
                <p className="text-white text-shadow-lg max-w-[600px] my-6 text-base">{t('banner_desc')}</p>
                <TabsLayout tabs={tabItems} layout="layout2" />
                <div className="flex text-white items-center text-center gap-3 sm:gap-4 md:gap-10 md:mt-10 mt-3">
                    {services.map((item, index: any) => (
                        <div key={index}>
                            <span className="mb-2 block font-semibold text-3xl">{item.value}</span>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
