import React, { useState } from 'react'
import Cell from './Cell';

function Board(props) {
    const [cells, setCells] = useState(Array(9).fill(" "));
    const [player, setPlayer] = useState("X");

    const checkWin = (theCells) => {
        //all the winning conditions based on the indexes (or the keys) of cells 
        const winCases = [
            [0, 4, 8], [2, 4, 6], //Diagonal
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8] //Vertical
        ];
        for(let winCase of winCases){
            const [a, b, c] = winCase;
            //checks the winning conditions, calls the win and clears the board
            if (theCells[a] !== " " && theCells[a] === theCells[b] && theCells[a] === theCells[c]){
                props.playerWon(theCells[a]);
                setTimeout(() => {
                    setCells(Array(9).fill(" "));
                    setPlayer("X")
                }, 1000);
            }
            //does the same with a draw condition
            if (theCells.every(cell => cell !== " ")){
                props.playerWon("draw");
                setTimeout(() => {
                    setCells(Array(9).fill(" "));
                    setPlayer("X")
                }, 1000);
            }
        }

    }
    //called from the Cell component to handle the click
    const handleClick = (index) => {
        if(cells[index] === " "){
            const newCells = cells.slice();
            newCells[index] = player;
            setCells(newCells);
            //switches player
            setPlayer(player === "X" ? "O" : "X")
            //calls the win (uses the local newCells to avoid any bugs caused by the synchronization of js)
            checkWin(newCells)
        }
    }
  return (
    <div className='board'>
        {cells.map((value, index) => <Cell key={index} value={value} onClick={()=>handleClick(index)} />)}
    </div>
  )
}

export default Board