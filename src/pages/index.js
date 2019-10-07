import React, {useEffect} from "react"
//import { Link } from "gatsby"
import InfoSection from "../components/infoSection"
import ParallaxSection from "../components/parallaxSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import M from 'materialize-css'

const IndexPage = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  });
  return(
    <Layout>
      <SEO title="Home" />
      <InfoSection />
      <ParallaxSection />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
