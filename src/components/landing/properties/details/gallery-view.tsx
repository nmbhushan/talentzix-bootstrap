"use client";
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryView = () => {

    const images = [
        "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/4.jpg",
        "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/community/community-1.png",
        "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/5.jpg",
        "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/property/6.webp",
        "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/community/community-4.png",
        "https://exalogic-store.s3.us-east-2.amazonaws.com/realcube-property/residential/commerical-new.png",
    ]
    const [imageLenth] = useState(images.length - 4);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-7'>
                <div className='h-[416px] rounded-lg overflow-hidden'>
                    <Image src={images[0]} alt="properties-image" width={660} height={370} className='w-full h-full object-cover' onClick={() => { setPhotoIndex(0); setIsOpen(true); }} />
                </div>
            </div>
            <div className='col-span-5 grid grid-cols-2 gap-4'>
                <div className='relative overflow-hidden h-[200px] rounded-lg' onClick={() => { setPhotoIndex(1); setIsOpen(true); }}>
                    <Image src={images[1]} alt="properties-image" width={266} height={200} className='w-full  h-full object-cover' />
                </div>
                <div className='relative overflow-hidden h-[200px] rounded-lg' onClick={() => { setPhotoIndex(2); setIsOpen(true); }}>
                    <Image src={images[2]} alt="properties-image" width={266} height={200} className='w-full h-full object-cover' />
                </div>
                <div className='relative overflow-hidden h-[200px] rounded-lg' onClick={() => { setPhotoIndex(3); setIsOpen(true); }}>
                    <Image src={images[3]} alt="properties-image" width={266} height={200} className='w-full h-full object-cover' />
                </div>
                <div className='relative overflow-hidden h-[200px] rounded-lg' onClick={() => { setPhotoIndex(4); setIsOpen(true); }}>
                    <Image src={images[4]} alt="properties-image" width={266} height={200} className='w-full h-full object-cover'/>
                    <div className='bg-black/25 text-white font-semibold text-2xl absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center'>+{imageLenth}</div>
                </div>
            </div>
        </div>
        {isOpen && (
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
            }
            />
        )}
        </>
    );
}

export default GalleryView;