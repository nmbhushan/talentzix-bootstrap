// SiteFooter.tsx
'use client'
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface FooterLink {
    title: string
    href: string
}

interface FooterProps {
    sections?: { title: string; links: FooterLink[] }[]
    newsletterForm?: React.ReactNode // Optional newsletter form
    logoSrc: string
    companyName: string
    hideInfo?: boolean
}

export function SiteFooter({
    sections = [],
    newsletterForm,
    logoSrc,
    companyName,
    hideInfo = true,
}: FooterProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <footer className="border-t py-6">
            {!hideInfo && sections.length > 0 && (
                <div className="container max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 py-8">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <span className="text-sm font-medium text-foreground">
                                {section.title}
                            </span>
                            <ul className="mt-4 space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="mx-auto flex items-center justify-center">
                        <Image
                            src={logoSrc}
                            alt={`${companyName} logo`}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            )}

            <div className="container max-w-6xl flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">
                    <Link
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-regular underline underline-offset-4"
                    >
                        © {companyName}. All rights reserved.
                    </Link>
                </p>
            </div>
        </footer>
    )
}
