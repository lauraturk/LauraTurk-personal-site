import React from 'react'
import ReactPDF from 'react-pdf'

const Resume = () => {
  return (
    <section className="u-content">
      <ReactPDF file="/assets/LauraTurk_FE-DEV_2017.pdf"
      loading="Loading, Please Wait!"
      error="Sorry! An error occured"
      />
    </section>
  )
}

export default Resume
