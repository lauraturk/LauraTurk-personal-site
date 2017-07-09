import React from 'react'

const About = () => {
  return (
    <section className="About u-content">
      {/* <h3>Skills &#8595;</h3> */}
        <ul className="About-skills">
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
              <li>Team Leadership</li>
            </ul>
          </li>
        </ul>
    </section>
  )
}

export default About
