"use client";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import GeneralModal from "@/components/modal/GeneralModal";
import { Toaster } from "@/components/ui/toaster";
import ClientProvider from "./clientProviders";
// import { useMessageStore } from "../store/msgStore";
// import { generalModalState } from "@/lib/atoms/generalAtoms";
// import GeneralModal from "@/components/modal/GeneralModal";

export default function Providers({ children, messages, locale }: { children: React.ReactNode, messages: any, locale: any }) {
    // const [queryClient] = useState(() => new QueryClient());
    // const { message, setMessage, clearMessage } = useMessageStore();
    // console.log("🚀 ~ Providers ~ message:", message)

    return (
        <SessionProvider>
            {/* <QueryClientProvider client={queryClient}> */}
                <ClientProvider messages={messages} locale={locale}>
                    {children}
                </ClientProvider>
                {/* <GeneralModal /> */}
                <Toaster />
            {/* </QueryClientProvider> */}
        </SessionProvider>
    )
}