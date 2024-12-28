"use client"

import SwitchButton from "./SwitchButton";

import * as React from "react"
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@/components/ui/button"
import Combobox from "../common/custom-ui/Combobox";
import { ChevronDownIcon, Search } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import RangeSelector from "./generic-range-selector";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PropertiesListingFilter from "@/components/forms/properties-listing-filter";
type Status = {
  value: string
  label: string
}
const type: Status[] = [
  {
    value: "Residential",
    label: "Residential",
  },
  {
    value: "Commercial",
    label: "Commercial",
  },
]

const bed: Status[] = [
  {
    value: "Studio",
    label: "Studio",
  },
  {
    value: "1",
    label: "1+",
  },
  {
    value: "2",
    label: "2+",
  },
  {
    value: "3",
    label: "3+",
  },
  {
    value: "4",
    label: "4+",
  },
]
const location: Status[] = [
  {
    value: "Abu Dhabi",
    label: "Abu Dhabi",
  },
  {
    value: "Ajman",
    label: "Ajman",
  },

]

const schema = z.object({
  bed: z.string().min(1, { message: "Please select Bed Room" }),
  location: z.string().min(1, { message: "Please select location" }),
  // bed: z.string().optional(),
  property: z.string().optional(),
});

const PropertyFilter = () => {

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      bed: '',
      property: 'Residential',
      location: '',
    },
    resolver: zodResolver(schema), // Use zod to validate the schema
  });
  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
  };
  return (
    <section className="bg-white pt-2 pb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-8 gap-2 items-start">
          <SwitchButton />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Combobox field={field} placeholder="Location" error={errors.location?.message} data={location} />
            )}
          />
          <Controller
            name="property"
            control={control}
            render={({ field }) => (
              <Combobox placeholder="Property Type" label='' field={field} error={errors.property?.message} data={type} />
            )}
          />
          <Controller
            name="bed"
            control={control}
            render={({ field }) => (
              <Combobox field={field} placeholder="Bed Room" error={errors.bed?.message} data={bed} />
            )}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="">
                Price &#40;AED	&#41;
                <ChevronDownIcon className="" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4" align="start">
              <RangeSelector min={0} max={1000000} step={1000} label="Price (AED)" formatValue={(value) => `${value.toLocaleString()}`}
                onChange={(range) => console.log("Selected range:", range)}
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="">
                Area &#40;SQFT	&#41;
                <ChevronDownIcon className="" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4" align="end">
              <RangeSelector min={0} max={100000} step={100} label="Area (SQFT)" formatValue={(value) => `${value.toLocaleString()}`}
                onChange={(range) => console.log("Selected range:", range)}
              />
            </PopoverContent>
          </Popover>
          <Dialog>
            <DialogTrigger className="inline-flex justify-between items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-[41px] px-3 py-3 min-h-[36px] leading-none rounded-lg border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
              All Filter
              <MixerHorizontalIcon className="" />
            </DialogTrigger>
            <DialogContent className="w-[900px] max-w-full">
              <DialogHeader>
                <DialogTitle>More Filter</DialogTitle>

                <PropertiesListingFilter />

              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button type="submit" size='lg'>Search</Button>
        </div>
      </form>
    </section>
  );
}

export default PropertyFilter;