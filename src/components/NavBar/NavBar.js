import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ handleCacti }) => {

  const countUp = () => {
    console.log('im here!');
    return handleCacti()
  }

  return (
    <nav className="main-nav">
      <NavLink className="link" to="/skills" activeClassName="selected" onClick={countUp}>skills</NavLink>
      <NavLink className="link" to="/projects" activeClassName="selected">projects</NavLink>
      <NavLink className="link" to="/resume" activeClassName="selected">resume</NavLink>
      <NavLink className="link" to="/contact" activeClassName="selected">contact</NavLink>
    </nav>
  )
}

export default NavBar
