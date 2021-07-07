import React from 'react'
import Layout from 'layouts/Default'
import SEO from 'components/SEO'

import App from 'routes/App'

const PageComponent = () => {
  return (
    <Layout>
      <SEO
        title='Dashboard'
        description='The dashboard page'
        meta={[]}
        lang='en'
      />
      <App />
    </Layout>
  )
}
export default PageComponent
