import React from 'react'

const HeaderWithLink = ({ headerText, links }) => {
  return (
    <>
    <h2>{headerText}</h2>
    <ul style={{listStyleType: 'none'}}>
    {links.map(({ href, text }) => {
      return <li>
        <a href={href}>{text}</a>
      </li>
    })}
    </ul>
    </>
  )
}
export default HeaderWithLink