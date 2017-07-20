// @flow
import React, { Component } from 'react'
import Issue from './Issue'

class QualitativeFeedback extends Component {
  props: {
    dispatch: () => mixed,
    issueActionTouchTapHandler: () => mixed,
    issue: string,
    issueType: string,
    isVisible: boolean,
    requestCloseHandler: () => mixed,
  }

  props: Object

  render () {
    return (
      <div
        className={'qualitativeFeedback'}
      >
        {
          this.props.isVisible ? (
            <Issue
              handleIssueActionTouchTap={this.props.issueActionTouchTapHandler}
              handleRequestClose={this.props.requestCloseHandler}
              issue={this.props.issue}
              issueType={this.props.issueType}
            />
          ) : (
            <div />
          )
        }
      </div>
    )
  }
}

export default QualitativeFeedback
