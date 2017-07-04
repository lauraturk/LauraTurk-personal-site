import React from 'react'

const About = () => {
  return (
    <section className="About u-content">
        <ul className="About-skills">
          <h3>Skills &#8595;</h3>
          <li>
            <h4>Front End Fundamentals</h4>
            <ul>
              <li>CSS3/HTML5</li>
              <li>JavaScript (ES 2015)</li>
              <li>Asynchronous JavaScript</li>
              <li>Functional Programming</li>
              <li>Object Oriented Programming</li>
              <li>Test Driven Development</li>
            </ul>
          </li>
          <li>
            <h4>Frameworks and Libraries</h4>
            <ul>
              <li>jQuery</li>
              <li>React.js</li>
              <li>Redux.js</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </li>
          <li>
            <h4>Testing</h4>
            <ul>
              <li>Enzyme (Mocha and Chai)</li>
              <li>Jest</li>
              <li>FetchMock</li>
              <li>Selenium</li>
            </ul>
          </li>
          <li>
            <h4>UX/UI and Design</h4>
            <ul>
              <li>Sketch</li>
              <li>Research and Usability Testing</li>
              <li>WAI/ARIA</li>
              <li>Iterative Design</li>
            </ul>
          </li>
          <li>
            <h4>Soft Skills</h4>
            <ul>
              <li>Crucial Conversations</li>
              <li>Agile Practices</li>
              <li>Leadership</li>
            </ul>
          </li>
        </ul>
        <article className="About-blurb">
          <h3>About Me</h3>
          <p>
            I am a detailed, dedicated, life-long learner passionate about
            creating social good through my work. I came to programming by way of
            teaching digital literacy and 21st Century Skills in public libraries,
            and have honed my ability to lead, collaborate and communicate with
            people from all walks of life.
          </p>
        </article>
    </section>
  )
}

export default About
