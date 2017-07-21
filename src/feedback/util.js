// @flow
export const DISMISSABLE = 'dismiss'
export const FOCUSABLE = 'focus'
export const UNACTIONABLE = ''
export const ISSUE_AUTO_HIDE_DURATION = 4000

export const createIssue = (issueMessage: string, issueType: string = DISMISSABLE) => {
  return {
    'message': issueMessage, // TODO: use template literal to make log messages easier to integration and thus more robust.
    'type': issueType
  }
}
