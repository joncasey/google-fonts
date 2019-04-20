import { multiFetch } from './fetch'
import { baseURL, fontTypes, fontVariants, isMaterialIcons } from './util'
import { parseCSS } from './parse'
import fontsToCSS from './fonts-to-css'

export default async (fontFamily, types = fontTypes) => {

  const inits = [].concat(types)
    .map(type => ({ headers: { 'User-Agent': type } }))

  let family = fontFamily.trim().replace(/:$|:\|/g, `:${fontVariants}|`)

  let path = `/css?family=${family}`
  if (isMaterialIcons.test(family)) {
    path = `/icon?family=Material+Icons`
  }

  let responses = await multiFetch(`${baseURL}${path}`, inits)
  let textValues = await Promise.all(responses.map(res => res.text()))
  let parsed = parseCSS(textValues.join('\n'))
  let fonts = Object.values(parsed.fontFaces)
  let css = fontsToCSS(fonts, parsed.cssText)

  return {
    css,
    family: fonts[0].family,
    fonts,
    raw: textValues,
  }

}