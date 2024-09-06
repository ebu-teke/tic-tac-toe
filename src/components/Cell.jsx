import React from 'react'

function Cell(props) {
    const style = () => {
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