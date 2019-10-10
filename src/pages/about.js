import React from "react"
import VideoSection from "../components/videoSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import AboutSection from "../components/aboutSection"

const AboutPage = () => {
  // useEffect(() => {
  //   const elems = document.querySelectorAll('.parallax');
  //   window.M.Parallax.init(elems);
  // });
  return(
    <Layout>
      <SEO title="About Beatriz Mendoza" />
      <PageHeader />
      <AboutSection />
      <VideoSection url="https://www.youtube.com/embed/N4_l0aJuq9g?rel=0" />
    </Layout>
  )
}

export default AboutPage
