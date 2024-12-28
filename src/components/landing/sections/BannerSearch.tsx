"use client"
import React, { useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
// import ApiClient from '@/lib/axiosinstance'
// import { endpoints } from '@/lib/endpoints'
// import axios from "axios";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input"

const BannerSearch = () => {
    const t = useTranslations('HomePage');
    const router = useRouter();

    const FormSchema = z.object({
        search_property_type: z.string().optional(),
        property_type_id: z.string().optional(),
        pageSize: z.number().optional(),
        location: z.string().optional(),
        keyword_search: z.string().optional(),
        current_page: z.number().optional(),
        built_in_area_max: z.string().optional(),
        built_in_area_min: z.string().optional(),
        budget_min: z.string().optional(),
        budget_max: z.string().optional(),
        bedroom: z.string().optional(),
        amentiy_type_id: z.string().optional()
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search_property_type: '',
            property_type_id: "",
            pageSize: 6,
            location: "",
            keyword_search: "",
            current_page: 1,
            built_in_area_max: "",
            built_in_area_min: "",
            budget_min: "",
            budget_max: "",
            bedroom: "",
            amentiy_type_id: ""
        }
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // myFunction(data)
        // console.log("form data", data)
        router.push('/properties-listing')
    }

    // useEffect(() => {
    //     console.log("API URL BannerSearch.tsx:", process.env.NEXT_PUBLIC_API_URL);
    // }, []);


    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-white p-5 grid lg:grid-cols-4 gap-3 md:gap-4 rounded-lg rtl:rounded-tr-none ltr:rounded-tl-none"
                >
                    <FormField
                        control={form.control}
                        name="search_property_type"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Resedential" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="1">Resedential</SelectItem>
                                        <SelectItem value="2">Commercial</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="property_type_id"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Property Type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="1">Villa</SelectItem>
                                        <SelectItem value="2">Town House</SelectItem>
                                        <SelectItem value="3">Apartment</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Location or Building" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="1">Abu dhabi</SelectItem>
                                        <SelectItem value="2">Al Ain property</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent className="p-3">
                            <p className="font-bold">Price</p>
                            <Slider className="p-5" />
                            <div className="flex justify-between items-center">
                                <p>Min: 10 AED</p>
                                <p>Max: 1000 AED</p>
                            </div>
                            <div className="flex justify-between mt-3 gap-4">
                                <Button variant={'outline'} className="w-[49%]">Reset</Button>
                                <Button className="w-[49%]">Apply</Button>
                            </div>
                        </SelectContent>
                    </Select>

                    <FormField
                        control={form.control}
                        name="bedroom"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Bedrooms" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                        <SelectItem value="6">6</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Areas" />
                        </SelectTrigger>
                        <SelectContent className="p-3">
                            <p className="font-bold">Area</p>
                            <Slider className="p-5" />
                            <div className="flex justify-between items-center">
                                <p>Min: 10sqmt</p>
                                <p>Max: 1000sqmt</p>
                            </div>
                            
                            <div className="flex justify-between mt-3 gap-4">
                                <Button variant={'outline'} className="w-[49%]">Reset</Button>
                                <Button className="w-[49%]">Apply</Button>
                            </div>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Amenities" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder="Keyword Search" />

                    <div className="col-span-full lg:col-span-1 ltr:lg:col-start-4 rtl:lg:col-start-1 rtl:text-start ltr:text-end">
                        <Button className="w-full md:w-4/5">Go</Button>
                    </div>

                </form>
            </Form>
        </div>

    );
};

export default BannerSearch;
