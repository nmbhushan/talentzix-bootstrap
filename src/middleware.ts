import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { localeCodes } from '@/config/product.config';
import { disabledFixRoutes } from './helpers/routeHelper';

// export default createMiddleware(routing);
const intlMiddleware = createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    // matcher: ['/', '/(ar|en)/:path*']

    matcher: [
        // Match all pathnames except for
        // - … if they start with `/api`, `/_next` or `/_vercel`
        // - … the ones containing a dot (e.g. `favicon.ico`)
        "/((?!api|_next|_vercel|.*\\..*).*)",
    ],
};

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const pathMatched = disabledFixRoutes?.some((item: any) => (pathname === item) || (pathname === ('/ar' + item)))
    if (pathMatched) {
        req.nextUrl.pathname = "/not-found"; //temp url (no such url is there) just to open not found page
        return NextResponse.redirect(req.nextUrl);
    }
    return intlMiddleware(req);
}


// const handleI18nRouting = createMiddleware(routing);
// export default function middleware(request: NextRequest) {
//     const { pathname } = request.nextUrl;
//     const allLocales = localeCodes ?? ['en']
//     const shouldHandle =
//         pathname === '/' ||
//         new RegExp(`^/(${allLocales.join('|')})(/.*)?$`).test(
//             request.nextUrl.pathname
//         );
//     if (!shouldHandle) return;

//     return handleI18nRouting(request);
// }

