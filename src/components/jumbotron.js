import React from 'react';
import colorPalette from '../constants/colorPalette';
import Image from './image';

const Jumbotron = () => {
  return (
    <div style={{
      background: colorPalette.jumbotron,
      margin: '0 -1.0875rem 1.45rem -1.0875rem',
      padding: '1.0875rem 1.45rem',
      borderBottom: `1px solid ${colorPalette.border}`
    }}>
      <div style={{
        maxWidth: '250px',
        paddingTop: '1.0875rem',
        paddingBottom: '1.0875rem',
        marginBottom: '1.45rem',
        margin: '0 auto'
      }}>
        <Image style={{ borderRadius: '50%', border: `1px solid ${colorPalette.border}` }} />
      </div>
      <p style={{ textAlign: 'center', fontSize: '22px' }}>
        A software engineer with experience in building web applications.
        <br/>
        A self-starter with a multidisciplinary background.
      </p>
    </div>
  );
}
export default Jumbotron