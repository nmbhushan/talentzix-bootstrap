import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localeCodes } from '@/config/product.config';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: localeCodes ?? ['en'],
    // Used when no locale matches
    defaultLocale: localeCodes?.[0] ?? 'en',
    localePrefix: 'as-needed', //https://next-intl-docs.vercel.app/docs/routing
    // localeDetection: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);