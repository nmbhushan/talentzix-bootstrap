import React, { } from "react";

import { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import LoginLayout from '@/components/landing/Login/LoginLayout'
import LoginAuthForm from "@/components/forms/login-auth-form";
import { FIX_ROUTES } from "@/config/routes.config";
import { FEATURE_CONFIG } from "@/config/portal.config";
import OtpAuthForm from "@/components/forms/otp-auth-form"
// interface LoginPageProps {
//     backgroundImage?: string
//     flipWords?: string[]
//     customDescription?: string
//     metaData?: Metadata
//     termsLink?: string
//     privacyLink?: string
// }

export default function LoginPage({
    metaData,
    termsLink = '/terms-and-conditions',
    privacyLink = '/privacy-policy'
}: any) {

    return (
        <>
            {metaData && (
                <head>
                    <title>{metaData.title as string}</title>
                    <meta name="description" content={metaData.description as string} />
                </head>
            )}
            <div className="verify-account">
                <LoginLayout
                    siteTitle='Verify Account'
                >
                    <p className="text-[15px] text-[#000000] text-center">we will send one time password to your email id m******@3***com </p>
                    <OtpAuthForm/>

                    <p className="px-8 text-center text-[12px] text-[#000000]">
                        By clicking continue, you agree to our{' '}
                        <Link
                            href={termsLink}
                            className="underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            Terms
                        </Link>{' '}
                        and{' '}
                        <Link
                            href={privacyLink}
                            className="underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                    <p className="px-8 text-center text-[12px] text-[#000000]">
                        First time here?{' '}
                        {/* {buttonShow && */}
                        <Link
                            href={'register'}
                            className="underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            Create an account
                        </Link>
                        {/* } */}
                    </p>
                </LoginLayout>
            </div>
        </>
    )
}