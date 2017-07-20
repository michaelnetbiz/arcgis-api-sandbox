// @flow
const MOBILE = 'MOBILE'
const NON_MOBILE = 'NON_MOBILE'
const MOBILE_STYLE = {}
const NON_MOBILE_STYLE = {}

export const camelizeKebabs = (kebab: string) => {
  const re = new RegExp(/-/)
  const i = re.exec(kebab).output.index
  if (!re.test(kebab)) {
    return kebab
  }
  return String(
    kebab.slice(0, i) +
    kebab.slice(i).charAt(1).toUpperCase() +
    kebab.slice(i).slice(2)
  )
}

export const detectUserAgentType = () => {
  const src = ''.concat(
    window.navigator.userAgent ? window.navigator.userAgent : '',
    ';',
    navigator.vendor ? navigator.vendor : '',
    ';',
    window.opera ? window.opera : ''
  )
  const re = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
  return re.test(src) ? MOBILE : NON_MOBILE
}

export const deriveStyle = (userAgentType: string) => {
  switch (userAgentType) {
    case MOBILE: {
      return MOBILE_STYLE
    }
    case NON_MOBILE: {
      return NON_MOBILE_STYLE
    }
    default: {
      return NON_MOBILE_STYLE
    }
  }
}
