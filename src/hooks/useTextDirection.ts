import { Locale, TextDirection } from "@/types/types";
import { isRtlLang } from "rtl-detect";


export default function useTextDirection(locale: Locale): TextDirection {
  return isRtlLang(locale) ? "rtl" : "ltr";
}


