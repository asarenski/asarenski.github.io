import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Body from '../components/body';
import colorPalette from '../constants/colorPalette';

const IndexPage = () => (
  <Layout>
    <div style={{
      background: '#EEE',
      margin: '0 -1.0875rem 1.45rem -1.0875rem',
      borderBottom: `1px solid ${colorPalette.border}`
    }}>
      <div style={{
        maxWidth: '300px',
        paddingTop: '1.0875rem',
        paddingBottom: '1.0875rem',
        marginBottom: '1.45rem',
        margin: '0 auto'
      }}>
        <Image style={{ borderRadius: '50%', border: `2px solid ${colorPalette.border}` }} />
      </div>
      <p style={{ textAlign: 'center' }}>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </div>
    <Body />
  </Layout>
)

export default IndexPage
