import {TranslationOptions, CacheProvider} from '../../types/types';

export default class Translator {
  to: string;
  from: string;
  cacheProvider?: CacheProvider;

  constructor(options: TranslationOptions, cacheProvider?: CacheProvider) {
    this.from = options.from;
    this.to = options.to;
    this.cacheProvider = cacheProvider;
  }

  translate(__value: string): Promise<string | undefined> {
    throw new Error('You must extend the base `translate()` method!');
  }
}
