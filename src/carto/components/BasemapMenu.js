// @flow
import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MapIcon from 'material-ui/svg-icons/maps/map'

/**
 * Class representing a menu containing basemap controls for the map.
 * @extends Component
 */
class BasemapMenu extends Component {
  render () {
    const {
      basemap,
      color,
      iconSize,
      items,
      handleItemSelection
    } = this.props
    return (
      <div
        className={'basemapMenu'}
      >
        <DropDownMenu
          anchorOrigin={{
            'horizontal': 'left',
            'vertical': 'bottom'
          }}
          children={items}
          iconButton={
            <div
              children={
                <MapIcon
                  height={iconSize}
                  hoverColor={color}
                  width={iconSize}
                />
              }
              className={'basemapMenuIconButton'}
            />
          }
          listStyle={{
            'textAlign': 'right'
          }}
          onChange={handleItemSelection}
          targetOrigin={{
            'horizontal': 'right',
            'vertical': 'bottom'
          }}
          value={basemap}
        />
      </div>
    )
  }
}

export default BasemapMenu
