import React from 'react'
import ReactPDF from 'react-pdf'

const Resume = () => {
  return (
    <section className="u-content">
      <ReactPDF file="/assets/LauraTurk-FE_DEV-2017.compressed.pdf"
      loading="Loading, Please Wait!"
      error="Sorry! An error occured"
      />
    </section>
  )
}

export default Resume
