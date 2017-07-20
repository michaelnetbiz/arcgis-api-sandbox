// @flow
import React, { PureComponent } from 'react'
import LoadingIndicator from './LoadingIndicator'

class QuantitativeFeedback extends PureComponent {
  props: {
    feedbackColor: string,
    isVisible: boolean
  }
  props: Object

  render () {
    return (
      <div
        className={'quantitativeFeedback'}
      >
        {
          this.props.isVisible ? (
            <LoadingIndicator
              color={this.props.feedbackColor}
            />
          ) : (
            <div />
          )
        }
      </div>
    )
  }
}

export default QuantitativeFeedback
