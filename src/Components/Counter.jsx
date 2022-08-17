import React from 'react'

const Counter = (props) => {
    console.log("counts")
  return (
    <div>
        {props.count}
    </div>
  )
}

export default React.memo(Counter)