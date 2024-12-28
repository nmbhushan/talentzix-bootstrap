import { localeCodes } from "@/config/product.config";
import enUsMessages from "../../dictionaries/en.json";

type Messages = typeof enUsMessages;

declare global {
  interface IntlMessages extends Messages {}
}

export type Locale = (typeof localeCodes)[number];

export type TextDirection = "ltr" | "rtl";
