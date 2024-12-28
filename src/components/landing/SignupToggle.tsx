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
const SignupToggle = () => {


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
                className="space-y-2"
            >
                <FormField
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
                />
                {/* <Label
        htmlFor="password"
        className="text-black mt-[20px]"
      >
        {" "}
        Customer Type <span className="text-red-600">*</span>
      </Label>
      <Select>
        <SelectTrigger className="w-[100%] h-[50px] mt-2">
          <SelectValue placeholder="Please Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Individual</SelectItem>
          <SelectItem value="dark">Organization</SelectItem>
        </SelectContent>
      </Select> */}

                <div className=" flex items-center justify-center gap-8 mt-4">
                    <div className="flex flex-col">
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
                        {/* <Label htmlFor="email" className="text-black">
        {" "}
        First Name
        <span className="text-red-600">*</span>
      </Label>
      <Input
        placeholder="First Name"
        className="mt-2 w-[110%]" value={data.firstName} onChange={(event)=> setData({...data, firstName: event.target.value})}
      /> */}
                    </div>
                    <div className="flex flex-col">
                        {/* <Label htmlFor="password" className="text-black">
        {" "}
        Last Name <span className="text-red-600">*</span>
      </Label>
      <Input
        placeholder="Last Name"
        className="mt-2 w-[105%]" value={data.lastName} onChange={(event)=> setData({...data, lastName: event.target.value})}
      /> */}
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
                        placeholder="+971"
                        className="mt-2"
                    //   value={data.mobileNo}
                    //   onChange={(event) =>
                    //     setData({ ...data, mobileNo: event.target.value })
                    //   }
                    />
                </div>

                <div className="mt-4">
                    {/* <Label htmlFor="password" className="text-black">
          {" "}
          Email ID <span className="text-red-600">*</span>
        </Label>
        <Input
          placeholder="Email ID"
          className="mt-2"
          value={data.emailId}
          onChange={(event) =>
            setData({ ...data, emailId: event.target.value })
          }
        /> */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black">
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Emal" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-4">
                    {/* <Label htmlFor="password" className="text-black mt-2">
          {" "}
          Password <span className="text-red-600">*</span>
        </Label>
        <Input
          placeholder="password"
          type="text"
          className="mt-2"
          value={data.password}
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        /> */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-black">
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage className="text-sm" />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-4">
                    {/* <Label htmlFor="password" className="text-black mt-2">
          {" "}
          Confirm password{" "}
          <span className="text-red-600">*</span>
        </Label>
        <Input
          placeholder="Confirm password"
          type="text"
          className="mt-2"
          value={data.confirm_password}
          onChange={(event) =>
            setData({
              ...data,
              confirm_password: event.target.value,
            })
          }
        /> */}
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
                    // onClick={handleData}
                    type="submit"
                >
                    Sign Up
                </Button>
            </form>
        </Form>
    )
}

export default SignupToggle