
export function parseCSS (css) {
  const fontProps = ['family', 'weight', 'style']
  const fontFaces = {}

  let cssText = css.replace(
    /(?:\/\*[^\*]+\*\/\s*)?@font-face \{([^\}]+)\}\s*/gm,
    (_, fontFace) => {

    const font = parseFontFace(fontFace)
    const id = [font.family, font.weight, font.style]
    const f = fontFaces[id] || (fontFaces[id] = { src: {} })
    fontProps.forEach(prop => f[prop] = font[prop])
    if (!f.src.local) {
      f.src.local = font.local
    }
    f.src[font.src.format] = font.src.url

    return ''

  }).trim()

  return {
    fontFaces,
    cssText,
  }
}

export function parseFontFace (cssText) {
  const props = { src: {} }

  const srcFormat = /format\('([^)]+)'\)/
  const srcLocal = /local\('([^']+)'\), /g
  const srcValue = /url\(([^)]+)\)/

  cssText.replace(/  ([^:]+): ([^;]+);/g, (_, name, value) => {

    if (name === 'src') {

      value = value.replace(srcLocal, (_, localName) => {
        props.local = localName
        return ''
      })

      value = {
        url: value.match(srcValue)[1],
        format: (value.match(srcFormat) || ['', 'embedded-opentype'])[1],
        rawValue: value,
        toString () {
          return this.rawValue
        }
      }

    }
    else {

      name = name.replace('font-', '')
      value = value.replace(/'/g, '')

    }

    props[name] = value

  })

  if (!props.local && props.family === 'Material Icons') {
    props.local = 'MaterialIcons'
  }

  return props
}
