import PropTypes from 'prop-types'
import React, { useEffect, useState, useCallback } from 'react'

import Link from 'components/Link'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

const NavItems = ({ items, onClick }) => {
  const [data, setData] = useState([])

  const renderDataForItem = useCallback(
    ({ value, to, icon, iconOther, ...other }) => {
      return (
        <Link to={to} key={value} {...other} onClick={onClick}>
          <ListItem button>
            <ListItemIcon>
              <Icon {...iconOther}>{icon || 'link'}</Icon>
            </ListItemIcon>
            <ListItemText>{value}</ListItemText>
          </ListItem>
        </Link>
      )
    },
    [onClick]
  )

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

  return <>{data}</>
}

NavItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.string,
      iconOther: PropTypes.object,
    })
  ),
  onClick: PropTypes.func,
}

NavItems.defaultProps = {
  items: [],
  onClick: () => {},
}

export default NavItems
