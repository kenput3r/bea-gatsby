import React, {useEffect} from "react"
//import { Link } from "gatsby"
import InfoSection from "../components/infoSection"
import ParallaxSection from "../components/parallaxSection"
import VideoSection from "../components/videoSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const IndexPage = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    window.M.Parallax.init(elems);
  });
  return(
    <Layout>
      <SEO title="Beatriz Mendoza" />
      <Banner />
      <InfoSection />
      <ParallaxSection />
      <VideoSection url="https://www.youtube.com/embed/zCA8EvxjsFY?rel=0" />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      
    </Layout>
  )
}

export default IndexPage
