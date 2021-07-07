import React from 'react'
import { Router, Location } from '@reach/router'
import { withPrefix } from 'gatsby'

import Home from 'routes/Home'
import Examples from 'routes/Examples'
import { BASE_URL, BASE_EXAMPLE_URL } from 'routes/config'

// This component holds all locations for our app that uses authenticated client-only routes
const App = () => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location} basepath={withPrefix(BASE_URL)}>
          <Examples path={withPrefix(`${BASE_EXAMPLE_URL}/*`)} />
          <Home path={withPrefix(`/`)} />
        </Router>
      )}
    </Location>
  )
}

export default App
