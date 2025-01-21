"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { FIX_ROUTES } from "@/config/routes.config";
const LoginAuthForm = () => {
    const loginSchema = z.object({
        username: z
            .string()
            .min(2, {
                message: "Username must be at least 2 characters.",
            })
            .email({ message: "Enter Valid Name" }),
        password: z.string({ required_error: 'Password is required' }).min(2, { message: "Enter Password" }),
    });

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: z.infer<typeof loginSchema>) {

        // await signIn('credentials', {
        //     redirect: false,
        //     email: data.username,
        //     password: data.password
        // }).then((response: any) => {
        //     if (response?.error === null) {
        //         // console.log("No errors")
        //         // router.replace('/dashboard')
        //         // setError(false);
        //     } else if (response?.error !== null) {
        //         // console.log("Wrong credentials")
        //         // console.log("Response error", response?.error)
        //         // setError(true)
        //     }
        // }).catch((error: any) => {
        //     console.log(error)
        // })
    }
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <>
            {/* <UserAuthForm /> */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2 md:space-y-4 max-w-[410px] text-left"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel className=" ">Email / Mobile number</FormLabel> */}
                                <FormControl>
                                    <Input
                                        placeholder="Username"
                                        {...field}
                                        value={field.value ?? ""}
                                        className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <div className="relative">
                                <FormItem>
                                    <FormControl>
                                        <Input className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0" type={isPasswordVisible ? 'text' : 'password'} placeholder="Password" {...field} value={field.value ?? ""} />
                                    </FormControl>
                                    <div className="absolute top-2 ltr:right-4 rtl:left-4 cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}  </div>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    {FIX_ROUTES.forgotPassword ?
                        <div className="flex flex-row w-[100%] justify-end">
                            <Link href={FIX_ROUTES.forgotPassword} className="hover:text-primary-hover text-[#0074FF] text-[12px]">Forgot your password ?</Link>
                        </div>
                        : ''
                    }
                    <Link href='/dashboard' passHref>
                        <Button type="submit" className="h-[52px] rounded-[8px] bg-[#6144A5] font-medium text-[20px] text-white text-center w-[100%] mt-3">
                            Sign In
                        </Button>
                    </Link>
                </form>
            </Form>
        </>
    );
}

export default LoginAuthForm;