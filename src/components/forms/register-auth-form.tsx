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
const RegisterAuthForm = () => {
    const signupSchema = z.object({
        Customer_type: z.string(),
        first_name: z
            .string({ required_error: 'First Name is required' })
            .min(2, { message: "First Name must be atleast two characters" }),
        last_name: z
            .string({ required_error: 'Last Name is required' })
            .min(2, { message: "Last Name must be atleast 2 characters" }),
        email: z.string({ required_error: 'Email is required' }).email({ message: "Enter valid email" }),
        password: z.string({ required_error: 'Password is required' }).min(2, { message: "Enter Password" }),
        cpassword: z.string({ required_error: 'Confirm your password' }).min(2, { message: "Confirm Password" }),
    });

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        // defaultValues: {
        //   email: "",
        // },
    });

    function Submit(values: z.infer<typeof signupSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(Submit)}
                className="space-y-5 text-left"
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
                                    <FormLabel className="text-black">
                                        First Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="First Name" {...field} />
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
                                    <FormLabel className="text-black">
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-sm" />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <Label htmlFor="password" className="text-black">
                        {" "}
                        Mobile No <span className="text-red-600">*</span>
                    </Label>
                    <Input
                        placeholder="+91"
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black">
                                    Email ID
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Email ID" {...field} />
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
                                <FormLabel className="text-black">
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-4">
                    
                    <FormField
                        control={form.control}
                        name="cpassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black">
                                    Confirm Password
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Confirm Password" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    className="text-center w-[100%] mt-3"
                    type="submit"
                >
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}

export default RegisterAuthForm