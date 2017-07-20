// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Carto from './components/Carto'

/**
 * Class representing container component providing connection to store for @Carto and its children.
 * @extends Component
 */
class CartoContainer extends Component {
  render () {
    return (
      <Carto {...this.props} />
    )
  }
}

const mapStateToProps = (state: Object) => {
  const {carto} = state
  const {
    basemap,
    extent,
    featureLayer,
    position
  } = carto
  return {
    basemap,
    extent,
    featureLayer,
    position
  }
}

export default connect(mapStateToProps)(CartoContainer)
