import React from 'react'
import Card from './Card'

import data from '../../data/wur'

class Board extends React.Component {
  constructor () {
    super()
    this.state = {
      primaryCard: this.getRandomCard(),
      secondaryCard: this.getSecondaryCard()
    }
  }

  getRandomCard () {
    return data[Math.floor(Math.random() * data.length)]
  }

  getSecondaryCard () {
    const secondaryCard = []
    for (let i = 0; secondaryCard.length < 1; i++) {
      const cardId = this.getRandomCard()
      if (!secondaryCard.includes(cardId)) {
        secondaryCard.push(cardId)
      }
    }
    return secondaryCard[0]
  }

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
