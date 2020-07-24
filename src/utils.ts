import { IntlShape } from "react-intl";
import IvCardTranslations from "./i18n/IvCardTranslations";

/**
 * get the name of a property of type T
 *
 * @template T type to work on
 * @param {keyof T} name property name
 * @returns {string}
 */
export const nameof = <T>(name: keyof T): string => {
  return name as string;
};

export const translate = (i18n: IntlShape, label: keyof IvCardTranslations) =>
  i18n.formatMessage({ id: nameof<IvCardTranslations>(label) });