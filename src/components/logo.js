import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      theImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
            fixed(width: 300, quality: 100) {
              ...GatsbyImageSharpFixed
            }
        }
      }
    }
  `)

  return <Img fixed={data.theImage.childImageSharp.fixed} alt="Graphic reading Beatriz Mendoza for Santa Ana City Council, paid for by Beatriz Mendoza for City Council 2019. ID# 1420012" objectFit="cover" />
}

export default Logo
