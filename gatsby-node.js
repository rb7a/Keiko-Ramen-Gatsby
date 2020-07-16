const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allStripePrice {
        edges {
          node {
            id
            product {
              metadata {
                slug
              }
            }
          }
        }
      }
    }
  `)

  pages.data.allStripePrice.edges.forEach(edge => {
    createPage({
      path: `/menu/${edge.node.product.metadata.slug}`,
      component: path.resolve("./src/templates/ItemPageTemplate.js"),
      context: {
        id: edge.node.id,
        slug: edge.node.product.metadata.slug
      }
    })
  })
}