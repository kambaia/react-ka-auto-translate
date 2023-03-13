# react-ka-auto-translate


* This is the best component to translate every language you need in your app

#Install 

```shell
   yarn add react-ka-auto-translate 
   or 

    npm install react-ka-auto-translate 
```


### how can you use it

* 1st You need to import the line below
```js
import { Translator } from "react-ka-auto-translate" 

```
* 2nd in your main file, that is, if it is in the nextjs, you must put it in the 
```js 
_app.tsx

``` 
* file and in the 
```js 
_app.tsx

``` 
react app.tsx

### 3rd creates the file in the utils folder preferably and add the code below

```js
// example
const cacheProvider = {
  get: (language, key) =>
    ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
      language
    ],
  set: (language, key, value) => {
    const existing = JSON.parse(localStorage.getItem('translations')) || {
      [key]: {}
    };
    existing[key] = { ...existing[key], [language]: value };
    localStorage.setItem('translations', JSON.stringify(existing));
  }
};

export default cacheProvider;
```

### Still in the app.tsx file add the following code below

```js
import type { AppProps } from 'next/app';
import { KTranslator } from 'react-ka-auto-translate';
import cacheProvider from '@/utils/cacheProvider';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <KTranslator cacheProvider={cacheProvider} to={'pl'} from='pt'>
      <Component {...pageProps} />
    </KTranslator>
  );
}

```

### Still in the app.tsx file add the following code below

 * Finally let's translate our components by importing the KTranslate component
  ```js
   <h3><Translate>
          Olá 
        </Translate></h3>
      </main>
    ```