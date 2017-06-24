import React from 'react'
import { NavLink } from 'react-router-dom'

import * as icons from '../../contactIcons'

const IconBar = (props) => {
  const { handleLocation } = props

  const showHome = () => {
    return handleLocation.pathname !== '/' ?
      <NavLink to="/" className="u-inline" activeClassName="selected">{icons.homeIcon}</NavLink> :
      (<div className="u-Left">
        <h1>Laura Turk</h1>
        <h2>Front End Software Developer</h2>
      </div>)
  }

  return (
    <nav className="IconBar u-floatCenter u-floatTop">
      <ul className="IconBar-ul">
        <a className="a-icon u-inline"
          href="https://github.com/lauraturk"
          target="_blank"
          rel="noopener noreferrer">
          <li className="icon-bar-li">
            {icons.githubIcon}
            <span className="a-icon-info">lauraturk</span>
          </li>
        </a>
        <a className="a-icon u-inline"
          href="https://www.linkedin.com/in/laura-turk-denver/"
          target="_blank"
          rel="noopener noreferrer">
          <li className="icon-bar-li">
            {icons.linkedinIcon}
            <span className="a-icon-info">Laura Turk</span>
          </li>
        </a>
        <a className="a-icon u-inline"
          href="https://twitter.com/LauraTheTurk"
          target="_blank"
          rel="noopener noreferrer">
          <li className="icon-bar-li">
            {icons.twitterIcon}
            <span className="a-icon-info">@LauraTheTurk</span>
          </li>
        </a>
      </ul>
      {showHome()}
    </nav>
  )
}

export default IconBar
