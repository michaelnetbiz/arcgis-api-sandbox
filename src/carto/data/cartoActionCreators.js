// @flow
import {
  SET_BASEMAP,
  SET_EXTENT,
  SET_FEATURE_LAYER,
  SET_POSITION,
  SET_POSITION_FAILURE
} from './cartoActionTypes'

export const setBasemap = (basemap: string) => {
  return {
    'type': SET_BASEMAP,
    basemap
  }
}

export const setExtent = (extent: EsriExtent) => {
  return {
    'type': SET_EXTENT,
    extent
  }
}

export const setFeatureLayer = (featureLayer: EsriFeatureLayer) => {
  return {
    'type': SET_FEATURE_LAYER,
    featureLayer
  }
}

// Represents receipt of geolocation coordinates object.
export const setPosition = (point: Object) => {
  return {
    'type': SET_POSITION,
    point
  }
}

// Represents geolocation request failure.
export const setPositionFailure = () => {
  return {
    'type': SET_POSITION_FAILURE
  }
}
