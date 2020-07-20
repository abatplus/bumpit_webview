import React from 'react';
import { IntlProvider } from 'react-intl';
import { Translations } from './translations';

export const getLocale = async () =>
  navigator.language.split(/[-_]/)[0];

const getMessagesOnLocale = (locale: string) => {
  switch (locale) {
    case 'de':
      return Translations.de;
    case 'en':
    default:
      return Translations.en;
  }
};

interface ITranslationProviderProps {
  locale: string;
  children?: React.ReactNode;
}

const TranslationProvider: React.FC<ITranslationProviderProps> = (props) => {
  return (
    <IntlProvider locale={props.locale} messages={getMessagesOnLocale(props.locale)}>
      {props.children}
    </IntlProvider>
  );
};

export default TranslationProvider;
