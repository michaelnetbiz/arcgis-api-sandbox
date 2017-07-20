// @flow
import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const LoadingIndicator = (props: Object) => {
  const {color} = props
  return (
    <div>
      <CircularProgress
        color={color}
        mode={'indeterminate'}
      />
    </div>
  )
}

export default LoadingIndicator
