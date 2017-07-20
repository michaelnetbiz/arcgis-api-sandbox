// @flow
import CARTO from './initialState'
import {
  SET_BASEMAP,
  SET_EXTENT,
  SET_FEATURE_LAYER,
  SET_POSITION,
  SET_POSITION_FAILURE
} from './cartoActionTypes'

export default (state: Object = CARTO, action: Object) => {
  switch (action.type) {
    case SET_BASEMAP: {
      return Object.assign({}, state, {
        'basemap': action.basemap
      })
    }
    case SET_EXTENT: {
      return Object.assign({}, state, {
        'extent': action.extent
      })
    }
    case SET_FEATURE_LAYER: {
      return Object.assign({}, state, {
        'featureLayer': action.featureLayer
      })
    }
    case SET_POSITION: {
      return Object.assign({}, state, {
        'position': action.point
      })
    }
    case SET_POSITION_FAILURE: {
      return Object.assign({}, state, {
        'position': undefined
      })
    }
    default: {
      return state
    }
  }
}
