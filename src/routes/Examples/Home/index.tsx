/* eslint-disable react/prop-types */
import React from 'react'
import { RouteComponentProps } from '@reach/router'

import SEO from 'components/SEO'
import Link from 'components/Link'
import { toExampleUrl } from 'routes/helpers'

import Grid from '@material-ui/core/Grid'

type Props = RouteComponentProps

const COUNT = 10

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

const Examples: React.FC<Props> = ({
  children,
  location,
  navigate,
  path,
  uri,
  default: wasDefault,
}) => {
  const randomIds = React.useCallback((count: number) => {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * 400)
    ).filter(onlyUnique)
  }, [])
  const randomExamples = React.useMemo(() => {
    return randomIds(COUNT).map((id) => {
      return (
        <Grid item key={id}>
          <Link to={toExampleUrl(id)}>Example #{id}</Link>
        </Grid>
      )
    })
  }, [randomIds])
  return (
    <>
      <SEO title='Examples' />
      <Grid container direction='column'>
        <Grid item>A list of examples would go here.</Grid>
        {randomExamples}
      </Grid>
    </>
  )
}

export default Examples
