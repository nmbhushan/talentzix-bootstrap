import { BreadcrumbResponsive } from '@/components/landing/common/custom-ui/Breadcrumb';
import Terms from '@/components/landing/terms-condition/Terms';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'buy/rent residential and commercial properties',
    description: 'RealCube offer villas, apartments, and townhouses for residential purposes, we also have a commercial space for buying and rent at the prime location of the city.'
};
const breadcrum = [
    { href: "/", label: "Home" },  
    { label: "Terms and Conditions"},
]
export default function TermsCondition() {
    return (
        <div className="container">
            <BreadcrumbResponsive breadcrum={breadcrum} />
            <Terms />
        </div>
    );
}
