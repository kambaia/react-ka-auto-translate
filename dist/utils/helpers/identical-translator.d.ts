import Translator from './translator';
export default class IdenticalTranslator extends Translator {
    translate(value: string): Promise<string | undefined>;
}
