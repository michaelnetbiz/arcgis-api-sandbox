// @flow
import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu'
import { MenuItem } from 'material-ui/DropDownMenu'
import ActionButton from './ActionButton'
import InfoMenu from './InfoMenu'
import BasemapMenu from './BasemapMenu'
import FeatureLayerMenu from './FeatureLayerMenu'
import { APP_THEME } from '../../util'
import { BASEMAPS, FEATURE_LAYERS } from '../util'

/**
 * Class representing a set of menus for affording common user activities.
 * @extends Component
 */
class ActionMenu extends Component {
  constructor (props: Object) {
    super(props)
    this.mapArrayToMenuItems = this.mapArrayToMenuItems.bind(this)
  }

  mapArrayToMenuItems (selection: string, array: Array<string>) {
    return array.map((elem: string, i: number) => {
      return (
        <MenuItem
          checked={selection === elem}
          className={'menuItem'}
          key={i}
          primaryText={elem}
          value={i}
        />
      )
    })
  }

  mapArrayToMenuItems: () => mixed

  render () {
    const iconSize = 75
    const {accent1Color, primary1Color} = APP_THEME.palette
    const {
      basemap,
      basemapSelectionHandler,
      featureLayer,
      featureLayerSelectionHandler,
      geolocationMenuItemTouchTapHandler
    } = this.props
    const basemapMenuItems = this.mapArrayToMenuItems(basemap, BASEMAPS)
    const featureLayerMenuItems = this.mapArrayToMenuItems(featureLayer, FEATURE_LAYERS)
    return (
      <div
        className={'actionMenu'}
      >
        <IconMenu
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'top'
          }}
          children={
            <div>
              <InfoMenu
                color={primary1Color}
                handleGeolocationMenuItemTouchTap={geolocationMenuItemTouchTapHandler}
                iconSize={iconSize}
              />
              <BasemapMenu
                basemap={basemap}
                color={primary1Color}
                iconSize={iconSize}
                items={basemapMenuItems}
                handleItemSelection={basemapSelectionHandler}
              />
              <FeatureLayerMenu
                color={primary1Color}
                featureLayer={featureLayer}
                iconSize={iconSize}
                items={featureLayerMenuItems}
                handleItemSelection={featureLayerSelectionHandler}
              />
            </div>
          }
          iconButtonElement={
            <ActionButton
              backgroundColor={accent1Color}
            />
          }
          targetOrigin={{
            horizontal: 'left',
            vertical: 'bottom'
          }}
        />
      </div>
    )
  }
}

export default ActionMenu
