import React from 'react'

import * as icons from '../../contactIcons'
import Images from '../Images/Images'

const Projects = () => {
  return (
    <section className="Projects u-content">
      <figure className="Projects-block">
        <Images src={"/assets/flash-lingua.gif"}
         title="flash lingua demonstration"/>
        <figcaption>
          <a href="https://github.com/lauraturk/lt-flash-cards-express">{icons.githubIcon}</a>
          <a href="https://flash-lingua.herokuapp.com/search">{icons.websiteIcon}</a>
          <p>
            <strong>Flash Lingua</strong> is a React.js/Redux.js app harnessing the power of
            Google Translate, Google Vision, and the Oxford English Dictionary to
            capture translations/definitions and save them as flashcards in custom
            flashcard decks for future study. This is a personal project and is ongoing.
            MVP was completed in 14 days. Future goals include: optimizing for mobile,
            implementing more monolingual definitions, integrating speech synthesis.
            Testing: Enzyme, Jest, FetchMock
          </p>
        </figcaption>
      </figure>
      <figure className="Projects-block">
        <Images src={"/assets/movie-tracker.gif"}
        title="movie tracker demonstration" />
        <figcaption>
          <a href="https://github.com/lauraturk/movie-tracker">{icons.githubIcon}</a>
          <a href="https://themovietracker.herokuapp.com/">{icons.websiteIcon}</a>
          <p>
            <strong>Movie Tracker</strong> is a React.js/Redux.js app built with router and a
            Node.js/express back-end that pulls movie details from The Movie DB.
            The app allows users to browse recently released movies and favorite
            individual movies. The favorite movies are saved to the user's dashboard.
            Movie Tracker was assigned as an introductory project for Redux and React-Router.
            It was completed in seven days by a group of three members.
            Testing: Enzyme, Jest, FetchMock
          </p>
        </figcaption>
      </figure>
      <figure className="Projects-block">
        <Images src={"/assets/jet-fuel.gif"}
        title="jet fuel demonstration" />
        <figcaption>
          <a href="https://github.com/lauraturk/jet_fuel">{icons.githubIcon}</a>
          <a href="https://lt-cb-jet.herokuapp.com/">{icons.websiteIcon}</a>
          <p>
            <strong>Jet Fuel</strong> is a jQuery front end built on a Knex and
            Express backend. This app allows users to shorten and store URLs in
            folders, retrieving saved URL's from folders and sorting them by popularity
            or recency. Jet Fuel was assigned as an introductory project for building
            database schema and RESTful APIs. It was completed in 5 days as a paired project.
            Testing: Mocha
          </p>
        </figcaption>
      </figure>
    </section>
  )
}

export default Projects
