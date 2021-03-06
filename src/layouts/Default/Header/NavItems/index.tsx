import PropTypes from 'prop-types'
import React, { useEffect, useState, useCallback } from 'react'

import Link from 'components/Link'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const NavItems = ({ items }) => {
  const [data, setData] = useState([])

  const renderDataForItem = useCallback(({ value, to, ...other }) => {
    return (
      <Grid item key={value}>
        <Typography variant='h6' color='inherit'>
          <Link to={to} {...other}>
            {value}
          </Link>
        </Typography>
      </Grid>
    )
  }, [])

  const renderData = useCallback(
    (items) => {
      return items.map((item) => renderDataForItem(item))
    },
    [renderDataForItem]
  )

  useEffect(() => {
    const newData = renderData(items)
    setData(newData)
  }, [items, renderData])

  return (
    <Grid
      container
      justify='space-evenly'
      alignContent='center'
      alignItems='center'
    >
      {data}
    </Grid>
  )
}

NavItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
}

NavItems.defaultProps = {
  items: [],
}

export default NavItems
