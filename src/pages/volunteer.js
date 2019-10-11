import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import VolunteerSection from "../components/volunteerSection"

const VolunteerPage = () => {
  return(
    <Layout>
      <SEO title="Volunteer" />
      <PageHeader />
      <VolunteerSection />
    </Layout>
  )
}

export default VolunteerPage