import { useState,useEffect } from "react"

export default function Counter2()
{
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);


    let increaseCountx = () =>{
        setCountx( (currCount) => currCount +1)
    }

    let increaseCounty = () =>{
        setCounty( (currCount) => currCount +1)
    }

    useEffect(function printSomething(){
        console.log("This is a side-effect")
    }, [countx])             //only countx will work  and useEffect will print ans 

    // useEffect(function printSomething(){
    //     console.log("This is a side-effect")
    // }, [county])             //only county will work  and useEffect will print ans 

    // useEffect(function printSomething(){
    //     console.log("This is a side-effect")
    // }, [])             //only first time render will print re-render does not work


    return(
        <div>
            <h4>Countx = {countx}</h4>
            <button onClick={increaseCountx}>+1</button>
            <br /><br />

            <h4>County = {county}</h4>
            <button onClick={increaseCounty}>+1</button>
        </div>
    )
}