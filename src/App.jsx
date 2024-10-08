import React, { useState } from 'react'
import Board from './components/Board'

function App() {
  const [title,setTitle] = useState("Tic-Tac-Toe Game");
  const [subtitle, setSubtitle] = useState("Whoever goes first gets X!");
  const [color,setColor] = useState("white");
  //simply modifies the title and the subtitle acccording to the data passed up from the Board component.
  const playerWon = (winner) => {
    if(winner === "X"){
      setColor("blue");
      setTitle("X won this round. Crushin' you, O!")
    }else if (winner==="O"){
      setColor("red");
      setTitle("O won this round. Cry me a river, X!")
    }else{
      setColor("green")
      setTitle("None of you were smart enough to win!")
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