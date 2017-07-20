// @flow
import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

/**
 * Class representing the button for activating the @ActionMenu.
 * @extends Component
 */
class ActionButton extends Component {
  constructor (props: Object) {
    super(props)
    this.handleTouchTap = this.props.onTouchTap.bind(this)
  }

  props: {
    backgroundColor: string,
    isDisabled: boolean,
    handleTouchTap: () => mixed
  }

  handleTouchTap: () => mixed
  props: Object

  render () {
    return (
      <div
        className={'actionButton'}
      >
        <FloatingActionButton
          backgroundColor={this.props.backgroundColor}
          children={
            <MoreVertIcon />
          }
          disabled={this.props.isDisabled}
          onTouchTap={this.handleTouchTap}
        />
      </div>
    )
  }
}

export default ActionButton
