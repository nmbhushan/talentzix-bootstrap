'use client';

import { IntlError, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

type ClientIntlProviderProps = {
    children: ReactNode;
    messages: any;
    locale: any;
};

const ClientProvider = ({ children, messages, locale }: ClientIntlProviderProps) => {
    return (
        <NextIntlClientProvider
            messages={messages}
            locale={locale}
            onError={(error) => {
                if (error instanceof IntlError && error.code === 'MISSING_MESSAGE') {
                    // Suppress MISSING_MESSAGE errors
                } else {
                    // Log other errors
                    console.error('Translation error:', error);
                }
            }}
        >
            {children}
        </NextIntlClientProvider>
    );
};

export default ClientProvider;
