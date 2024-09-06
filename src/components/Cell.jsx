import React, { useState } from 'react'

function Cell(props) {
    const [color,setColor] = useState("white");
    const style = () => {
        console.log("I'm called!");
        if(props.value === "X"){
            return "blue";
        }else if (props.value==="O"){
            return "red";
        }
    }
  return (
    <div onClick={()=>props.onClick()} style={{color: style()}}>
        {props.value}
    </div>
  )
}

export default Cell