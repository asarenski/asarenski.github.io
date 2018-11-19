import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Body from '../components/body';

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Body />
  </Layout>
)

export default IndexPage
