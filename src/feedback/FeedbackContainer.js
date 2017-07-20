// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Feedback from './components/Feedback'

/**
 * Class representing Container through which system feedback providers are connected to the application data store.
 * @extends Component
 */
class FeedbackContainer extends Component {
  render () {
    return (
      <Feedback {...this.props} />
    )
  }
}

const mapStateToProps = (state: Object) => {
  const {feedback} = state
  const {
    issue,
    issueType,
    isIssueVisible
  } = feedback
  return {
    issue,
    issueType,
    isIssueVisible
  }
}

export default connect(mapStateToProps)(FeedbackContainer)
