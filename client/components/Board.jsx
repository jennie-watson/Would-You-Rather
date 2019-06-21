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

  handlePrimaryCardClick = () => {
    this.setState({
      secondaryCard: this.getRandomCard()
    })
    // set the state of secondary card to get random card
  }

  handleSecondaryCardClick = () => {
    // set the primary card as this card
    this.setState({
      primaryCard: this.state.secondaryCard
    })
    // set the state of secondary card to get random card
    this.setState({
      secondaryCard: this.getRandomCard()
    })
  }

  render () {
    return (  
      <>
        <div className="container">
          <div className="leftcontainer">
            <Card card={ this.state.primaryCard }/>
          </div>
          <h2 className="or">OR</h2>
          <div className="space"></div>
          <div className="rightcontainer">
            <Card card={ this.state.secondaryCard }/>
          </div>
        </div>
      </>
    )
  }
}
export default Board
