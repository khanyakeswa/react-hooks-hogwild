import React, { useState } from 'react'
import Nav from './Nav'
import PigPen from './PigPen'

import hogs from '../porkers_data'

function App() {
  const [currentHogs, setHogs] = useState(hogs)
//   const [sortCategory, setSortCategory] = useState('name')
  const [filteredHogs, setFilteredHogs] = useState(currentHogs.filter((hog) => hog.greased === true))

  const filterHandler = (e) => {
	setFilteredHogs(currentHogs.filter((hog) => hog.greased === true))
    setHogs(currentHogs !== hogs ? hogs : filteredHogs)
    e.target.textContent = currentHogs !== hogs ? 'Show Only Greased' : 'Show All'
  }

  const sortHandler = (e) => {
    // setSortCategory(e.target.value)
    const sortedHogs =
      e.target.value !== 'unsorted'
        ? [...currentHogs].sort(function (hogA, hogB) {
            if (hogA[e.target.value] < hogB[e.target.value]) {
              return -1
            }
            if (hogA[e.target.value] > hogB[e.target.value]) {
              return 1
            }
            return 0
          })
        : currentHogs
    setHogs(sortedHogs)
  }

  return (
    <div className='App'>
      <Nav />
      <PigPen
        hogs={currentHogs}
        sortHandler={sortHandler}
        filterHandler={filterHandler}
      />
    </div>
  )
}

export default App
