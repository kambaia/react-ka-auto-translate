import Translator from './translator';
export default class GoogleTranslator extends Translator {
    translate(value: string): Promise<string | undefined>;
    tryGetGoogleTranslation(value: string): Promise<string | undefined>;
    fetchGoogleTranslation(value: string): Promise<string>;
}
