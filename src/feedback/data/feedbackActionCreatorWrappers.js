// @flow
import {
  setIssue
} from './feedbackActionCreators'
import { ISSUE_AUTO_HIDE_DURATION } from '../util'

// Wraps series of issues.
export const chainIssues = (issues: Array<Object>) => {
  return (dispatch: () => mixed) => {
    return issues.map((elem, i) => {
      return setTimeout(() => {
        dispatch(setIssue(elem))
      }, ISSUE_AUTO_HIDE_DURATION * i)
    })
  }
}
