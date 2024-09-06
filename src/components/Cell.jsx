import React from 'react'

function Cell(props) {
    //changes the color based on the content
    const style = () => {
        if(props.value === "X"){
            return "blue";
        }else if (props.value==="O"){
            return "red";
        }
    }
  return (
    //style is called here to avoid the function being called infinite times - as it crashes the app.
    <div onClick={()=>props.onClick()} style={{color: style()}}>
        {props.value}
    </div>
  )
}

export default Cell