import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        company
        position
        date
        desc {
          id
          desc
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const { allStrapiJob: { nodes: jobs }, } = data;
  const [value, setValue] = React.useState(0) // state management which job user sees
  const { position, company, date, desc } = jobs[value] // shows job set in state management

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
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaLongArrowAltRight className="job-icon"></FaLongArrowAltRight>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
