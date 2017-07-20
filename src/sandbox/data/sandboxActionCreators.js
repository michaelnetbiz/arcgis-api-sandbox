// @flow
import { SET_USER_AGENT_TYPE } from './sandboxActionTypes'

export const setUserAgentType = (userAgentType: string) => {
  return {
    'type': SET_USER_AGENT_TYPE,
    userAgentType
  }
}
