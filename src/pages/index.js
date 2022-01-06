import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"


const IndexPage = ({data}) => {
  const { allStrapiProject:{nodes:projects}} = data
  return (
    <>
      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured project"  showLink projects={projects}/>
    </>
  )
}


export const query = graphql`
  {
    allStrapiProject(filter: {featured: {eq: true}}) {
      nodes {
        description
        featured
        github
        id
        stack {
          id
          stack_item
        }
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        slug
      }
    }
  }
`;


export default IndexPage
