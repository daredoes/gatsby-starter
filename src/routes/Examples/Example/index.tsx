/* eslint-disable react/prop-types */
import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Typography from '@material-ui/core/Typography'
import SEO from 'components/SEO'
interface Props extends RouteComponentProps {
  exampleId?: string
}

const Subscriptions: React.FC<Props> = ({
  children,
  location,
  navigate,
  path,
  uri,
  default: wasDefault,
  exampleId,
}) => {
  return (
    <>
      <SEO title={`Example #${exampleId}`} />
      <Typography>
        This is example number {exampleId}. This page does not actually exist
        before you visit it.
      </Typography>
    </>
  )
}

export default Subscriptions
