/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import Page from "./page"
import JumpTo from "./layouts/jump-to"
import "./layout.css"

const Layout = (props) => {


  return (
    <div id="defaultwrapper">
      <Header />
      <Sidebar />
      <Page />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
