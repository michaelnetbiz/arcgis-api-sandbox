// @flow
import React from 'react'
import { MenuItem } from 'material-ui/DropDownMenu'

export default (props: Object) => {
  const {altText, childText, url} = props
  return (
    <a
      alt={altText}
      children={
        <MenuItem
          primaryText={childText}
        />
      }
      href={url}
    />
  )
}
