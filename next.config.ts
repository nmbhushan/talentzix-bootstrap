import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    images: {
        domains: [
            'exalogic-store.s3.us-east-2.amazonaws.com',
            'images.unsplash.com',
            'res.cloudinary.com',
            'resumegenie.s3.ap-south-1.amazonaws.com',
            'talentzixmedia.s3.ap-south-1.amazonaws.com'
        ],
    },
};

export default withNextIntl(nextConfig);