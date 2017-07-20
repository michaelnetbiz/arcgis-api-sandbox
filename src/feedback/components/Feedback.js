// @flow
import React, { Component } from 'react'
import QualitativeFeedback from './QualitativeFeedback'
import QuantitativeFeedback from './QuantitativeFeedback'
import { clearIssue, dismissIssue } from '../data/feedbackActionCreators'
import { DISMISSABLE, FOCUSABLE, UNACTIONABLE } from '../util'

/**
 * Class representing system feedback.
 * @extends Component
 */
class Feedback extends Component {
  constructor (props: Object) {
    super(props)
    this.handleIssueActionTouchTap = this.handleIssueActionTouchTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.timer = undefined
  }

  handleIssueActionTouchTap () {
    const {
      dispatch,
      issueType
    } = this.props
    switch (issueType) {
      case DISMISSABLE: {
        return dispatch(dismissIssue())
      }
      case FOCUSABLE: {
        return dispatch(dismissIssue())
      }
      case UNACTIONABLE: {
        return dispatch(dismissIssue())
      }
      default: {
        return {}
      }
    }
  }

  handleRequestClose () {
    const {dispatch} = this.props
    dispatch(clearIssue())
  }

  props: {
    basemap: string,
    dispatch: () => mixed,
    issue: string,
    issueType: string,
    isIssueVisible: boolean
  }

  handleIssueActionTouchTap: () => mixed
  handleRequestClose: () => mixed
  props: Object
  timer: number | typeof undefined

  render () {
    const {
      dispatch,
      issue,
      issueType,
      isIssueVisible
    } = this.props
    return (
      <div
        className={'feedback'}
      >
        <QuantitativeFeedback
          // disable for now
          isVisible={false}
        />
        <QualitativeFeedback
          dispatch={dispatch}
          issueActionTouchTapHandler={this.handleIssueActionTouchTap}
          requestCloseHandler={this.handleRequestClose}
          isVisible={isIssueVisible}
          issue={issue}
          issueType={issueType}
        />
      </div>
    )
  }
}

export default Feedback
