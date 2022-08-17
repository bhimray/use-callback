import React from 'react'
import Button from './Button';
import Counter from './Counter';



const ParentComponent = () => {
    const [count, setCount] = React.useState(0)
    const [alphaIncrement, setAlphaIncrement] = React.useState(0)
    
    const increment = React.useCallback(()=>{
        console.log("increment")
        return setCount(count+1);
    })
    const alphaincrement =React.useCallback(()=>{
        console.log("alphaIncrement")
        return setAlphaIncrement(count+1)
    })
    
  return (
    <div>
        <Counter count={count}/>
        <Button button={"increment1"} handleClick={increment}/>
        <Counter count={alphaIncrement}/>
        <Button button={"increment2"} handleClick={alphaincrement}/>
    </div>
  )
}

export default ParentComponent