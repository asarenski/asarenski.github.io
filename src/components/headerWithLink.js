import React from 'react'
import colorPalette from '../constants/colorPalette';

const HeaderWithLink = ({ headerText, links }) => {
  return (
    <>
    <h2 style={{
      marginBottom: '1.0875rem',
    }}>{headerText}</h2>
    <ul style={{
      listStyleType: 'none',
      marginLeft: 0,
    }}>
    {links.map(({ href, text }) => {
      return <li style={{ marginBottom: 0, }}>
        <a style={{ color: colorPalette.link }} href={href}>{text}</a>
      </li>
    })}
    </ul>
    </>
  )
}
export default HeaderWithLink