// @flow
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { loadState } from './util'

/* eslint-disable no-underscore-dangle */
export default () => {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
  const enhancer = composeEnhancers(
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant({
        ignore: [
          'carto'
        ]
      }),
      logger
    )
  )
  return createStore(
    rootReducer,
    loadState(),
    enhancer
  )
}
/* eslint-enable */
