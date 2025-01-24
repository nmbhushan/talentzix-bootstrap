"use client";

import AuthContext from "@/lib/contexts/authContext";
import { useContactStore } from "@/lib/store/contactStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { createAPIURLAndGetData } from "../axios/apis";
import axiosInstance from "../axios/axios";
import endpoint from "../axios/endpoints";
// import { useModalStore } from "../store/generalModalStore";
import Image from "next/image";
import { TypographyH3, TypographyH4 } from "@/components/typography/typography";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [errorType, setErrorType] = useState<'timeout' | 'server-error' | null>()
    const router = useRouter();
    // const setContactState = useSetRecoilState(contactData);
    // const setGeneralModalState = useSetRecoilState(generalModalState);
    const { profileData, fullData, isLoading, setProfileData, setLoading: setContactLoading } = useContactStore();
    // const openModal = useModalStore((state) => state.openModal);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
            // signIn(); // Redirect to login if not authenticated
        } else if (status === "authenticated") {
            //get profile data , check token is working then store in atom, else show popup and logout if token is invalid i.e 401 comes
            createAPIURLAndGetData(
                axiosInstance.get,
                endpoint.getMyProfile,
                null,
                null,
            ).then((response) => {
                if (response?.status === 401) {

                    setError(true)
                    setErrorType('timeout')

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

                } else if (response?.status === 200) {


                    const profileData = {
                        firstName: response?.data?.firstname,
                        lastName: response?.data?.lastname,
                        fullName: response?.data?.parentcustomerid_account?.name,
                        email: response?.data?.aqr_brokermailid
                    }

                    const contactInfo: any = {
                        profileData,
                        fullData: response?.data
                    };

                    if (response?.data?.statuscode_FormattedValue === "Unapproved Broker") {
                        // openModal({
                        //     title: '',
                        //     size: "large",
                        //     position: "center",
                        //     showCloseIcon: false,
                        //     logoutButton: {
                        //         text: 'Ok'
                        //     },
                        //     content: <>
                        //         <Image src={'/images/dashboard/under-approval.png'} alt="404 image" width={246} height={246} className="mb-8 mx-auto" />
                        //         <TypographyH3 className="mb-3"> Your profile is under approval! We will stay in touch with you.</TypographyH3>
                        //         <p className="text-base  mb-3"> For Any Enquiry Contact Support :   </p>
                        //         <div className="text-sm  mb-1 flex justify-center items-center space-x-6 flex-wrap space-y-2 sm:space-y-0">
                        //             <div className="flex items-center"><MdEmail className="h-5 w-5 text-primary me-2" /> <Link href={`email:${siteConfig.contact.email}`} className="text-muted-foreground ">{siteConfig.contact.email}</Link></div>
                        //             <div className="flex items-center"><FaPhoneAlt className="h-4 w-4 text-primary me-2" /> <Link href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground ">{siteConfig.contact.phone}</Link></div>
                        //         </div>
                        //     </>,
                        // });
                    } else {
                        setProfileData(contactInfo)
                        setLoading(false);
                    }


                } else {
                    //show popup
                    // setContactState(defaultContactState)
                    setErrorType('server-error')
                    // setTimeout(() => {
                    //     signOut({ callbackUrl: "/login" });
                    // }, 2000);
                }
            }).catch((e) => {
                setErrorType('server-error')
                // console.log(e);

                //show popup
                // setContactState(defaultContactState)
                // setTimeout(() => {
                //     signOut({ callbackUrl: "/login" });
                // }, 2000);
            })

        }
    }, [status]);

    // if (loading || status === "loading") {
    //     return <>
    //         <FullPageLoader text={'Loading...'} />
    //     </>
    // }

    // return <>{children}</>;

    return (
        <AuthContext.Provider value={{ authLoading: loading }}>
            {children}
            {/* <GeneralModal
                isOpen={error}
                onClose={() => setError(false)}
                size="large"
                position="center"
                // title="Sample Modal"
                showCloseIcon={false}
                content={
                    <div className="md:w-[350px] ">
                        {errorType === 'server-error' ?
                            <>
                                <TypographyH4>Server error !</TypographyH4>
                                <p>Please try again after sometime. If the problem persists, please contact support.</p>

                            </>
                            :
                            errorType === 'timeout' ?
                                <>
                                    <TypographyH4>Session timeout !</TypographyH4>
                                    <p>You have been logged out.</p>
                                </>

                                :
                                <>
                                    <TypographyH4>Something went wrong !</TypographyH4>
                                    <p>Please try again after sometime. If the problem persists, please contact support.</p>
                                </>

                        }
                    </div>
                }
                // okButton={{
                //     text: 'Ok',
                //     onClick: () => {
                //         console.log('Confirmed')
                //         setError(false)
                //     },
                // }}
                logoutButton={{
                    text: 'Ok'
                }}
                cancelButton={{
                    text: 'Cancel',
                    onClick: () => setError(false),
                }}
            /> */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
