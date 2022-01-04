import React from "react"
import logo from "../assets/images/logo.svg" // here directly imported, else could create a component for each svg
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"    // pageLinks can be named anything, as it imports the default; central list of navigation links (change only here once to use everywhere)
import { Link } from "gatsby"


const Navbar = () => {
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        {/* logo and menu hamburger */}
        <img src={logo} alt="Web Dev" />
        <button type="button" className="toggle-btn">
          <FaAlignRight />
        </button>
      </div>
      <div className="nav-links">
        {/* iterate over central list of nav links, each link has id, text, url */}
        {pageLinks.map((link) => {
          return (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          )
        })}
      </div>
    </div>
  </nav>
}

export default Navbar
