/* eslint-disable react/prop-types */
import React from 'react'
import { Router } from '@reach/router'
import { withPrefix } from 'gatsby'

import Home from './Home'
import Example from './Example'

import { RouteComponentProps } from '@reach/router'

// Required interface to allow passing path property
type Props = RouteComponentProps

const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <Home path='/' />
      <Example path={withPrefix('/:exampleId')} />
    </Router>
  )
}

export default App
