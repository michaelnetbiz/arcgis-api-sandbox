// @flow
import {
  CLEAR_ISSUE,
  DISMISS_ISSUE,
  SET_ISSUE
} from './feedbackActionTypes'

export const clearIssue = () => {
  return {
    'type': CLEAR_ISSUE
  }
}

export const dismissIssue = () => {
  return {
    'type': DISMISS_ISSUE
  }
}

// bad form! change to using template literals
export const setIssue = (issue: Object) => {
  return {
    'type': SET_ISSUE,
    issue
  }
}
