import { useState,useEffect } from "react"

export default function Counter()
{
    let [count, setCount] = useState(0);

    let increaseCount = () =>{
        setCount( (currCount) => currCount +1)
    }

    useEffect(function printSomething(){
        console.log("This is a side-effect")
    })
    return(
        <div>
            <h4>Count = {count}</h4>
            <button onClick={increaseCount}>+1</button>
        </div>
    )
}