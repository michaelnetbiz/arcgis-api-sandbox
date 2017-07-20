// @flow
import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import InfoIcon from 'material-ui/svg-icons/action/info'
import AnchorMenuItem from './AnchorMenuItem'
import { APP_NAME } from '../../util'
import GeolocationMenuItem from './GeolocationMenuItem'

/**
 * Class representing a Menu containing informational items.
 * @extends Component
 */
class InfoMenu extends Component {
  render () {
    const {
      handleGeolocationMenuItemTouchTap,
      iconSize,
      color
    } = this.props
    return (
      <div
        className={'infoMenu'}
      >
        <DropDownMenu
          anchorOrigin={{
            'horizontal': 'left',
            'vertical': 'bottom'
          }}
          iconButton={
            <div
              children={
                <InfoIcon
                  height={iconSize}
                  hoverColor={color}
                  width={iconSize}
                />
              }
              className={'basemapMenuIconButton'}
            />
          }
          targetOrigin={{
            'horizontal': 'right',
            'vertical': 'bottom'
          }}
        >
          <GeolocationMenuItem
            onTouchTap={handleGeolocationMenuItemTouchTap}
          />
          <AnchorMenuItem
            altText={'Link to source code'}
            childText={'Source'}
            url={`//github.com/michaelnetbiz/${APP_NAME}`}
          />
        </DropDownMenu>
      </div>
    )
  }
}

export default InfoMenu
