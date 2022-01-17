import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"     // only place where css is imported! Layout.js component wraps around all other components throgh gatsby-browser.js 


const Layout = ({ children }) => {

  // Declare a new state variable, which we'll call "isOpen"; useState(=initial state value)
  // const [a,b] = ...  -> 'Array destructuring' -> make two variables from returned array
  // useState returns 1) current state and 2) a function to update it
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);   // turn to to opposite value

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
