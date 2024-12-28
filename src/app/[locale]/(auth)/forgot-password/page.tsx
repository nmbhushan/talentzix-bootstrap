import React, { } from "react";

import { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import LoginLayout from '@/components/landing/Login/LoginLayout'
import ForgotPasswordAuthForm from "@/components/forms/forgot-password-auth-form";
import { FIX_ROUTES } from "@/config/routes.config";

// interface IForgotPageProps {
//     backgroundImage?: string
//     flipWords?: string[]
//     customDescription?: string
//     metaData?: Metadata
//     termsLink?: string
//     privacyLink?: string,
// }

export default function ForgotPasswordPage({
    metaData,
}: any) {

    return (
        <>
            {metaData && (
                <head>
                    <title>{metaData.title as string}</title>
                    <meta name="description" content={metaData.description as string} />
                </head>
            )}
            <LoginLayout
                // title={['Realcube 2.0', '']}
                // description='This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.'
                buttonText=''
                buttonURL="/"
                siteTitle='Forgot your password'
                buttonShow={false}
            >
                <p className="text-center">Enter your email to recover your account</p>
                <ForgotPasswordAuthForm />
                {FIX_ROUTES.signUp ?
                    <p className="px-8 text-center text-sm text-muted-foreground/70">
                        Create new {' '}
                        <Link
                            href={FIX_ROUTES.signUp}
                            className="text-primary text-semibold underline underline-offset-4 hover:text-primary-hover transition-colors"
                        >
                            Sign up
                        </Link>
                    </p>
                    : ''
                }
            </LoginLayout>
        </>
    )
}