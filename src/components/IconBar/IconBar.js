import React from 'react'

import * as icons from '../../contactIcons'

const IconBar = () => {

  return (
    <nav className="IconBar">
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
    </nav>
  )
}

export default IconBar
