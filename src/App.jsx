import React, { useState } from 'react'
import Board from './components/Board'

function App() {
  const [title,setTitle] = useState("Tic-Tac-Toe Game");
  const [subtitle, setSubtitle] = useState("Whoever goes first gets X!");
  const [color,setColor] = useState("white");
  const playerWon = (winner) => {
    if(winner === "X"){
      setColor("blue");
      setTitle("X won this round. Crushin' you, O!")
    }else{
      setColor("red");
      setTitle("O won this round. Cry me a river, X!")
    }
    setSubtitle("Prepare for the next round. Whoever goes first is X!")
  }
  return (
    <div className='body'>
      <h1 style={{color: color}}>{title}</h1>
      <p>{subtitle}</p>
      <Board playerWon={playerWon} />
    </div>
  )
}

export default App