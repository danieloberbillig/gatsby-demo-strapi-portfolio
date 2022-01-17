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

const About = ({ data }) => {
  const { strapiAbout: { title, image, info, stack } } = data;
  return (
    <>
      <Seo title="About" />
      <section className="aboutPage" >
        <div className="section-center about-center">
          {/* <img src={image.publicURL} alt={title} className="about-img-svg" /> */}
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.stack_item}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

// name of query is not important -> gatsby looks for the exported graphql string - there can only be one page query per file!
export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        stack_item
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`


export default About
