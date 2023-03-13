import GoogleTranslator from './google-translator';
import { CacheProvider } from '../../types/types';
export default class CacheTranslator extends GoogleTranslator {
    cacheProvider: CacheProvider;
    translate(value: string): Promise<string | undefined>;
    tryGetGoogleTranslationAndCache(value: string): Promise<string | undefined>;
    setCachedTranslationForValue(value: string, translation?: string): void;
}
