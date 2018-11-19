import React from 'react'
import colorPalette from '../constants/colorPalette'

const Card = ({ children }) => {
  return (
    <div style={{
      width: '250px',
      height: '150px',
      background: colorPalette.card,
      boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
      padding: '1.45rem',
      margin: '0.543rem',
    }}>
      {children}
    </div>
  )
}
export default Card