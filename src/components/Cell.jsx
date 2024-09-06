import React from 'react'

function Cell(props) {
  return (
    <div onClick={()=>props.onClick()}>
        {props.value}
    </div>
  )
}

export default Cell