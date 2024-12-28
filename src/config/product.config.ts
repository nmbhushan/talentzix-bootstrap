import { Locale } from "@/types/types";

//Add your supported locales here and file in dictionaries/[locale].json
export const localesConfig = [
    { locale: "en", name: "English" }, //1st element is default lang, defined in types.ts also as mandatory
    { locale: "ar", name: "العربية (Arabic)" },
]

export const localeCodes = localesConfig.map(locale => locale.locale);

export const localeNames: Record<Locale, string> = Object.fromEntries(
    localesConfig.map(({ locale, name }) => [locale, name])
);

