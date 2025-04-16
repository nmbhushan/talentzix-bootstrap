import { BreadcrumbResponsive } from '@/components/landing/common/custom-ui/Breadcrumb';
import Terms from '@/components/landing/terms-condition/Terms';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions - Talentzix.ai',
    description: 'Read the terms and conditions for using Talentzix.ai, an AI-powered resume-building platform. Learn about our services, user responsibilities, payment terms, and more.',
    keywords: 'AI resume builder terms, Talentzix terms and conditions, resume platform policies, subscription details, user responsibilities'

};
const breadcrum = [
    { href: "/", label: "Home" },  
    { label: "Terms and Conditions"},
]
export default function TermsCondition() {
    return (
        <div className="container mt-4">
            <BreadcrumbResponsive breadcrum={breadcrum} />
            <Terms />
        </div>
    );
}
