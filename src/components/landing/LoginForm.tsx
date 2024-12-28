"use client";
import React, { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
import SignupToggle from "@/components/landing/SignupToggle";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import LoginBg from "./LoginBg";
import LoginLayout from "@/components/custom-ui/layouts/LayoutAuth";
const LoginForm = (text: any) => {
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
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 text-left"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black text-sm">Email / Mobile number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="example@email.com OR +971xxxxxxx"
                                        {...field}
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
                                    <FormLabel className="text-black text-sm">Password</FormLabel>
                                    <FormControl>
                                        <Input type={isPasswordVisible ? 'text' : 'password'} placeholder="password" {...field} />
                                    </FormControl>
                                    <div className="absolute top-9 ltr:right-4 rtl:left-4 cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? <div><FaRegEye /></div> : <div><FaRegEyeSlash /></div>}  </div>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="flex flex-row w-[100%] justify-end">
                        <p className="text-[#49484c] text-[12px] font-medium">Forgot your password ?</p>
                    </div>
                    <Button type="submit" className="text-center w-[100%] mt-3">
                        Log In
                    </Button>
                </form>
            </Form>
            {/*  */}
            <div className="flex flex-row w-[100%] justify-center mt-[12px]">
                <p className="text-[#002C6A] text-sm">Or</p>
            </div>
            <Button type="submit" variant={'secondary'} className="text-center w-[100%] mt-3 mb-5">
                <img src="/images/uae-pass-icon.png" alt="UAE passs" className="pe-1" />
                Sign in with UAE pass
            </Button>
            {/* the signup starting */}
        </>
    );
}

export default LoginForm;