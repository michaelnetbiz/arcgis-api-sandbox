// @flow
import React, { Component } from 'react'
import EsriMap from 'esri/Map'
import EsriMapView from 'esri/views/MapView'
import esriConfig from 'esri/config'
import EsriPolyline from 'esri/geometry/Polyline'
import EsriFeatureLayer from 'esri/layers/FeatureLayer'
import EsriSimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol'
import EsriGraphic from 'esri/Graphic'
import esriRequest from 'esri/request'
import EsriPoint from 'esri/geometry/Point'
import ActionMenu from './ActionMenu'
import { APP_THEME } from '../../util'
import {
  BASEMAPS,
  FEATURE_LAYERS,
  FEATURE_RESOURCES
} from '../util'
import { setBasemap, setFeatureLayer } from '../data/cartoActionCreators'
import { createIssue } from '../../feedback/util'
import { setIssue } from '../../feedback/data/feedbackActionCreators'
import { requestPosition } from '../data/cartoActionCreatorWrappers'
import chicagoRailroads from '../../assets/geojson/chicagoRailroads.geojson'
import dmvRailroads from '../../assets/geojson/dmvRailroads.geojson'

/**
 * Class representing an Esri Map UI component.
 * @extends Component
 */
class Carto extends Component {
  static reducePropKeys (acc: Array<string>, elem: Array<string | any>) {
    return Array.prototype.concat(acc, elem[0])
  }

  static getBasemapName (basemapIndex: number) {
    return BASEMAPS[basemapIndex]
  }

  static getFeatureLayerName (featureLayerIndex: number) {
    return FEATURE_LAYERS[featureLayerIndex]
  }

  constructor (props: Object) {
    super(props)
    esriConfig.request.corsEnabledServers.push('earthquake.usgs.gov')
    this.handleBasemapSelection = this.handleBasemapSelection.bind(this)
    this.handleFeatureLayerSelection = this.handleFeatureLayerSelection.bind(this)
    this.handleGeolocationMenuItemTouchTap = this.handleGeolocationMenuItemTouchTap.bind(this)
    this.goToCurrentPosition = this.goToCurrentPosition.bind(this)
    this.esriMap = new EsriMap({
      'basemap': props.basemap
    })
  }

  handleBasemapSelection (event: window.Event, index: number, value: number) {
    const {dispatch} = this.props
    const basemap = Carto.getBasemapName(value)
    const issue = createIssue(`Setting basemap to: ${basemap}.`)
    dispatch(setIssue(issue))
    dispatch(setBasemap(basemap))
  }

  handleFeatureLayerSelection (event: window.Event, index: number, value: number) {
    const {dispatch} = this.props
    const featureLayer = Carto.getFeatureLayerName(value)
    const issue = createIssue(`Setting basemap to: ${featureLayer}.`)
    dispatch(setIssue(issue))
    dispatch(setFeatureLayer(featureLayer))
  }

  handleGeolocationMenuItemTouchTap (e: window.Event) {
    const {dispatch} = this.props
    dispatch(requestPosition())
  }

  diffProps (nextProps: Object) {
    const nextPropsFilter = (elem: Array<any>) => {
      let [key, value] = elem
      return this.props[key] !== value
    }
    return Object.entries(nextProps).filter(nextPropsFilter)
  }

  componentDidMount () {
    this.esriMapView = new EsriMapView({
      'container': this.refs.carto,
      'map': this.esriMap
    })
  }

  updateFeatureLayer (featureLayerName: string) {
    const {CHICAGO_RAILROADS, DMV_RAILROADS} = FEATURE_RESOURCES
    switch (featureLayerName) {
      case 'chicagoRailroads': {
        let lyr
        const {EXTENT, FIELDS, POPUP_TEMPLATE, RENDERER} = CHICAGO_RAILROADS
        const getData = () => {
          return esriRequest(chicagoRailroads, {
            'responseType': 'json'
          })
        }
        const mapFeaturesToEsriGraphics = (response: Object) => {
          return response.data.features.map((feature: Object, i: number) => {
            const {geometry, properties} = feature
            return {
              'geometry': new EsriPolyline({
                'paths': geometry.coordinates
              }),
              'attributes': {
                'OBJECTID': properties.OBJECTID,
                'LINES': properties.LINES,
                'DESCRIPTIO': properties.DESCRIPTIO
              }
            }
          })
        }
        const createLayer = (graphics: Array<EsriGraphic>) => {
          lyr = new EsriFeatureLayer({
            'fields': FIELDS,
            'geometryType': 'polyline',
            'objectIdField': 'ObjectId',
            'popupTemplate': POPUP_TEMPLATE,
            'renderer': RENDERER,
            'source': graphics,
            'spatialReference': {
              'wkid': 4326
            }
          })
          this.esriMap.layers.add(lyr)
          this.esriMapView.goTo({
            'target': EXTENT
          })
          return lyr
        }
        const errback = (err) => {
          const {dispatch} = this.props
          const issue = createIssue(`Error: ${err.message}.`)
          dispatch(setIssue(issue))
        }
        this.esriMap.removeAll()
        return this.esriMapView.then(() => {
          getData().then(
            mapFeaturesToEsriGraphics
          ).then(
            createLayer
          ).otherwise(
            errback
          )
        })
      }
      case 'dmvRailroads': {
        let lyr
        const {EXTENT, FIELDS, POPUP_TEMPLATE, RENDERER} = DMV_RAILROADS
        const getData = () => {
          return esriRequest(dmvRailroads, {
            'responseType': 'json'
          })
        }
        const mapFeaturesToEsriGraphics = (response: Object) => {
          return response.data.features.map((feature: Object, i: number) => {
            const {geometry, properties} = feature
            return {
              'geometry': new EsriPolyline({
                'paths': geometry.coordinates
              }),
              'attributes': {
                'FID': properties.FID,
                'RAIL_USAGE': properties.RAIL_USAGE,
                'SOURCE_D_1': properties.SOURCE_D_1,
                'RAIL_CLASS': properties.RAIL_CLASS,
                'LENGTHKM': properties.LENGTHKM
              }
            }
          })
        }
        const createLayer = (graphics: Array<EsriGraphic>) => {
          lyr = new EsriFeatureLayer({
            'fields': FIELDS,
            'geometryType': 'polyline',
            'objectIdField': 'ObjectId',
            'popupTemplate': POPUP_TEMPLATE,
            'renderer': RENDERER,
            'source': graphics,
            'spatialReference': {
              'wkid': 4326
            }
          })
          this.esriMap.layers.add(lyr)
          this.esriMapView.goTo({
            'target': EXTENT
          })
          return lyr
        }
        const errback = (err) => {
          const {dispatch} = this.props
          const issue = createIssue(`Error: ${err.message}.`)
          dispatch(setIssue(issue))
        }
        this.esriMap.removeAll()
        return this.esriMapView.then(() => {
          getData().then(
            mapFeaturesToEsriGraphics
          ).then(
            createLayer
          ).otherwise(
            errback
          )
        })
      }
      default: {
        return {}
      }
    }
  }

  goToCurrentPosition (currentPosition: Object) {
    return this.esriMapView.goTo({
      'target': currentPosition,
      'zoom': 12
    }).then(() => {
      this.esriMapView.graphics.add(
        new EsriGraphic({
          'attributes': {
            'Latitude': currentPosition.latitude,
            'Longitude': currentPosition.longitude
          },
          'geometry': new EsriPoint(currentPosition),
          'popupTemplate': {
            'title': '{Name}',
            'content': [{
              'type': 'fields',
              'fieldInfos': [{
                'fieldName': 'Latitude'
              }, {
                'fieldName': 'Longitude'
              }]
            }]
          },
          'symbol': new EsriSimpleMarkerSymbol({
            'style': 'circle',
            'color': APP_THEME.palette.primary1Color,
            'size': 20,
            'outline': {
              'width': 1,
              'color': APP_THEME.palette.textColor,
              'style': 'solid'
            }
          })
        })
      )
    })
  }

  componentWillReceiveProps (nextProps: Object) {
    const diff = this.diffProps(nextProps)
    const updatedStuff = Array.prototype.reduce.call(diff, Carto.reducePropKeys, [])
    return updatedStuff.forEach((key: string) => {
      switch (key) {
        case 'basemap': {
          return this.esriMap.set(key, nextProps[key])
        }
        case 'featureLayer': {
          return this.updateFeatureLayer(nextProps[key])
        }
        case 'position': {
          return this.goToCurrentPosition(nextProps[key])
        }
        default: {
          return {}
        }
      }
    })
  }

  props: {
    basemap: string,
    dispatch: () => mixed,
    extent: Object,
    featureLayer: string
  }

  esriMap: EsriMap
  esriMapView: EsriMapView
  handleBasemapSelection: () => mixed
  handleFeatureLayerSelection: () => mixed
  handleGeolocationMenuItemTouchTap: () => mixed
  props: Object

  render () {
    const {basemap, featureLayer} = this.props
    return (
      <div
        className={'carto'}
        ref={'carto'}
      >
        <ActionMenu
          basemap={basemap}
          featureLayer={featureLayer}
          basemapSelectionHandler={this.handleBasemapSelection}
          featureLayerSelectionHandler={this.handleFeatureLayerSelection}
          geolocationMenuItemTouchTapHandler={this.handleGeolocationMenuItemTouchTap}
        />
      </div>
    )
  }
}

export default Carto
