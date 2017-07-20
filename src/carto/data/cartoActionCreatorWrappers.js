// @flow
import EsriPoint from 'esri/geometry/Point'
import {
  setPosition,
  setPositionFailure
} from './cartoActionCreators'
import { setIssue } from '../../feedback/data/feedbackActionCreators'
import { createIssue } from '../../feedback/util'

const getCurrentPosition = (params: any) => {
  return new Promise((resolve: () => mixed, reject: () => mixed) => {
    window.navigator.geolocation.getCurrentPosition(resolve, reject, params)
  })
}

// Wraps geolocation flow.
export const requestPosition = () => {
  return (dispatch: () => mixed) => {
    return getCurrentPosition().then((coordinates: Object) => {
      let point: EsriPoint
      point = new EsriPoint({
        'latitude': coordinates.coords.latitude,
        'longitude': coordinates.coords.longitude
      })
      return dispatch(setPosition(point))
    }).catch((err: Object) => {
      const issue = createIssue(`Not getting location: ${err.message}.`)
      dispatch(setIssue(issue))
      return dispatch(setPositionFailure())
    })
  }
}
