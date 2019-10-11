import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import VolunteerSection from "../components/volunteerSection"
import ContactForm from "../components/contactForm"

const VolunteerPage = () => {
  return(
    <Layout>
      <SEO title="Volunteer" />
      <PageHeader />
      <VolunteerSection />
      <ContactForm />
    </Layout>
  )
}

export default VolunteerPage