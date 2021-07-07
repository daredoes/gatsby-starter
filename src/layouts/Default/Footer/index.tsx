/* eslint-disable react/prop-types */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import relativeDate from 'tiny-relative-date'

interface Props {
  printButton?: boolean
}

interface Site {
  buildTime?: string
}

interface Query {
  site?: Site
}

const Footer: React.FunctionComponent<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `) as Query

  const buildDate = React.useMemo(() => {
    if (!data?.site?.buildTime) return 'Unknown'
    return relativeDate(data.site.buildTime)
  }, [data?.site?.buildTime])
  return (
    <footer>
      <Box p={1}>
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='center'
        >
          {children}
          <Grid item>
            <Typography style={{ textTransform: 'capitalize' }}>
              Last Updated: {buildDate}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer
