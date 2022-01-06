import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

/*
Strapi Source Plugin Update
In the upcoming video we will render about image.
If you are using latest source-strapi version you need to add image[0].localFile in front of the publicURL
src={image.publicURL}
<img src={image[0].localFile.publicURL} alt={title} className="about-img-svg" />
*/

const About = () => {
  return (
    <>
      <h2>about page</h2>
    </>
  )
}

export default About
