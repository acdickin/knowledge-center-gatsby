/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */



// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query data from Kentico
  const result = await graphql(navPagesQuery)


  // const PageBuilder = (nodes, level) => {
  //   nodes.forEach(node=>{


  //     if  (node.system.type === product_overview)
  //     let {body, post_tags,product_description,published,title,url,why_the_product_is_useful} = node.elements
  //       createPage({
  //         path: node.fields.slug,
  //         component: path.resolve(`src/templates/article.js`),
  //         context: {
  //          body, post_tags,product_description,published,title,url,why_the_product_is_useful
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
    if (node.system.type === "product_overview") {
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


let navPagesQuery = `
  {
    allKontentItemNavigationItem (filter: {system: {codename: {eq: "root"}}}){
      nodes {
        system {
          codename
          type
        }
        elements {
          subitems {
            value {
              ... on kontent_item_navigation_item {
                system {
                  codename
                  type
                }
                elements {
                  subitems {
                    value {
                      ... on kontent_item_navigation_item {
                        system {
                          codename
                          type
                        }
                        elements {
                          subitems {
                            value {
                              ... on kontent_item_navigation_item {
                                system {
                                  codename
                                  type
                                }
                                elements {
                                  subitems {
                                    value {
                                      ... on kontent_item_navigation_item {
                                        system {
                                          codename
                                          type
                                        }
                                      }
                                      ... on kontent_item_product_overview {
                                        system {
                                          codename
                                          type
                                        }
                                        elements {
                                          body {
                                            value
                                          }
                                          post_tags {
                                            value {
                                              name
                                            }
                                          }
                                          product_description {
                                            value
                                          }
                                          published {
                                            value(fromNow: true)
                                          }
                                          title {
                                            value
                                          }
                                          url {
                                            value
                                          }
                                          why_the_product_is_useful {
                                            value
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              ... on kontent_item_product_overview {
                                system {
                                  codename
                                  type
                                }
                                elements {
                                  body {
                                    value
                                  }
                                  post_tags {
                                    value {
                                      name
                                    }
                                  }
                                  product_description {
                                    value
                                  }
                                  published {
                                    value(fromNow: true)
                                  }
                                  title {
                                    value
                                  }
                                  url {
                                    value
                                  }
                                  why_the_product_is_useful {
                                    value
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      ... on kontent_item_product_overview {
                        system {
                          codename
                          type
                        }
                        elements {
                          body {
                            value
                          }
                          post_tags {
                            value {
                              name
                            }
                          }
                          product_description {
                            value
                          }
                          published {
                            value(fromNow: true)
                          }
                          title {
                            value
                          }
                          url {
                            value
                          }
                          why_the_product_is_useful {
                            value
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on kontent_item_product_overview {
                system {
                  codename
                  type
                }
                elements {
                  body {
                    value
                  }
                  post_tags {
                    value {
                      name
                    }
                  }
                  product_description {
                    value
                  }
                  published {
                    value(fromNow: true)
                  }
                  title {
                    value
                  }
                  url {
                    value
                  }
                  why_the_product_is_useful {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`