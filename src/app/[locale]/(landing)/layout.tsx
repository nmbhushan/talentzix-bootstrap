import { Metadata } from 'next';
import LayoutLanding from '@/components/custom-ui/layouts/LayoutLanding';
import { FIXED_PAGES_CONFIG } from '@/config/portal.config';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
    if (FIXED_PAGES_CONFIG.landing.enable) {
        return (
            <>
                {children}
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
