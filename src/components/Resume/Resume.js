import React from 'react'

import * as icons from '../../contactIcons'

const Resume = () => {
  return (
    <section>
      <header>
        <h1>Laura Turk</h1>
        <h2>Front End Developer</h2>
      </header>
      <aside>
        <ul className="contact-list">
          <a className="a-contact"
             href="https://github.com/lauraturk"
             target="_blank"
             rel="noopener noreferrer">
            <li>
              {icons.githubIcon}
              <span className="a-contact-info">lauraturk</span>
            </li>
          </a>
          <a className="a-contact"
             href="https://www.linkedin.com/in/laura-turk-denver/"
             target="_blank"
             rel="noopener noreferrer">
            <li>
              {icons.linkedinIcon}
              <span className="a-contact-info">Laura Turk</span>
            </li>
          </a>
          <a className="a-contact"
             href="https://twitter.com/LauraTheTurk"
             target="_blank"
             rel="noopener noreferrer">
            <li>
              {icons.twitterIcon}
              <span className="a-contact-info">@LauraTheTurk</span>
            </li>
          </a>
        </ul>
        <article className="side-bar-block" id="projects">
          <h3>Projects</h3>
          <h4>Flash Lingua</h4>
          <ul className="project-list">
            <a className="a-project-list"
               href="https://flash-lingua.herokuapp.com/search"
               target="_blank"
               rel="noopener noreferrer">
               <li>{icons.websiteIcon}</li>
            </a>
            <a className="a-project-list"
               href="https://github.com/lauraturk/lt-flash-cards-express"
               target="_blank"
               rel="noopener noreferrer">
               <li>{icons.githubIcon}</li>
            </a>
            <li className="project-details">Flash Lingua is a React.js/Redux.js app
              harnessing the power of Google Translate, Google Vision, and the
              Oxford English Dictionary to capture translations/definitions and
              save them as flashcards in custom flashcard decks for future study.
              This app was built as a personal project.</li>
            <li>Testing: Enzyme, Jest, FetchMock</li>
          </ul>
          <h4>Movie Tracker</h4>
          <ul className="project-list">
            <a className="a-project-list"
               href="https://themovietracker.herokuapp.com/"
               target="_blank"
               rel="noopener noreferrer">
               <li>{icons.websiteIcon}</li>
            </a>
            <a className="a-project-list"
               href="https://github.com/lauraturk/movie-tracker"
               target="_blank"
               rel="noopener noreferrer">
               <li>{icons.githubIcon}</li>
            </a>
            <li className="project-details">Movie Tracker is a React.js/Redux.js app
              built with router and a Node.js/express back-end that pulls movie
              details from The Movie DB. The app allows users to browse recently
              released movies and favorite individual movies. The favorite movies
              are saved to the user's dashboard.
              Movie Tracker was assigned as an introductory project for Redux and
              React-Router. It was completed in seven days by a group of three members.
            </li>
            <li>Testing: Enzyme, Jest, FetchMock</li>
          </ul>
        </article>
        <article>
          <h4>Contact</h4>
          <ul>
            <li>303-883-6154</li>
            <li>laura.lk.turk@gmail.com</li>
          </ul>
        </article>
      </aside>
      <main>
        <section className="profile">
          <p>I am a detailed, dedicated, life-long learner passionate about
            creating social good through my work. I came to programming by way of
            teaching digital literacy and 21st Century Skills in public libraries,
            and have honed my ability to lead, collaborate and communicate with
            people from all walks of life.</p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>CSS3/HTML5</li>
            <li>ES 2015</li>
            <li>WAI/ARIA</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>Object Oriented Programming</li>
            <li>Functional Programming</li>
            <li>Unit Testing: Enzyme and Jest</li>
            <li>Feature Testing: Selenium</li>
            <li>Test Driven Development</li>
            <li>Asynchronous JavaScript</li>
            <li>Sketch</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Crucial Conversations</li>

          </ul>
        </section>
        <section>
          <h3>Experience</h3>
          <article>
            <h4>Front End Engineering Student</h4>
            <h5>Turing School of Software and Design</h5>
              <ul>
                <li>Led an extra-curriculur Civic Tech student group</li>
                <li>Facilitated various Civic Tech focused classNamees</li>
                <li>Coordinated an asset-mapping group project:
                  <a href="https://github.com/lauraturk/food4all"
                     target="_blank"
                     rel="noopener noreferrer">{icons.githubIcon} Food4All Repository</a>
                </li>
                <li>Volunteered as Teaching Assistant for Try Turing Weekend</li>
              </ul>
          </article>
          <article>
            <h4>S.T.E.M. Para-Librarian</h4>
            <h5>Denver Public Library | 2013-2017</h5>
            <ul>
              <li>Evaluated and designed research-driven user experiences as
                member of cross-departmental strategic initiative team</li>
              <li>Taught hundreds of technology classNamees, using iterative design
                principles</li>
              <li>Developed engaging and educational S.T.E.M. events for all ages</li>
            </ul>
          </article>
          <article>
            <h4>Para-Librarian</h4>
            <h5>Arapahoe Library District | 2010-2013</h5>
          </article>
        </section>
        <section>
            <h3>Education</h3>
              <h4>Colorado State University</h4>
              <ul>
                <li>B.A. English Language</li>
                <li>B.A. Spanish Language and Literature</li>
              </ul>
            <h3>Achievements</h3>
              <ul>
                <li>Denver Public Library Leadership Academy Graduate</li>
                <li>Presented at local and national conferences</li>
              </ul>
        </section>
      </main>
    </section>
  )
}

export default Resume
