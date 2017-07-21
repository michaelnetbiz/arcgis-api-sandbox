// @flow
import fs from 'fs'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const appRoot = fs.realpathSync(process.cwd())
const resolver = (relPath) => {
  return path.resolve(appRoot, relPath)
}

const isModuleNotLoadable = (request) => {
  return /^dojo/.test(request) || /^dojox/.test(request) || /^dijit/.test(request) || /^esri\//.test(request)
}
const appDistDir = resolver('dist')
const appSrcDir = resolver('src')
const appNodeModulesDir = resolver('node_modules')
const appIndexJs = resolver('src/index.js')
const appStylesDir = resolver('src/styles')
const appPublicDir = resolver('public')
const appIndexHtml = resolver('public/index.html')

export default {
  'devtool': 'source-map',
  'devServer': {
    'contentBase': appPublicDir,
    'historyApiFallback': true,
    'port': 3000
  },
  'entry': [
    appIndexJs
  ],
  'resolve': {
    'modules': [
      'node_modules'
    ]
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': ['env', 'es2015', 'flow', 'react']
          }
        }
      },
      {
        'test': /\.(html)$/,
        'use': {
          'loader': 'html-loader'
        }
      },
      {
        'test': /\.scss$/,
        'use': [
          'style-loader',
          'css-loader',
          {
            'loader': 'sass-loader',
            'options': {
              'includePaths': [
                appStylesDir,
                appNodeModulesDir
              ]
            }
          }
        ]
      },
      {
        'test': /(\.css)$/,
        'use': [
          'style-loader',
          'css-loader'
        ]
      },
      {
        'test': /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        'use': [
          'file-loader'
        ]
      },
      {
        'test': /(\.geojson)$/,
        'use': [
          'file-loader'
        ]
      },
      {
        'test': /\.(woff|woff2)$/,
        'use': [{
          'loader': 'url-loader',
          'options': {
            'prefix': 'font',
            'limit': 5000
          }
        }]
      },
      {
        'test': /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        'use': [{
          'loader': 'url-loader',
          'options': {
            'limit': 10000,
            'mimetype': 'application/octet-stream'
          }
        }]
      },
      {
        'test': /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        'use': [{
          'loader': 'url-loader',
          'options': {
            'limit': 10000,
            'mimetype': 'image/svg+xml'
          }
        }]
      }
    ]
  },
  'externals': [(context: Object, request: string, callback: () => mixed) => {
    if (isModuleNotLoadable(request)) {
      callback(null, 'amd ' + request)
    } else {
      callback()
    }
  }],
  'output': {
    'filename': 'static/js/bundle.js',
    'libraryTarget': 'amd',
    'path': appDistDir,
    'pathinfo': true,
    'publicPath': '/'
  },
  'plugins': [
    new HtmlWebpackPlugin({
      'filename': 'index.html',
      'inject': false,
      'template': appIndexHtml
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      'compress': {
        'warnings': false,
        'reduce_vars': false
      },
      'output': {
        'comments': false
      },
      'sourceMap': true
    })
  ],
  'target': 'web'
}
