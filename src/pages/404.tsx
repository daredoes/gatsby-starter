import React, { useEffect, useState } from 'react'

import Layout from 'layouts/Default'
import SEO from 'components/SEO'

const NotFoundPage = () => {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return (
      <Layout>
        <SEO title='Loading' />
        <div>Loading</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title='404: Not found' />
      <div>Bad Page</div>
    </Layout>
  )
}

export default NotFoundPage
