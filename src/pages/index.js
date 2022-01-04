import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

export default IndexPage
