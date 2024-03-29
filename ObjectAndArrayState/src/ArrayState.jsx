
import { useState } from "react"

export default function ArrayState(){
    let [arr, setArr] =  useState("mehar");

    let updateArr = () =>{
        setArr((preArr) =>{
            return ([...preArr, "mahal"]);
        });
    }
    
    return(
        <div>
            <h3>Array State</h3>
            <p>{arr}</p>
            <button style={{backgroundColor: "coral"}} onClick={updateArr}>click here</button>

        </div>
    )
}