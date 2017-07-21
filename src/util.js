// @flow
import * as colors from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import { spacing } from 'material-ui/styles'

export const APP_NAME = 'arcgis-api-sandbox'
// TODO: remedy the lack of attribution
export const DMV_RAILROADS_URI = 'https://catalog.data.gov/dataset/usgs-national-transportation-dataset-ntd-downloadable-data-collectionde7d2'
export const CHICAGO_RAILROADS_URI = 'https://data.cityofchicago.org/Transportation/Railroads/mpdq-i9eh'
export const APP_THEME = {
  'spacing': spacing,
  'fontFamily': 'Roboto, sans-serif',
  'borderRadius': 2,
  'palette': {
    'primary1Color': colors.deepPurple500,
    'primary2Color': colors.grey500,
    'primary3Color': colors.grey600,
    'accent1Color': colors.orangeA200,
    'accent2Color': colors.pinkA200,
    'accent3Color': colors.yellowA200,
    'textColor': colors.fullWhite,
    'secondaryTextColor': fade(colors.fullWhite, 0.7),
    'alternateTextColor': '#303030',
    'canvasColor': '#303030',
    'borderColor': fade(colors.fullWhite, 0.3),
    'disabledColor': fade(colors.fullWhite, 0.3),
    'pickerHeaderColor': fade(colors.fullWhite, 0.12),
    'clockCircleColor': fade(colors.fullWhite, 0.12)
  }
}
export const ROOT_ELEMENT = document.getElementById('root')
