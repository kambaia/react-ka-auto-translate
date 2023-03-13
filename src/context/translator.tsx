import {createContext, useCallback} from 'react';
import TranslatorFactory from '../utils/helpers/translator-factory';
import {TranslationHandler, CacheProvider} from '../types/types';
import * as React from 'react';

const defaultHandler: TranslationHandler = () => {};

export const TranslateContext: React.Context<
  TranslationHandler
> = createContext(defaultHandler);
export const LanguageContext: React.Context<string> = createContext('en');

type Props = {
  to: string;
  from: string;
  cacheProvider?: CacheProvider;
  children: any;
};

export default function KTranslator({
  to,
  from,
  cacheProvider,
  children
}: Props): JSX.Element {
  
  const handleTranslationAsync: TranslationHandler = useCallback(
    async (value, setTranslation) => {
      const options = {
        to,
        from,
      };
      const translator = TranslatorFactory.create(options, cacheProvider);
      const translation = await translator.translate(value);

      if (translation) {
        setTranslation(translation);
      }
    },
    [to, from, cacheProvider]
  );

  return (
    <TranslateContext.Provider value={handleTranslationAsync}>
      <LanguageContext.Provider value={to}>{children}</LanguageContext.Provider>
    </TranslateContext.Provider>
  );
}
