import React from 'react'
import HeaderWithLink from './headerWithLink';
import Card from './card';

const TOOLS = 'Tools'
const CONTACT = 'Contact'
const GAMES = 'Games'

const links = {
  [TOOLS]: [
    { href: 'https://asarenski.github.io/browser_version_alert', text: 'browser version alert' },
  ],
  [CONTACT]: [
    { href: 'https://github.com/asarenski', text: 'github' },
    { href: 'https://www.linkedin.com/in/adamsarenski/', text: 'linkedIn' },
  ],
  [GAMES]: [
    { href: 'https://asarenski.github.io/godotCraps', text: 'Craps' },
  ],
}

const Body = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap',
    }}>
      {
        Object.keys(links).map(linkKey => {
          return (
            <Card>
              <HeaderWithLink headerText={linkKey} links={links[linkKey]} />
            </Card>
          )
        })
      }
    </div>
  )
};
export default Body