/* eslint-disable react/prop-types */
import React from 'react'
import { RouteComponentProps } from '@reach/router'

// Required interface to allow passing path property
type Props = RouteComponentProps

const Home: React.FC<Props> = ({
  children,
  location,
  navigate,
  path,
  uri,
  default: wasDefault,
}) => {
  return <div>You are home</div>
}

export default Home
