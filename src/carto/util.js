// @flow
import EsriExtent from 'esri/geometry/Extent'
import EsriSimpleRenderer from 'esri/renderers/SimpleRenderer'
import EsriSimpleLineSymbol from 'esri/symbols/SimpleLineSymbol'
import { APP_THEME } from '../util'

export const BASEMAPS = [
  'dark-gray',
  'dark-gray-vector',
  'gray',
  'gray-vector',
  'hybrid',
  'national-geographic',
  'oceans',
  'osm',
  'satellite',
  'streets',
  'streets-navigation-vector',
  'streets-night-vector',
  'streets-relief-vector',
  'streets-vector',
  'terrain',
  'topo',
  'topo-vector'
]

export const FEATURE_LAYERS = [
  'chicagoRailroads',
  'dmvRailroads'
]

const {accent1Color, accent2Color} = APP_THEME.palette

export const FEATURE_RESOURCES = {
  'CHICAGO_RAILROADS': {
    'EXTENT': new EsriExtent({
      xmax: -86.935,
      xmin: -88.618,
      ymax: 42.588,
      ymin: 41.452
    }),
    'FIELDS': [
      {
        'name': 'OBJECTID',
        'alias': 'ObjectId',
        'type': 'oid'
      },
      {
        'name': 'LINES',
        'alias': 'Lines',
        'type': 'string'
      },
      {
        'name': 'DESCRIPTIO',
        'alias': 'Description',
        'type': 'string'
      }
    ],
    'POPUP_TEMPLATE': {
      'title': '{title}',
      'content': [{
        'type': 'fields',
        'fieldInfos': [{
          'fieldName': 'OBJECTID',
          'label': 'Id',
          'visible': true
        }, {
          'fieldName': 'LINES',
          'label': 'Lines Serviced',
          'visible': true
        }, {
          'fieldName': 'DESCRIPTIO',
          'label': 'Description',
          'visible': true
        }]
      }]
    },
    'RENDERER': new EsriSimpleRenderer({
      'symbol': new EsriSimpleLineSymbol({
        'color': accent1Color,
        'width': 1
      })
    })
  },
  'DMV_RAILROADS': {
    'EXTENT': new EsriExtent({
      xmax: -76.349,
      xmin: -77.676,
      ymax: 39.331,
      ymin: 38.688
    }),
    'FIELDS': [
      {
        'name': 'FID',
        'alias': 'ObjectId',
        'type': 'oid'
      },
      {
        'name': 'RAIL_USAGE',
        'alias': 'RailUsage',
        'type': 'integer'
      },
      {
        'name': 'SOURCE_D_1',
        'alias': 'SourceDescription',
        'type': 'string'
      },
      {
        'name': 'RAIL_CLASS',
        'alias': 'RailClass',
        'type': 'integer'
      },
      {
        'name': 'SOURCE_ORI',
        'alias': 'Source',
        'type': 'string'
      },
      {
        'name': 'LENGTHKM',
        'alias': 'LengthInKm',
        'type': 'double'
      }
    ],
    'POPUP_TEMPLATE': {
      'title': '{title}',
      'content': [{
        'type': 'fields',
        'fieldInfos': [{
          'fieldName': 'FID',
          'label': 'Id',
          'visible': true
        }, {
          'fieldName': 'RAIL_USAGE',
          'label': 'Rail Usage Code',
          'visible': true
        }, {
          'fieldName': 'SOURCE_D_1',
          'label': 'Data Source Description',
          'visible': true
        }, {
          'fieldName': 'RAIL_CLASS',
          'label': 'Rail Category Code',
          'visible': true
        }, {
          'fieldName': 'LENGTHKM',
          'label': 'Length in kilometers',
          'visible': true
        }]
      }]
    },
    'RENDERER': new EsriSimpleRenderer({
      'symbol': new EsriSimpleLineSymbol({
        'color': accent2Color,
        'width': 1
      })
    })
  }
}
