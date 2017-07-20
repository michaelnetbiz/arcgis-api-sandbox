// @flow
import React, { Component } from 'react'
import { MenuItem } from 'material-ui/DropDownMenu'

/**
 * Class representing a Menu containing items for geolocation.
 * @extends Component
 */
class GeolocationMenuItem extends Component {
  render () {
    return (
      <MenuItem
        onTouchTap={this.props.onTouchTap}
        primaryText={'Where am I?'}
      />
    )
  }
}

export default GeolocationMenuItem
