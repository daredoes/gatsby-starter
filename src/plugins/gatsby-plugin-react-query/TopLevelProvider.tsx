import React from 'react'
import PropTypes from 'prop-types'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
function TopLevelProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

TopLevelProvider.propTypes = {
  children: PropTypes.node,
}

export default TopLevelProvider
