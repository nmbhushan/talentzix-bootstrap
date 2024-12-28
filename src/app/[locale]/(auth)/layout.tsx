import { Metadata } from 'next';
import LayoutLanding from '@/components/custom-ui/layouts/LayoutLanding'; 

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
    return (
        <>
            {children}
        </>
    );
}
