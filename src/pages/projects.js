import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

// projects is an alias! 
const ProjectsPage = ({data:{allStrapiProject:{nodes:projects}}}) => {
  return (
    <>
    <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects}></Projects>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
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
`


export default ProjectsPage
