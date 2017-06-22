import React from 'react'

import * as icons from '../../contactIcons'
import Images from '../Images/Images'

const Projects = () => {
  return (
    <section className="projects-block">
      <figure>
        <Images src={"/assets/flash-lingua.gif"}
             alt="flash lingua demonstration" />
             <a href="https://github.com/lauraturk/lt-flash-cards-express">{icons.githubIcon}</a>
             <a href="https://flash-lingua.herokuapp.com/search">{icons.websiteIcon}</a>
        <figcaption>
          Flash Lingua is a React.js/Redux.js app harnessing the power of
          Google Translate, Google Vision, and the Oxford English Dictionary to
          capture translations/definitions and save them as flashcards in custom
          flashcard decks for future study. This is a personal project and is ongoing.
          MVP was completed in 14 days. Future goals include: optimizing for mobile,
          implementing more monolingual definitions, integrating speech synthesis.
          Testing: Enzyme, Jest, FetchMock
        </figcaption>
      </figure>
      <figure>
        <Images src={"/assets/movie-tracker.gif"}
             alt="movie tracker demonstration" />
             <a href="https://github.com/lauraturk/movie-tracker">{icons.githubIcon}</a>
             <a href="https://themovietracker.herokuapp.com/">{icons.websiteIcon}</a>
        <figcaption>
          Movie Tracker is a React.js/Redux.js app built with router and a
          Node.js/express back-end that pulls movie details from The Movie DB.
          The app allows users to browse recently released movies and favorite
          individual movies. The favorite movies are saved to the user's dashboard.
          Movie Tracker was assigned as an introductory project for Redux and React-Router.
          It was completed in seven days by a group of three members.
          Testing: Enzyme, Jest, FetchMock
        </figcaption>
      </figure>
    </section>
  )
}

export default Projects
