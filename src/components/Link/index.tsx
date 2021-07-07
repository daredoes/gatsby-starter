/* eslint-disable react/prop-types */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import LinkIcon from '@material-ui/icons/Link'

type Props = {
  to: string
  activeClassName?: string
  anchorTag?: boolean
  anchorSize?: 'inherit' | 'default' | 'small' | 'large'
}
// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link: React.FC<Props> = ({
  children,
  to,
  activeClassName,
  anchorTag,
  anchorSize,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  const anchor = anchorTag ? <LinkIcon fontSize={anchorSize} /> : null

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {anchor}
      {anchor ? ' ' : ''}
      {children}
    </a>
  )
}

export default Link
