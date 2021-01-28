/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Sidebar from "./sidebar"
import Page from "./page"
import Footer from "./footer"
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

export default Layout
