import { TranslationHandler, CacheProvider } from '../types/types';
import * as React from 'react';
export declare const TranslateContext: React.Context<TranslationHandler>;
export declare const LanguageContext: React.Context<string>;
type Props = {
    to: string;
    from: string;
    cacheProvider?: CacheProvider;
    children: any;
};
export default function KTranslator({ to, from, cacheProvider, children }: Props): JSX.Element;
export {};
