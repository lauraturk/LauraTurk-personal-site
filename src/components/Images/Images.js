import React from 'react'

const Images = (src) => {
  console.log(src.src);

  const imageStyle = {
    backgroundImage: `url("${src.src}")`,
    backgroundSize: 'contain',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="Images" title={src.title} style={imageStyle}></div>
  )
}

export default Images
