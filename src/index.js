import getFont from './get-font'
import downloadFont from './download-font'
import { existsSync, rmdirSync } from 'fs'

// expose for debug outside of this lib
import * as parse from './parse'
import * as util from './util'

async function save (fontFamily, toFolder) {
  const Font = await getFont(fontFamily)
  if (existsSync(toFolder)) {
    rmdirSync(toFolder, { recursive: true })
  }
  const result = await downloadFont(Font, toFolder)
  return { ...Font, result }
}

export {
  getFont,
  downloadFont,
  parse,
  save,
  util
}

