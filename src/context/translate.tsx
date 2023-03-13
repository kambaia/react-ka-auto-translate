import {useContext, useEffect, useState} from 'react';
import {TranslateContext, LanguageContext} from './translator';

export default function KTranslate({
  children: value,
}: {
  children: any;
}): any {
  const language = useContext(LanguageContext);
  const handleTranslate = useContext(TranslateContext);
  const [translation, setTranslation] = useState(value);

  useEffect(() => {
    handleTranslate(value, setTranslation);
  }, [value, language]);

  return translation;
}
