import React, { useState, useEffect } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from "@/components/ui/button"
import { Command, CommandList, CommandInput, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons';

function Combobox({ field, error, data, placeholder, label }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRTL, setIsRTL] = useState(false);
    useEffect(() => {
        // Check the document's direction attribute to detect RTL
        const direction = document.documentElement.getAttribute("dir");
        setIsRTL(direction === "rtl");
    }, []);
    return (
        <div className="flex flex-col">
            {label ?
                <label htmlFor="">{label}</label>
                : ''}
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                        )}
                    >
                        {field.value
                            ? data.find((language: any) => language.value === field.value)?.label
                            : placeholder}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align={isRTL ? "end" : "start"}>
                    <Command>
                        <CommandInput placeholder={`Select ${placeholder}...`} />
                        <CommandList>
                            <CommandEmpty>No options found.</CommandEmpty>
                            <CommandGroup>
                                {data.map((language: any) => (
                                    <CommandItem
                                        value={language.label}
                                        key={language.value}
                                        onSelect={() => {
                                            field.onChange(language.value);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                language.value === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        {language.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {error && <p className="text-red-500 text-xs mt-1 inline-block">{error}</p>}
        </div>
    );
}

export default Combobox;
