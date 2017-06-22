import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import IconBar from '../IconBar/IconBar'


class App extends Component {
  constructor ({history}) {
    super ()
    console.log(history);
    this.state = {
      visited: 0
    }
  }


  render() {
    const countCacti = () => {
      console.log('are you here?')
      this.setState({visited: this.state.visited + 1})
    }

    return (
      <div className="app">
        <header>
          <IconBar />
          <Link to="/"><h1>Laura Turk</h1></Link>
          <h2>Front End Software Developer</h2>
          <NavBar handleCacti={countCacti}/>
        </header>
        <main className="app">
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
