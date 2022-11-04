import { React, useState } from 'react'
import HogTile from './HogTile'

const PigPen = ({ hogs, sortHandler, filterHandler }) => {
  const hogTiles = hogs.map((hog) => {
    return (
      <HogTile
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medal={hog['highest_medal_achieved']}
      />
    )
  })

  return (
    <>
      <button onClick={filterHandler}>Show Only Greased</button>
      <br />
      <label>Sort By: </label>
      <select onChange={sortHandler}>
        <option value="unsorted"></option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <div className='ui grid container'>{hogTiles}</div>
    </>
  )
}

export default PigPen
