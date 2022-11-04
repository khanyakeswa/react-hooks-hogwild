import { React, useState } from 'react'

const HogTile = ({ name, image, specialty, weight, greased, medal }) => {
  const [isClicked, setClicked] = useState(false)

  const clickHandler = (e) => {
    setClicked(!isClicked)
  }

  return (
    <div onClick={clickHandler} className='pigTile ui eight wide column'>
      <h2>{name}</h2>
      <img src={image}></img>
      {isClicked ? (
        <div>
          <h3>Specialty: {specialty}</h3>
          <h3>Weight: {weight}</h3>
          <h3>Greased: {greased ? 'Yes' : 'No'}</h3>
          <h3>Highest Medal Achieved: {medal}</h3>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default HogTile
