import React, { } from "react";

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import LoginLayout from '@/components/landing/Login/LoginLayout'
import LoginAuthForm from "@/components/forms/login-auth-form";
import { siteConfig } from "@/config/siteConfig";

export default function LayoutAuth({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <LoginLayout
                description={siteConfig?.description}
                title={[siteConfig?.name, '']}
                buttonText=''
                buttonURL="/"
                siteTitle=''
                buttonShow={true}
            >
                {children}
            </LoginLayout>
        </>
    )
}