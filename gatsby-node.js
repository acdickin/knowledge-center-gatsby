/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { navPagesQuery } = require("./src/query/nav-pages-query");

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query data from Kentico
  const result = await graphql(navPagesQuery)

  const FOLDER_NAME = [
    "categorylist",
    "subcategoryfolder",
    "pagesfolder",
  ];
  const LEAF_NAME = [
    "categoryname",
    "subcategories",
    "page",
    "level3"
  ];

  // const PageBuilder = (nodes, level) => {
  //   nodes.forEach(node=>{


  //     if  (node.system.type === product_overview)
  //     let {body, post_tags,product_description,published,title,url,why_the_product_is_useful} = node.elements
  //       createPage({
  //         path: node.fields.slug,
  //         component: path.resolve(`src/templates/article.js`),
  //         context: {
  //           slug: node.fields.slug,
  //         },
  //       })
  //     })
  //     PageBuilder(node.elements.subitems.value,value+1)
  //   })

  // }
  // Create pages
  result.data.allKontentItemNavigationItem.nodes.forEach(node => {
    console.log(node)
    //if  (node.system.type === product_overview)
    // let {body, post_tags,product_description,published,title,url,why_the_product_is_useful}

    //else
    //PageBuilder(node.elements.subitems.value,1)
    if (node.system.type === product_overview) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/components/layout.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    }
  })
}