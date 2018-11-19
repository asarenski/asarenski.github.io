import React from 'react'
import colorPalette from '../constants/colorPalette';

const HeaderWithLink = ({ headerText, links }) => {
  return (
    <>
    <h2>{headerText}</h2>
    <ul style={{listStyleType: 'none'}}>
    {links.map(({ href, text }) => {
      return <li>
        <a style={{ color: colorPalette.link }} href={href}>{text}</a>
      </li>
    })}
    </ul>
    </>
  )
}
export default HeaderWithLink