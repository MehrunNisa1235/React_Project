import { useState } from "react"


export default function Counter()
{
    // let count = 0;
    // function increaseCount()
    // {
    //     count = count + 1;
    //     console.log(count);
    // }

    // let arr = useState(0);
    // console.log(arr);
    //let[count, setCount] = useState(0);
    // console.log("count component is re-rendered");
    // console.log(`count is : ${count}`)
    // let increaseCount = () =>{
    //     setCount(count + 1);
        // console.log(`inside increaseCount function count is : ${count}`)


    //callback 
    let[count, setCount] = useState(0);
    let increaseCount = () =>{
        setCount((currCount) => {
            return currCount+1;
        });
        setCount((currCount) => {
            return currCount+1;
        });
        setCount((currCount) => {
            return currCount+1;
        });
        setCount((currCount) => {
            return currCount+1;
        });
    }

    
    return(
        <div>
            <h3> Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}