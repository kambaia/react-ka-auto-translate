import Translator from './translator';
import { TranslationOptions, CacheProvider } from '../../types/types';
export default class TranslatorFactory {
    static create(options: TranslationOptions, cacheProvider?: CacheProvider): Translator;
    static isToLanguageIdenticalWithFrom: (to: string, from: string) => boolean;
    static isCachable: (cacheProvider?: CacheProvider) => boolean;
}
