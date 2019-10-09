import React, {useEffect} from "react"
//import { Link } from "gatsby"
import InfoSection from "../components/infoSection"
import ParallaxSection from "../components/parallaxSection"
import VideoSection from "../components/videoSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
if (typeof window !== `undefined`) {
//import M from 'materialize-css'
require('materialize-css')
}

const IndexPage = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    window.M.Parallax.init(elems);
  });
  return(
    <Layout>
      <SEO title="Beatriz Mendoza" />
      <InfoSection />
      <ParallaxSection />
      <VideoSection />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
