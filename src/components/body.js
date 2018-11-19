import React from 'react'
import HeaderWithLink from './headerWithLink';

const EXAMPLE_PROJ = 'Example Projects'
const JSFIDDLE = 'JSFiddle Code Examples'
const TOOLS = 'Tools'
const PROFILES = 'Profiles'

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
    <>
      <HeaderWithLink headerText={EXAMPLE_PROJ} links={links[EXAMPLE_PROJ]} />
      <HeaderWithLink headerText={JSFIDDLE} links={links[JSFIDDLE]} />
      <HeaderWithLink headerText={TOOLS} links={links[TOOLS]} />
      <HeaderWithLink headerText={PROFILES} links={links[PROFILES]} />
    </>
  )
};
export default Body