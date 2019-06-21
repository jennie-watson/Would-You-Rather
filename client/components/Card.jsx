import React from 'react'

const Card = ({ card, onClick }) => {
  return <div onClick={onClick} className="card">{card.description}</div>
}

export default Card
