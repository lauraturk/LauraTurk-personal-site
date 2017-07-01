import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import IconBar from '../IconBar/IconBar'
import cactusObj from '../cactusObj'

class App extends Component {
  setBackgroundStyle(locationObj) {
    switch (locationObj.pathname) {
      case '/':
        return { backgroundImage: cactusObj.cactusOne }
      case '/skills':
        return { backgroundImage: cactusObj.cactusTwo }
      case '/projects':
        return { backgroundImage: cactusObj.cactusThree }
      case '/resume':
        return { backgroundImage: cactusObj.cactusFour }
      case '/contact':
        return { backgroundImage: cactusObj.cactusFive }
      default:
        return "no-display"
    }
  }

  render() {
    const { location } = this.props
    return (
      <div className="u-wrapper background-img" style={this.setBackgroundStyle(location)}>
        <header className="u-setHeader">
          <Route path='/' render={({ location }) => <NavBar handleLocation={location} />} />
          <Route path='/' render={({ location }) => <IconBar handleLocation={location} />} />
        </header>
        <h4>work in progress</h4>
        <p>happily accepting pull requests <a href="https://github.com/lauraturk/LauraTurk-personal-site">here</a>!</p>
        <main className="u-main-wrapper">
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
