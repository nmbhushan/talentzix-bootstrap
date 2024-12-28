import { TypographyH3 } from "@/components/typography/typography";

export default function LayoutDashboardPage({ children, pageTitle, headerElement }: { children?: React.ReactNode, pageTitle: string, headerElement?: any }) {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <TypographyH3 className="">{pageTitle}</TypographyH3>
            {children}
        </div>
    );
}
