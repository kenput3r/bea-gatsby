import React, {useEffect} from "react"
import VideoSection from "../components/videoSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import AboutSection from "../components/aboutSection"

const AboutPage = () => {
  useEffect(() => {
    document.querySelectorAll('.sidenav-overlay').style = "display: none; opacity: 0;"
  });
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
