import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
  const { handleLocation } = props

  const setClass = () => {
    return handleLocation.pathname !== '/' ?
      "u-floatRight u-floatBottom NavBar" : "u-Left u-floatBelow u-inline NavBar"
  }

  return (
    <nav className={setClass()}>
      <NavLink className="NavBar-link" to="/skills" activeClassName="selected">skills</NavLink>
      <NavLink className="NavBar-link" to="/projects" activeClassName="selected">projects</NavLink>
      <NavLink className="NavBar-link" to="/resume" activeClassName="selected">resume</NavLink>
      <NavLink className="NavBar-link" to="/contact" activeClassName="selected">contact</NavLink>
    </nav>
  )
}

export default NavBar
