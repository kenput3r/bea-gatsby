import React, {useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import AboutSection from "../components/aboutSection"
import AboutVideoSection from "../components/aboutVideoSection"

const AboutPage = () => {
  useEffect(() => {
    document.querySelectorAll('.sidenav-overlay').style = "display: none; opacity: 0;"
  });
  return(
    <Layout>
      <SEO title="About Beatriz Mendoza" />
      <PageHeader />
      <AboutSection />
      <AboutVideoSection />
    </Layout>
  )
}

export default AboutPage
