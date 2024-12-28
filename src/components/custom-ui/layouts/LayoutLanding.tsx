import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Header from '@/components/landing/common/Header';
import BannerSearch from '@/components/landing/sections/Banner';
import ResponsiveHeader from '@/components/landing/common/ResponsiveHeader';
import Footer from '@/components/landing/common/Footer';
// import Header from '@/components/Header';

export default function LayoutLanding({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Header />
            <main className='mt-[73px] pt-6 pb-12'>
                {children}
            </main>
            <Footer />
        </>
    );
}