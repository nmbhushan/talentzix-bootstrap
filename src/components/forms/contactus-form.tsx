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
import { Textarea } from '../ui/textarea';
import LabelError from '../landing/common/custom-ui/LabelError';
const ContactUsForm = () => {
    const signupSchema = z.object({
        Customer_type: z.string(),
        first_name: z
            .string({ required_error: 'First Name is required' })
            .min(2, { message: "First Name must be atleast two characters" }),
        // last_name: z
        //     .string({ required_error: 'Last Name is required' })
        //     .min(2, { message: "Last Name must be atleast 2 characters" }),
        email: z.string({ required_error: 'Email is required' }).email({ message: "Enter valid email" }),
        description: z.string().optional(),
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
        <div className='py-20'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(Submit)}
                    className="space-y-5 text-left"
                >
                    <div className=" flex   justify-center gap-6  items-start">
                        <div className="flex flex-col w-full">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-black">
                                            First Name <LabelError />
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-sm" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* <div className="flex flex-col w-full">
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
                                    </FormItem>
                                )}
                            />
                        </div> */}
                    </div>
                    <div className=" flex items-center justify-center gap-6 ">
                        <div className="flex flex-col w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-black">
                                            Email <LabelError />
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Emal" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-sm" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <Label htmlFor="password" className="text-black">
                                {" "}
                                Mobile No <LabelError />
                            </Label>
                            <Input
                                placeholder="+971"
                                className="mt-2"
                            />
                        </div>

                    </div>
                    <div className="">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-black">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className="text-sm" /> */}
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        className="text-center w-[100%] mt-3"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactUsForm