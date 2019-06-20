import React from 'react'
import Card from './Card'

import data from '../../data/wur'

class Board extends React.Component {
  getCards () {

  }

  render () {
    console.log(data)
    return (
      <>
      <div className="leftcontainer">
        <Card />
      </div>
      <div>
        <p>or:</p>
      </div>
      <div className="rightcontainer">
        <Card />
      </div>
      </>
    )
  }
}

export default Board
