const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulProject.edges.forEach(({ node }) => {
        createPage({
          path: `/projectes/${node.slug}`,
          component: path.resolve(`./src/templates/single-project.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
