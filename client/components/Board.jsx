import React from 'react'
// import Card from './Card'

const Board = () => {
  return (
    <>
      <div className="container">
        <div className="leftcontainer">
          <p>left</p>
          {/* <Card /> */}
        </div>
        <h2 className="or">OR</h2>
        <div className="space"></div>
        <div className="rightcontainer">
          {/* <Card /> */}
          <p>right</p>
        </div>
      </div>
    </>
  )
}

export default Board
