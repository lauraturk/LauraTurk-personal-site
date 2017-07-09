import React from 'react'

const Images = (src) => {
  console.log(src.src);

  const imageStyle = {
    backgroundImage: `url("${src.src}")`,
    backgroundSize: '100%',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className={src.setClass}
         title={src.title}
         style={imageStyle}>
    </div>
  )
}

export default Images
