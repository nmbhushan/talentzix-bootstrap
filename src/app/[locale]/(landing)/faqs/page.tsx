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
        <div className="container">
            <BreadcrumbResponsive breadcrum={breadcrum} />
            <Faq />
        </div>
    );
}
