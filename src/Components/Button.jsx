import React from 'react'

const Button = (props) => {
    console.log(props.button)
  return (
    <div onClick={props.handleClick}>
       {props.button}
    </div>
  )
}

export default React.memo(Button)