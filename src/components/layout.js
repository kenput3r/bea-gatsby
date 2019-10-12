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
    const side_nav = document.querySelector('.sidenav');
    const overlay = document.querySelector('.sidenav-overlay');
    const drag_target = document.querySelector('.drag-target.right-aligned');
    if(overlay !== null) {
      overlay.parentElement.removeChild(overlay);
    }
    if(drag_target !== null) {
      drag_target.parentElement.removeChild(drag_target);
    }
    window.M.Sidenav.init(side_nav, {edge: "right"});
    //disable current Links
    const current = document.querySelectorAll('[aria-current="page"]');
    for(const link of current) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
      })
    }
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
