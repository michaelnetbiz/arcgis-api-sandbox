// @flow
import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import LayersIcon from 'material-ui/svg-icons/maps/layers'

/**
 * Class representing a menu containing feature layer controls for the map.
 * @extends Component
 */
class FeatureLayerMenu extends Component {
  render () {
    const {
      color,
      featureLayer,
      handleItemSelection,
      iconSize,
      items
    } = this.props
    return (
      <div
        className={'featureLayerMenu'}
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
                <LayersIcon
                  height={iconSize}
                  hoverColor={color}
                  width={iconSize}
                />
              }
              className={'featureLayerMenuIconButton'}
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
          value={featureLayer}
        />
      </div>
    )
  }
}

export default FeatureLayerMenu
