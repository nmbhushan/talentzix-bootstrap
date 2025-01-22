import { signOut } from "next-auth/react";

export const logout = async () => {
    // try {
    //     await fetch("/api/auth/logout", { method: "POST" }); // Optional: Revoke token server-side
    // } catch (error) {
    //     console.error("Failed to revoke tokens:", error);
    // }

    signOut({ callbackUrl: "/login" }); // Redirect to login page
};
