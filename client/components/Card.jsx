import React from 'react'

const Card = ({ card, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <div className="cardtext">
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default Card
