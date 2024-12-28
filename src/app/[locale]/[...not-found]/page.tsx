import PageNotFound from "@/components/custom-ui/page-not-found/PageNotFound";
import LayoutEmptyPage from "@/components/custom-ui/layouts/LayoutEmptyPage";

export default function Page() {
    return (
        <LayoutEmptyPage>
            <PageNotFound />
        </LayoutEmptyPage>
    );
};