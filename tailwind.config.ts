import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1200px',
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif', 'var(--font-poppins)'],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    hover: 'hsl(var(--primary-hover))',
                    foregroundHover: 'hsl(var(--primary-foreground-text))',
                    foregroundHoverText: 'hsl(var(--primary-foreground-hover-text))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                failure: {
                    DEFAULT: 'hsl(var(--failure))',
                    foreground: 'hsl(var(--failure-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))',
                },
                result: {
                    DEFAULT: 'hsl(var(--result))',
                    foreground: 'hsl(var(--result-foreground))',
                },
                action: {
                    DEFAULT: 'hsl(var(--action))',
                    foreground: 'hsl(var(--action-foreground))',
                },
                tertiary: {
                    DEFAULT: 'hsl(var(--tertiary))',
                    foreground: 'hsl(var(--tertiary-foreground))',
                },
                status: {
                    DEFAULT: 'hsl(var(--status))',
                    foreground: 'hsl(var(--status-foreground))',
                },
                sidebar: {
                    background: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    primaryForeground: 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    accentForeground: 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
                chart: {
                    1: 'hsl(var(--chart-1))',
                    2: 'hsl(var(--chart-2))',
                    3: 'hsl(var(--chart-3))',
                    4: 'hsl(var(--chart-4))',
                    5: 'hsl(var(--chart-5))',
                },
                'black-transparent': "rgba(41, 42, 46, 0.91)",
                dark: '#49484c',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            backgroundImage: {
                'landing-banner-old': "url('/images/landing/banner-bg.png')",
                'landing-discover': "url('/images/landing/view-360.png')",
                'landing-properties-value': "url('/images/landing/sla-bg-img.png')",
                'landing-testimonal': "url('/images/landing/testimonial-banner.png')",
                'property-banner': "url('/images/property/property-list-banner.png')",
                'contact-banner': "url('/images/landing/contact-banner.png')",
                'landing-banner': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/banner-bg.webp')",
                'menu-style': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/activeness.webp')",
                'vertical-bg': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/vertical-bg.webp')",
                'resume-bg': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/resume-bg.webp')",
                'shape-white': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/shape-white.webp')",
                'shape-grey': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/shape-grey.webp')",
                'empower-bg': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/empower-bg.webp')",
                'news-bg': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/news-bg.webp')",
                'cover-bg': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/cover-bg.webp')",
                'feedback-bg': "url('https://resumegenie.s3.ap-south-1.amazonaws.com/landing/feedback-banner.webp')",
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}

export default config
