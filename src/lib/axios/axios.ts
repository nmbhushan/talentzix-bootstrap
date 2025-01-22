import axios from "axios";
import { getSession, signIn, signOut } from "next-auth/react";
// import { useModalStore } from "../store/generalModalStore";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((promise) => {
        if (token) {
            promise.resolve(token);
        } else {
            promise.reject(error);
        }
    });

    failedQueue = [];
};

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + '/api', // Set your API base URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        const session: any = await getSession(); // Use NextAuth session
        const accessToken = session?.accessToken;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {

            { //TODO
                // const setMessage = useMessageStore.getState().setMessage;
            // setMessage('Unauthorized access. Please log in again.');
                // const openModal = useModalStore.getState().openModal;
                // openModal({
                //     title: '',
                //     size: "large",
                //     position: "center",
                //     showCloseIcon: false,
                //     logoutButton: {
                //         text: 'Ok'
                //     },
                //     content: '',
                //     sessionExpired: true
                // });

                setTimeout(() => {
                    signOut({ callbackUrl: "/login" }) // Log out on token refresh failure
                    return Promise.reject('Session timeout');
                }, 2000);
            }

            originalRequest._retry = true;

            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const session: any = await getSession();
                    const refreshToken = session?.refreshToken;

                    if (!refreshToken) {
                        throw new Error("No refresh token available");
                    }

                    // Refresh token
                    //TODO token
                    // const response = await axios.post(
                    //     `${process.env.NEXT_PUBLIC_API_URL}/api/refresh-token`,
                    //     { refreshToken }
                    // );
                    const response: any = {
                        data: {
                            "accessToken": "newAccessTokenHere",
                            "refreshToken": "newRefreshTokenHere",
                            "expiresIn": 3600
                        }
                    }

                    const { accessToken, expiresIn } = response.data;

                    // Update NextAuth session
                    await signIn("credentials", {
                        accessToken,
                        refreshToken,
                        expiresAt: Date.now() + expiresIn * 1000,
                        redirect: false,
                    });

                    processQueue(null, accessToken);

                    return axiosInstance(originalRequest); // Retry original request
                } catch (err) {
                    processQueue(err, null);
                    signOut(); // Log out on token refresh failure
                    return Promise.reject(err);
                } finally {
                    isRefreshing = false;
                }
            }

            return new Promise((resolve, reject) => {
                failedQueue.push({
                    resolve: (token: string) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(axiosInstance(originalRequest));
                    },
                    reject: (err: any) => reject(err),
                });
            });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
