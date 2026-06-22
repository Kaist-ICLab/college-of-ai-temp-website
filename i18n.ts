import { Translation } from "./types";
import { translations as common } from "./locales/common";
import { translations as graduation } from "./locales/graduation";
import { translations as notice } from "./locales/notice";

export const translations = {
  ...common,
  ...graduation,
  ...notice,
};

export type TranslationKey = keyof typeof translations;

export const useTranslation = (lang: "en" | "ko") => {
  return (key: TranslationKey | (string & {})) => {
    return (translations as Record<string, any>)[key] ? (translations as Record<string, any>)[key][lang] : key;
  };
};
