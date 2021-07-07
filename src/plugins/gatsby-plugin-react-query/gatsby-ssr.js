import React from 'react'
import PropTypes from 'prop-types'
import TopLevelProvider from './TopLevelProvider'

export const wrapRootElement = ({ element }) => (
  <TopLevelProvider>{element}</TopLevelProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node,
}
