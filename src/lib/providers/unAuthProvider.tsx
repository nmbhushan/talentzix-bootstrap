"use client";

// import FullPageLoader from "@/components/dashboard/loader/FullPageLoader";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface UnAuthProviderProps {
    children: ReactNode;
}

const UnAuthProvider = ({ children, }: UnAuthProviderProps) => {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
        }
        setTimeout(() => {
            setLoading(false)
        }, 200);
    }, [status]);

    if (loading || status === "loading") {
        return <>
            Loading...
            {/* <FullPageLoader text={'Loading...'}/> */}
        </>
    }

    return <>{children}</>;
};

export default UnAuthProvider;
