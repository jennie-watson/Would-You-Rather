import React from 'react'
import Card from './Card'

class Board extends React.Component {
  render () {
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
