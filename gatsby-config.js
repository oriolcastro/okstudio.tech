const config = require('./meta/config')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.MY_READONLY_DATOCMS_API_TOKEN || '',
        previewMode: true,
        disableLiveReload: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
