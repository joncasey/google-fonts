
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const extra = '0123456789,.!?'

const fontWeights = '12345678'.split('').map(v => `
    .fw${v}00 { font-weight: ${v}00; }`)

const fontToParagraph = font => `
  <p class="fw${font.weight}${/i/.test(font.style) ? ' i' : '' }">${upper}<br>${lower}<br>${extra}</p>`

const sortNormalFirst = ({ style: a }, { style: b }) => a > b ? -1 : a < b ? 1 : 0

export default (fonts = [{}], family = fonts[0].family) => `<!DOCTYPE html>
<html lang="en">
<head>
  <title>${family}</title>
  <link rel="stylesheet" href="index.css">
  <style>
    body { font-family: '${family}', monospace; font-size: 100%; }
    p { line-height: 1.6; }
    .i { font-style: italic; }${
    fontWeights.join('')}
  </style>
</head>
<body>
  <h1>${family}</h1>${
  fonts.sort(sortNormalFirst).map(fontToParagraph).join('')}
</body>
</html>
`