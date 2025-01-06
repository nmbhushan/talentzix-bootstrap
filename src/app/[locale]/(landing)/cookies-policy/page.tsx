import { BreadcrumbResponsive } from '@/components/landing/common/custom-ui/Breadcrumb';
import Privacy from '@/components/landing/privacy-policy/PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'RealCube offer villas, apartments, and townhouses for residential purposes, we also have a commercial space for buying and rent at the prime location of the city.'
};
const breadcrum = [
    { href: "/", label: "Home" },  
    { label: "Privacy Policy"},
]
export default function PrivacyPolicy() {
    return (
        <div className="container">
            <BreadcrumbResponsive breadcrum={breadcrum} />
            <Privacy />
        </div>
    );
}
