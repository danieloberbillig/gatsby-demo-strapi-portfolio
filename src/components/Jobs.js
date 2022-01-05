import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        data {
          id
          attributes {
            company
            position
            Date
          }
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const jobs = data.allStrapiJob.nodes[0].data
  const [value, setValue] = React.useState(0) // state management which job user sees
  const { position, company, Date } = jobs[value].attributes // shows job set in state management

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"} // if active job, then style active button
                onClick={() => setValue(index)} // changes state (user clicks button to see other job)
              >
                {item.attributes.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{Date}</p>
          {/* {desc.map...}   - description not working - does not get picked up by plugin */}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
