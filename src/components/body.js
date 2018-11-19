import React from 'react'
import HeaderWithLink from './headerWithLink';
import Card from './card';

const EXAMPLE_PROJ = 'Example Projects'
const JSFIDDLE = 'JSFiddle'
const TOOLS = 'Tools'
const PROFILES = 'Contact'

const links = {
  [EXAMPLE_PROJ]: [{ href: 'https://asarenski.github.io/angular1Example', text: 'Angular1 Example' }],
  [JSFIDDLE]: [{ href: 'https://jsfiddle.net/user/asarenski/fiddles', text: 'JSFiddle' }],
  [TOOLS]: [
    { href: 'https://asarenski.github.io/browser_version_alert', text: 'browser version alert' },
    { href: 'https://github.com/asarenski/gdax-crypto-tax-js', text: 'tax calculator gdax' },
  ],
  [PROFILES]: [
    { href: 'https://github.com/asarenski', text: 'github' },
    { href: 'https://www.linkedin.com/in/adamsarenski/', text: 'linkedIn' },
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