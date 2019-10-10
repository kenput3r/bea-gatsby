import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      theImage: file(relativePath: { eq: "beatriz-mendoza-old-neighborhood.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.theImage.childImageSharp.fluid} alt="Beatriz Mendoza in the neighborhood that she grew up in" objectFit="cover" />
}

export default AboutImage
