import { BreadcrumbResponsive } from '@/components/landing/common/custom-ui/Breadcrumb';
import Privacy from '@/components/landing/privacy-policy/PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookies Policy - Talentzix',
    description: 'Cookies Policy - Talentzix'
};
const breadcrum = [
    { href: "/", label: "Home" },  
    { label: "Cookies Policy"},
]
export default function PrivacyPolicy() {
    return (
        <div className="container mt-4">
            <BreadcrumbResponsive breadcrum={breadcrum} />
            <Privacy />
        </div>
    );
}
