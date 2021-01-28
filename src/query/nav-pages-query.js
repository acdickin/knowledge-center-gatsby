export let navPagesQuery = `
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