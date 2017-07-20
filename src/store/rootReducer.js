// @flow
import { combineReducers } from 'redux'
import carto from '../carto/data/cartoReducer'
import feedback from '../feedback/data/feedbackReducer'
import sandbox from '../sandbox/data/sandboxReducer'

export default combineReducers({
  carto,
  feedback,
  sandbox
})
