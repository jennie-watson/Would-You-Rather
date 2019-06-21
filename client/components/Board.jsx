import React from 'react'
import Card from './Card'

import data from '../../data/wur'

class Board extends React.Component {
  getCards () {
    
    cards = []
    for (let i = 0; i < 2; i++) {
      cardId = () => {data[Math.floor(Math.random()*data.length)]}
      if(!cards.includes(cardId)){
        cards.push(cardId)
      }
    }
  }


  render () {
    card = 

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
