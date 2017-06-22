import React from 'react'

const Images = (src) => {
  console.log(src.src);

  const imageStyle = {
    backgroundImage: `url("${src.src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="project-image" style={imageStyle}>{src.alt}</div>
  )
}

export default Images
