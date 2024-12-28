'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { MultiStepForm, StepConfig } from '../../../ui/multi-step-form'
import { cn } from '../../../../lib/utils'
import { Button, buttonVariants } from '../../../ui/button'
import {
    TypographyH1,
    TypographyH2,
    TypographyP,
} from '../../../typography/typography'
import { FlipWords } from '../../../ui/flip-words'
import Head from 'next/head'

interface SignupPageProps {
    steps: StepConfig[]
    schema: z.ZodSchema<any>
    onSubmit: SubmitHandler<any>
    siteConfig?: {
        logo: string
        name: string
        title: string
        description: string
    }
    backgroundImage?: string
    flipWords?: string[]
    metaData?: Metadata
    termsLink?: string
    privacyLink?: string
}

export default function SignupPage({
    steps,
    schema,
    onSubmit,
    siteConfig = {
        logo: '/images/default-logo.png',
        name: 'Default Site',
        title: '',
        description: '',
    },
    backgroundImage = '',
    flipWords = ['Efficiency', 'Compliance', 'Streamlined Workflows'],
    metaData,
    termsLink = '/terms',
    privacyLink = '/privacy',
}: SignupPageProps) {
    return (
        <div className="w-full min-h-screen overflow-hidden flex flex-col lg:flex-row">
            {metaData && (
                <Head>
                    <title>{metaData.title as string}</title>
                    <meta
                        name="description"
                        content={metaData.description as string}
                    />
                </Head>
            )}

            {/* Left Panel with Flip Words */}
            <div
                className="flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex-col p-8 lg:p-16 text-white dark:border-r 
                   bg-gradient-to-b from-[#FFFDE7] to-white dark:bg-gradient-to-b dark:from-[#2a2a1f] dark:to-[#1a1a0f]"
            >
                <Button
                    variant="outline"
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'absolute top-4 right-4 md:top-8 md:right-8 text-sm lg:hidden',
                    )}
                >
                    Log in
                </Button>

                <div className="relative z-20 mb-8">
                    <Image
                        width={120}
                        height={120}
                        src={siteConfig.logo}
                        alt={siteConfig.name}
                        className="dark:brightness-0 dark:invert brightness-0 saturate-0"
                    />
                </div>

                <div className="flex flex-col justify-center h-full">
                    <blockquote className="space-y-2 max-w-[90%] lg:max-w-full">
                        <TypographyH1 className="text-3xl text-secondary-foreground lg:text-4xl font-bold leading-tight tracking-tight text-left">
                            Join Our Platform with
                        </TypographyH1>
                        <TypographyH1 className="text-3xl ml-[-7px] text-secondary-foreground lg:text-4xl font-bold leading-tight tracking-tight text-left">
                            <FlipWords words={flipWords} />
                        </TypographyH1>
                        <TypographyH2 className="text-sm font-light text-secondary-foreground/40 lg:text-base leading-relaxed pt-4 text-left">
                            Set up your account to start using advanced workflow
                            tools.
                        </TypographyH2>
                    </blockquote>
                </div>
            </div>

            {/* Right Panel for Form */}
            <div className="flex w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-background flex-col justify-center lg:p-12 xl:p-16">
                <div className="flex lg:hidden justify-end p-4">
                    <Button
                        variant="outline"
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'absolute top-4 right-4 md:top-8 md:right-8 text-sm',
                        )}
                    >
                        Log in
                    </Button>
                </div>

                <div className="mx-auto  w-full max-w-lg p-10 sm:w-[90%] md:w-[500px] lg:p-0 space-y-6">
                    <div className="flex flex-col ml-5 space-y-4 text-center md:text-left">
                        <TypographyH1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground/90">
                            Create Your Account
                        </TypographyH1>
                        <TypographyP className="text-sm lg:text-base text-muted-foreground/80">
                            Fill in your details to get started with our
                            platform.
                        </TypographyP>
                        <div className="h-[2px] w-8 bg-primary/60 mt-2 mx-auto md:mx-0" />
                    </div>

                    <div className="w-full">
                        <MultiStepForm
                            schema={schema}
                            steps={steps}
                            onSubmit={onSubmit}
                        />
                    </div>
                    <TypographyP className="px-4 md:px-8 text-center text-xs lg:text-sm text-muted-foreground/70">
                        By signing up, you agree to our{' '}
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
                    </TypographyP>
                </div>
            </div>
        </div>
    )
}
