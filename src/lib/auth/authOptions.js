import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                accessToken: { label: "Access Token", type: "text" },
                refreshToken: { label: "Refresh Token", type: "text" },
                expiresAt: { label: "Expires At", type: "number" },
                user: { label: "User Info", type: "text" },
            },
            async authorize(credentials) {
                if (credentials) {
                    try {
                        const { accessToken, refreshToken, expiresAt, user } = credentials;

                        // Validate required data
                        if (!accessToken || !refreshToken || !expiresAt || !user) {
                            throw new Error("Invalid credentials provided.");
                        }

                        // Parse the user information
                        const parsedUser = JSON.parse(user);

                        // Return only the user object for NextAuth
                        return {
                            accessToken,
                            refreshToken,
                            expiresAt: parseInt(expiresAt), // Ensure expiresAt is a number
                            data: parsedUser, // Add the user object here
                        };
                    } catch (error) {
                        console.error("Authorization failed:", error);
                        return null;
                    }
                }
                return null;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // Add user and token data on initial sign-in
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresAt = user.expiresAt;
                token.user = user;
            }

            // Refresh token if expired
            // if (Date.now() > (token.expiresAt || 0)) {
            //     try {
            //         const response = await fetch(
            //             `${process.env.NEXT_PUBLIC_API_URL}/api/refresh-token`,
            //             {
            //                 method: "POST",
            //                 headers: {
            //                     "Content-Type": "application/json",
            //                 },
            //                 body: JSON.stringify({ refreshToken: token.refreshToken }),
            //             }
            //         );

            //         const refreshedTokens = await response.json();

            //         token.accessToken = refreshedTokens.accessToken;
            //         token.refreshToken = refreshedTokens.refreshToken;
            //         token.expiresAt = Date.now() + refreshedTokens.expiresIn * 1000;
            //     } catch (error) {
            //         console.error("Token refresh failed:", error);
            //         return Promise.reject(new Error("Refresh token expired"));
            //     }
            // }

            return token;
        },

        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.expiresAt = token.expiresAt;
            session.user = token.user;

            return session;
        },
    },

    pages: {
        signIn: "/login", // Redirect for sign-in
        error: "/login", // Redirect for errors
    },

    session: {
        strategy: "jwt", // Use JWT for session strategy
    },

    secret: process.env.NEXTAUTH_SECRET, // Strong secret for JWT signing
};
