# google-fonts

Download fonts for local/offline delivery.

## Install
```
npm i @joncasey/google-fonts
```

## Example

```javascript
const { getFont, downloadFont } = require('@joncasey/google-fonts')

getFont('Open Sans')
.then(font => downloadFont(font, 'Open Sans'))
.then(results => console.log(results))
.catch(error => console.log(`Error`, error))
```

## Advanced Usage!

You can just copy the lib files locally. They have ZERO-dependencies (other than NodeJS)

copy https://unpkg.com/@joncasey/google-fonts/lib/index.mjs
to `google-fonts.mjs`
Then just
````
import { getFont, downloadFont } from './google-fonts.mjs'
````
or, using require..

copy https://unpkg.com/@joncasey/google-fonts/lib/index.js
to `google-fonts.js`
````
const { getFont, downloadFont } = require('./google-fonts.js')
````

## API

```javascript
let fontObject = await getFont (fontFamily)

/*
  fontObject = {
    css: "",
    fonts: [
      {
        src: {
          local: "",
          woff: "",
          woff2: ""
        },
        family: "",
        style: "",
        weight: ""
      }
    ],
    raw: []
  }
*/
```