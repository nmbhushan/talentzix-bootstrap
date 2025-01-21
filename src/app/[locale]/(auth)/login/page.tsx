import React, { } from "react";

import { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import LoginLayout from '@/components/landing/Login/LoginLayout'
import LoginAuthForm from "@/components/forms/login-auth-form";
import { FIX_ROUTES } from "@/config/routes.config";
import { FEATURE_CONFIG } from "@/config/portal.config";

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
            <LoginLayout
                // title={['Realcube 2.0', '']}
                // description='This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.'
                buttonText='Create an account'
                buttonURL={FIX_ROUTES.signUp}
                siteTitle='Sign In Your Account'
                buttonShow={FIX_ROUTES.signUp ? true : false}
            >
                {FEATURE_CONFIG.EmailSignIn &&
                    <LoginAuthForm />
                }
                {FEATURE_CONFIG.EmailSignIn && FEATURE_CONFIG.UAEPassLogin &&
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
                    <Link href='/dashboard' passHref>
                        <button
                            className={cn(
                                buttonVariants({
                                    variant: 'outline',
                                }),
                                'w-full hover:bg-foreground/5 hover:text-foreground transition-colors'
                            )}
                        >
                            <img src="/images/uae-pass-icon.png" alt="UAE passs" className="pe-1" />
                            Login With UAE PASS
                        </button>
                    </Link>
                }

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
        </>
    )
}