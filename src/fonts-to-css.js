
const fixSrc = font => Object.keys(font.src)
  .filter(format => format !== 'local')
  .map(format => {
    let remote = font.src[format]
    let ext = remote.split('.').pop() // done this way, for TTF - not really needed anymore
    let local = `${font.src.local}.${ext}`
    return `url('${local}') format('${format}')`
  })
  .join(',\n       ')

export default (fonts, cssText = '') => fonts.map(font => `
@font-face {
  font-family: '${font.family}';
  font-weight: ${font.weight};
  font-style: ${font.style};
  src: ${fixSrc(font)};
}
`).concat(cssText).join('')
