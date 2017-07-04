import React from 'react'

const Contact = () => {
  return (
    <section className="Contact">
      <form action="https://formspree.io/laura.lk.turk@gmail.com"
      method="POST">
        <input type="text" name="name" placeholder="Your Name"/>
        <input type="email" name="_replyto" placeholder="Your Email"/>
        <input type="textarea" name="text" placeholder="Your Message"/>
        <input type="submit" value="Send"/>
      </form>
    </section>
  )
}

export default Contact
