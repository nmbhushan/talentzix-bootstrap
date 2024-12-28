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
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";

const LoginToggle = (text: any) => {
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


    return (
        <><Link href={'/login'} className={`bg-primary-hover text-primary-foregroundHover  min-w-[100px] h-[36px] ${buttonVariants({ variant: 'default' })}`}>Login</Link>
            {/* <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="min-w-[120px] ">{text.text}</Button>
                    </DialogTrigger>
                    <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 grid place-items-center overflow-y-auto">
                        <DialogContent className="max-w-[900px] p-3 rounded-lg max-h-[90vh]">
                        
                            <DialogDescription>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <img src={'/images/login-bg.png'} alt="login-bg" />
                                    </div>
                                    <div className="py-5">
                                        <div className="text-center">
                                            <img src={'/images/header-logo.svg'} width="150" height="27" loading="lazy" alt="RealCube Logo" className="block m-auto my-10" />
                                            <h1 className="text-[30px] text-foreground font-bold mb-5">Welcome Back</h1>
                                            <p className="mb-3">Login into your account</p>
                                        </div>
                                        <Form {...form}>
                                            <form
                                                onSubmit={form.handleSubmit(onSubmit)}
                                                className="space-y-2"
                                            >
                                                <FormField
                                                    control={form.control}
                                                    name="username"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-black">Username</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="example@email.com OR +971xxxxxxx"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage className="text-sm" />
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="password"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-black">Password</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="password" {...field} />
                                                            </FormControl>
                                                            <FormMessage className="text-sm" />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="flex flex-row w-[100%] justify-end">
                                                    <p className="text-[#49484c] text-[11px] font-semibold">Forgot your password ?</p>
                                                </div>
                                                <Button type="submit" className="text-center w-[100%] mt-3">
                                                    Submit
                                                </Button>
                                            </form>
                                        </Form>
                                         
                                        <div className="flex flex-row w-[100%] justify-center mt-[12px]">
                                            <p className="text-[#002C6A] text-sm">Or</p>
                                        </div>
                                        <Button type="submit" variant={'secondary'} className="text-center w-[100%] mt-3 mb-8">
                                            <img src="/images/uae-pass-icon.png" alt="UAE passs" className="pe-3" />
                                            Sign in with UAE pass
                                        </Button>
                                       

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <p className=" text-sm text-[#808186] cursor-pointer">
                                                    Create new <span className="text-[#002C6A]">Sign Up</span>
                                                </p>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[525px] h-[85%] overflow-auto ">
                                                <DialogHeader>
                                                    <DialogTitle className="text-center">Sign up</DialogTitle>
                                                </DialogHeader>
                                                <DialogDescription>
                                                    <SignupToggle />
                                                </DialogDescription>
                                                <DialogFooter>
                                                    <div className="flex flex-row w-[100%] justify-center items-center">
                                                        <p className=" text-sm text-[#808186]">
                                                            Already have an account
                                                            <DialogClose asChild>
                                                                <span className="text-[#002C6A] ml-1 cursor-pointer">
                                                                    {" "}
                                                                    Log In
                                                                </span>
                                                            </DialogClose>
                                                        </p>
                                                    </div>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </DialogDescription>
                        </DialogContent>
                    </DialogOverlay>
                </Dialog>
            </div>*/}
        </>
    );
};

export default LoginToggle;
