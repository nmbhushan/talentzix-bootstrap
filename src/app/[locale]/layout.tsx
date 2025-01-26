import useTextDirection from '@/hooks/useTextDirection';
import { Locale, TextDirection } from '@/types/types';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.scss";
import { Metadata } from 'next';
import LayoutLanding from '@/components/custom-ui/layouts/LayoutLanding';
import { Poppins } from 'next/font/google'
import { MAINTENANCE_MODE, PORTAL_CONFIG } from '@/config/portal.config';
import MaintenancePage from '@/components/custom-ui/maintenance-mode/MaintenancePage';
import LayoutEmptyPage from '@/components/custom-ui/layouts/LayoutEmptyPage';
import ConfigNotFound from '@/components/custom-ui/config-not-found/ConfigNotFound';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
    subsets: ['latin'], // Choose appropriate subsets like 'latin' or 'latin-ext'
    weight: ['400', '500', '700'], // Select font weights as needed
    variable: '--font-poppins', // Create a CSS variable to easily apply the font
});
export const metadata: Metadata = {
    title: "Talentzix : Craft Your Dream Resume in 10 Minutes with GenA",
    description: "Talentzix : Craft Your Dream Resume in 10 Minutes with GenA",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
    const { locale } = await params; // Await the params object if it's a Promise

    // Providing all messages to the client side is the easiest way to get started
    const messages = await getMessages();
    const dir: TextDirection = useTextDirection(locale);

    return (
        <html lang={locale} dir={dir}>
            <body className={`${poppins.variable} font-poppins text-sm`}>
                {PORTAL_CONFIG ?
                    MAINTENANCE_MODE ?
                        <LayoutEmptyPage><MaintenancePage /></LayoutEmptyPage>
                        :
                        <NextIntlClientProvider messages={messages}>
                            <ThemeProvider>
                                 {children}
                            </ThemeProvider>
                        </NextIntlClientProvider>
                    :
                    <LayoutEmptyPage><ConfigNotFound /></LayoutEmptyPage>
                }
            </body>
        </html>
    );
}
