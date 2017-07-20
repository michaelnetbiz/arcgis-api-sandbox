// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeedbackContainer from '../feedback/FeedbackContainer'
import CartoContainer from '../carto/CartoContainer'
import { deriveStyle, detectUserAgentType } from './util'
import { setUserAgentType } from './data/sandboxActionCreators'

/**
 * Class representing the container component that affects the whole of the application through the userAgentType store item.
 * @extends Component
 */
class Sandbox extends Component {
  props: {
    dispatch: () => mixed,
    userAgentType: string
  }

  componentWillMount () {
    const {dispatch} = this.props
    dispatch(setUserAgentType(detectUserAgentType()))
  }

  render () {
    return (
      <div
        style={deriveStyle(this.props.userAgentType)}
      >
        <CartoContainer />
        <FeedbackContainer />
      </div>
    )
  }
}

const mapStateToProps = (state: Object) => {
  const {sandbox} = state
  const {userAgentType} = sandbox
  return {
    userAgentType
  }
}

export default connect(mapStateToProps)(Sandbox)
