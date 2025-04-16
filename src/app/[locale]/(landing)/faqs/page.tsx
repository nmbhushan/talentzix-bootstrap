import { BreadcrumbResponsive } from '@/components/landing/common/custom-ui/Breadcrumb';
import Terms from '@/components/landing/terms-condition/Terms';

import Faq from '@/components/landing/faq/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - Talentzix',
    description: 'FAQ - Talentzix'
};
const breadcrum = [
    { href: "/", label: "Home" },  
    { label: "FAQ"},
]
export default function TermsCondition() {
    return (
        <div className="container mt-4 mb-10">
            <BreadcrumbResponsive breadcrum={breadcrum} />
            <div className="mb-5">
                <Faq />
            </div>
        </div>
    );
}
