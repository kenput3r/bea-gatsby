/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import SideNav from "./sideNav"
import "typeface-roboto"
import "../css/materialize.min.css"
import "./layout.css"
if (typeof window !== `undefined`) {
  require('materialize-css')
}

const Layout = ({ children }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, {edge: "right"});
  });
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <SideNav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
