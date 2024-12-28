"use client";

import { localeCodes, localeNames } from "@/config/product.config";
import {
    usePathname,
    useRouter,
} from "@/i18n/routing";
import { Locale } from "@/types/types";
import { useLocale } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

// export default function LocaleSwitcher({ locale, }: { locale: Locale; }) {
export default function LocaleSwitcher() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();

    // const changeLocale = (
    //     event: React.ChangeEvent<HTMLSelectElement>,
    // ) => {
    //     const newLocale = event.target.value as Locale;
    //     router.replace(pathname, { locale: newLocale });
    // };

    const changeLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale as Locale });
    };

    return (
        <div>
            {/* <select
                value={locale}
                onChange={changeLocale}
                className=""
            >
                {localeCodes.map((loc: Locale) => (
                    <option key={loc} value={loc}>
                        {localeNames[loc]}
                    </option>
                ))}
            </select> */}
            <Select value={locale} onValueChange={changeLocale}>
                <SelectTrigger className="min-w-[150px] h-10">
                    <SelectValue placeholder="Select Locale" />
                </SelectTrigger>
                <SelectContent>
                    {localeCodes.map((loc: Locale) => (
                        <SelectItem key={loc} value={loc}>
                            {localeNames[loc]}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
