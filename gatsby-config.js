require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.MY_READONLY_DATOCMS_API_TOKEN || '',
        previewMode: true,
        disableLiveReload: true,
      },
    },
  ],
}
