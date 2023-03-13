import { TranslationOptions, CacheProvider } from '../../types/types';
export default class Translator {
    to: string;
    from: string;
    cacheProvider?: CacheProvider;
    constructor(options: TranslationOptions, cacheProvider?: CacheProvider);
    translate(__value: string): Promise<string | undefined>;
}
