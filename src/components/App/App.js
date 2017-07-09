import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import cactusObj from '../cactusObj'
import Bio from '../Bio/Bio'
import * as icons from '../../contactIcons'

class App extends Component {
  setBackgroundStyle(locationObj) {
    switch (locationObj.pathname) {
      case '/':
        return { backgroundImage: cactusObj.cactusOne }
      case '/skills':
        return { backgroundImage: cactusObj.cactusThree }
      case '/projects':
        return { backgroundImage: cactusObj.cactusFive }
      case '/resume':
        return { backgroundImage: cactusObj.cactusFour }
      case '/contact':
        return { backgroundImage: cactusObj.cactusTwo }
      default:
        return "no-display"
    }
  }

  // const { handleLocation } = props

  showHome (locationObj){
    return locationObj.pathname !== '/' ?
      <NavLink to="/" className="u-Left u-floatBottom" activeClassName="selected">{icons.homeIcon}</NavLink> :
      (<div className="u-Left u-floatBottom Name">
        <h1>Laura Turk</h1>
        <h2>Front End Software Developer</h2>
      </div>)
  }

  render() {
    const { location } = this.props
    return (
      <div className="u-wrapper background-img" style={this.setBackgroundStyle(location)}>
        <header className="u-setHeader header-background-img">
          {this.showHome(location)}
          <Route path='/' render={({ location }) => <NavBar handleLocation={location} />} />
        </header>
        <main className="u-main-wrapper">
          <Route path='/' exact component={ Bio } />
          <Route path="/skills" component={ About } />
          <Route path="/projects" component={ Projects } />
          <Route path="/resume" component={ Resume } />
          <Route path="/contact" component={ Contact } />
        </main>
      </div>
    )
  }
}

export default App;
