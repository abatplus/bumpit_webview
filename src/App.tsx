import React from 'react';
import Landing from './pages/Landing';
import TranslationProvider, { getLocale } from './i18n/TranslationProvider';

export const App: React.FC = () => {
  const [locale, setLocale] = React.useState('en');

  React.useEffect(() => {
    (async function settingLocale() {
      setLocale(await getLocale());
    })();
  }, [locale]);

  return <>
    <TranslationProvider locale={locale}>
      <Landing />
    </TranslationProvider>
  </>;
}