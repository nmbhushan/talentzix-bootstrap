import React, { } from "react";

import { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import LoginLayout from '@/components/landing/Login/LoginLayout'
import RegisterAuthForm from "@/components/forms/register-auth-form";
import LoginAuthForm from "@/components/forms/login-auth-form";
import { FIX_ROUTES } from "@/config/routes.config";
import { FEATURE_CONFIG } from "@/config/portal.config";

// interface RegisterPageProps {
//     backgroundImage?: string
//     flipWords?: string[]
//     customDescription?: string
//     metaData?: Metadata
//     termsLink?: string
//     privacyLink?: string
// }

export default function RegisterPage({
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
                buttonShow={false}
                buttonText=''
                buttonURL=""
                siteTitle='Sign Up'
                size='lg'
            >
                {FEATURE_CONFIG.EmailSignup &&
                    <RegisterAuthForm />
                }

                {FEATURE_CONFIG.EmailSignup && FEATURE_CONFIG.UAEPassLogin &&
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/40" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground/70">
                                or
                            </span>
                        </div>
                    </div>
                }
                {FEATURE_CONFIG.UAEPassLogin &&
                    <button
                        className={cn(
                            buttonVariants({
                                variant: 'outline',
                            }),
                            'w-full hover:bg-foreground/5 hover:text-foreground transition-colors'
                        )}
                    >
                        <img src="/images/uae-pass-icon.png" alt="UAE passs" className="pe-1" />
                        
                    </button>
                }
                {FIX_ROUTES.signIn ?
                    <p className="px-8 text-center text-sm text-muted-foreground/70">
                        Already have an account ? {' '}
                        <Link
                            href={FIX_ROUTES.signIn}
                            className="text-primary text-semibold underline underline-offset-4 hover:text-primary-hover transition-colors"
                        >
                            Login
                        </Link>
                    </p>
                    : <></>
                }
            </LoginLayout>
        </>
    )
}