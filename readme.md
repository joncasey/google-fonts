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