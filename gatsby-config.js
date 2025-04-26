/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'Adam Sarenski',
    description: 'A software engineer with experience in building web applications.',
    author: '@asarenski',
    siteUrl: 'https://asarenski.github.io/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/constants/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'adam-sarenski-homepage',
        short_name: 'asarenski',
        start_url: '/',
        background_color: '#663399',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/rex_skull.gif', // This path is relative to the root of the site.
      },
    },
  ],
}
