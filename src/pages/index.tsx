import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import Layout from 'layouts/Default'
import SEO from 'components/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' description='The home page' meta={[]} lang='en' />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage
