import React from 'react'
import colorPalette from '../constants/colorPalette';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: colorPalette.header,
      borderBottom: `1px solid ${colorPalette.border}`,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
    </div>
  </div>
)

export default Header
