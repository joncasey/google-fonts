const baseURL = 'https://fonts.googleapis.com'

const fontTypes = [
  'AppleWebKit/0 Chrome/60.0.0.0',
  'AppleWebKit/0 Chrome/30.0.0.0',
]

const fontVariants = '12345678'.replace(/(\d)/g, '$100,$100i,')

const fontWeightNames = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold'
}

const isMaterialIcons = /^(Material )?Icons$/i

const isVariableFonts = /wght@/

export {
  baseURL,
  fontTypes,
  fontVariants,
  fontWeightNames,
  isMaterialIcons,
  isVariableFonts
}