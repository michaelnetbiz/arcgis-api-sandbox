// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import tapEventPlugin from 'react-tap-event-plugin'
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { APP_THEME, ROOT_ELEMENT } from './util'
import configureStore from './store/configureStore'
import { saveState } from './store/util'
import Sandbox from './sandbox/Sandbox'
import './styles/style.scss'

tapEventPlugin()

const store = configureStore()

store.subscribe(() => {
  saveState({
    'carto': store.getState().carto
  })
})

ReactDOM.render(
  <Provider
    store={store}
  >
    <MuiThemeProvider
      muiTheme={getMuiTheme(APP_THEME)}
    >
      <Sandbox />
    </MuiThemeProvider>
  </Provider>,
  ROOT_ELEMENT
)
