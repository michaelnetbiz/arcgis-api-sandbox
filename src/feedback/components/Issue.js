// @flow
import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import { APP_THEME } from '../../util'
import { ISSUE_AUTO_HIDE_DURATION } from '../util'

/**
 * Class representing the UI component for providing qualitative feedback messages and follow-on actions.
 * @extends Component
 */
class Issue extends Component {
  render () {
    const {
      handleIssueActionTouchTap,
      handleRequestClose,
      issue,
      issueType
    } = this.props
    const {primary1Color, textColor} = APP_THEME.palette
    return (
      <div
        className={'issue'}
      >
        <Snackbar
          action={issueType}
          autoHideDuration={ISSUE_AUTO_HIDE_DURATION}
          bodyStyle={{
            'backgroundColor': primary1Color
          }}
          contentStyle={{
            'color': textColor
          }}
          message={issue}
          onActionTouchTap={handleIssueActionTouchTap}
          onRequestClose={handleRequestClose}
          open
          style={{
            'textAlign': 'center'
          }}
        />
      </div>
    )
  }
}

export default Issue
