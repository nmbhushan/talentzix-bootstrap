import { Metadata } from 'next';
import LayoutLanding from '@/components/custom-ui/layouts/LayoutLanding';
import { FIXED_PAGES_CONFIG } from '@/config/portal.config';
import { Navbar } from '@/components/theme-ui/Navbar';
import { Footer } from '@/components/theme-ui/Footer';
import { ScrollToTop } from '@/components/theme-ui/ScrollToTop';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
    if (FIXED_PAGES_CONFIG.landing.enable) {
        return (
            <>
                <Navbar />
                {children}
                <Footer />
                <ScrollToTop />
            </>
            // <LayoutLanding>
            //     {children}
            // </LayoutLanding>
        );
    } else {
        return (
            <>
                {children}
            </>
        );
    }
}
