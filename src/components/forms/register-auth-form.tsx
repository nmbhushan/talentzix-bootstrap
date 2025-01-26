"use client"
import React from 'react'
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createAPIURLAndGetDataQryParams } from '@/lib/axios/apis';
import axiosInstance from '@/lib/axios/axios';
import endpoint from '@/lib/axios/endpoints';
const RegisterAuthForm = () => {

    const formSchema = z
        .object({
            first_name: z.string().min(2, {
                message: "Name must be at least 2 characters.",
            }),
            last_name: z.string().min(2, {
                message: "Name must be at least 2 characters.",
            }),
            email: z.string().email({
                message: "Please enter a valid email address.",
            }),
            password: z.string().min(8, {
                message: "Password must be at least 8 characters.",
            }),
            confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords don't match",
            path: ["confirmPassword"],
        })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // console.log("🚀 ~ onSubmit ~ values:", values)
        const payload = {
            "email": values.email,
            "lang": "en",
            "fullName": values.first_name + " " + values.last_name,
            "password": values.password,
            "termAgreed": true,
            "promos": false,
            // "captcha": "string",
            // "captchaToken": "string"
        }

        createAPIURLAndGetDataQryParams(
            axiosInstance.post,
            endpoint.userReg,
            payload,
            null,
        ).then((response) => {
            console.log("🚀 ~ ).then ~ response:", response)
            // console.log("🚀 ~ ).then ~ response:", response)
            if (response.status === 200) {
                // setSuccess(true)
                setTimeout(() => {
                    // router.back();
                }, 2000);
            } else {
                console.log('error', response);

            }
        }).catch((e) => {
            console.log('error', e);
        })

    }


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 md:space-y-4 max-w-[410px] text-left mx-auto"
            >
                {/* <FormField
                    control={form.control}
                    name="Customer_type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-black'>Customer Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Customer type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="light">Individual</SelectItem>
                                    <SelectItem value="dark">Organization</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}

                <div className=" flex items-center justify-center gap-6 mt-4">
                    <div className="flex flex-col w-full">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
{/*                                     <FormLabel className="text-black"> */}
{/*                                         First Name */}
{/*                                     </FormLabel> */}
                                    <FormControl>
                                        <Input className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0" placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-sm" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem>
{/*                                     <FormLabel className="text-black"> */}
{/*                                         Last Name */}
{/*                                     </FormLabel> */}
                                    <FormControl>
                                        <Input className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0" placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-sm" />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* <div className="mt-4">
                    <Label htmlFor="mob" className="text-black">
                        {" "}
                        Mobile No <span className="text-red-600">*</span>
                    </Label>
                    <Input
                        placeholder="+91"
                        className="mt-2"
                    />
                </div> */}

                <div className="mt-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
{/*                                 <FormLabel className="text-black"> */}
{/*                                     Email ID */}
{/*                                 </FormLabel> */}
                                <FormControl>
                                    <Input className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0" placeholder="Email ID" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
{/*                                 <FormLabel className="text-black"> */}
{/*                                     Password */}
{/*                                 </FormLabel> */}
                                <FormControl>
                                    <Input className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0" type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-4">
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
{/*                                 <FormLabel className="text-black"> */}
{/*                                     Confirm Password */}
{/*                                 </FormLabel> */}
                                <FormControl>
                                    <Input className="h-[52px] bg-[#F2F2F2] rounded-[8px] text-[14px] text-[#1C1C1C] border-0" type="password" placeholder="Confirm Password" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    className="h-[52px] rounded-[8px] bg-[#6144A5] font-medium text-[20px] text-white text-center w-[100%] mt-3"
                    type="submit"
                >
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}

export default RegisterAuthForm