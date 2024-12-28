"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface RangeSelectorProps {
    min: number;
    max: number;
    step?: number;
    defaultValue?: [number, number];
    label: string;
    formatValue?: (value: number) => string;
    onChange?: (value: [number, number]) => void;
    className?: string;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
    min,
    max,
    step = 1,
    defaultValue = [min, max],
    label,
    formatValue = (value) => value.toString(),
    onChange,
    className,
}) => {
    const [range, setRange] = React.useState<[number, number]>(defaultValue);

    const handleRangeChange = (newRange: number[]) => {
        const updatedRange: [number, number] = [newRange[0], newRange[1]];
        setRange(updatedRange);
        onChange?.(updatedRange);
    };

    return (
        <div className={cn("w-full max-w-md space-y-4", className)}>
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary dark:text-gray-200">
                    {label}
                </span>
            </div>
            <SliderPrimitive.Root
                className="relative flex w-full touch-none select-none items-center"
                min={min}
                max={max}
                step={step}
                value={range}
                onValueChange={handleRangeChange}
            >
                <SliderPrimitive.Track className="relative h-[3px] w-full grow overflow-hidden rounded-full bg-[#E4E4E4] dark:bg-gray-700">
                    <SliderPrimitive.Range className="absolute h-full bg-primary-hover dark:bg-blue-400" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="block h-[16px] w-[16px] rounded-[4px] border-[1px] border-[#D8D8D8] bg-white ring-offset-white transition-colors dark:border-blue-400 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-visible:ring-blue-800" />
                <SliderPrimitive.Thumb className="block h-[16px] w-[16px] rounded-[4px] border-[1px] border-[#D8D8D8] bg-white ring-offset-white transition-colors dark:border-blue-400 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-visible:ring-blue-800" />
            </SliderPrimitive.Root>
            <div className="flex justify-between items-start text-xs text-gray-500 dark:text-gray-400 gap-3">
                <div className="text-sm text-primary"><span className="block text-sm text-gray-600">Min  {label}</span>
                    <strong className="text-base font-medium mt-1 block">{formatValue(range[0])}</strong></div>
                <div className="text-sm text-primary"><span className="block text-sm text-gray-600">Max  {label}</span>
                    <strong className="text-base font-medium mt-1 block">{formatValue(range[1])}</strong></div>
            </div>
        </div>
    );
};

export default RangeSelector;