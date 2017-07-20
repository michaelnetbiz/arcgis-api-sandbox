// @flow
import {
  SET_USER_AGENT_TYPE
} from './sandboxActionTypes'
import SANDBOX from './initialState'

export default (state: Object = SANDBOX, action: Object) => {
  switch (action.type) {
    case SET_USER_AGENT_TYPE: {
      return Object.assign({}, state, {
        'userAgentType': action.userAgentType
      })
    }
    default: {
      return state
    }
  }
}
