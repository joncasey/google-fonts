const baseURL = 'https://fonts.googleapis.com'

const fontTypes = [
  'AppleWebKit/0 Chrome/60.0.0.0',
  'AppleWebKit/0 Chrome/30.0.0.0',
]

const fontVariants = '12345678'.replace(/(\d)/g, '$100,$100i,')

const isMaterialIcons = /^(Material )?Icons$/i

export {
  baseURL,
  fontTypes,
  fontVariants,
  isMaterialIcons
}