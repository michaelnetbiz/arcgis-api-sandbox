// @flow
import {
  CLEAR_ISSUE,
  DISMISS_ISSUE,
  SET_ISSUE
} from './feedbackActionTypes'
import FEEDBACK from './initialState'

export default (state: Object = FEEDBACK, action: Object) => {
  switch (action.type) {
    case CLEAR_ISSUE: {
      return Object.assign({}, state, {
        'issue': '',
        'issueType': '',
        'isIssueVisible': false
      })
    }
    case DISMISS_ISSUE: {
      return Object.assign({}, state, {
        'isIssueVisible': false
      })
    }
    case SET_ISSUE: {
      return Object.assign({}, state, {
        'issue': action.issue.message,
        'issueType': action.issue.type,
        'isIssueVisible': true
      })
    }
    default: {
      return state
    }
  }
}
