import { useState } from "react"

export default function LudoBoard()
{
   let [moves, setMoves] = useState({blue : 0, yellow : 0, red:0, green:0});
//    function updateBlue()
//    {
//         //moves.blue += 1;
//         console.log(moves.blue);
//         setMoves({...moves, blue: moves.blue + 1});
//    }

    //new values depend in old values so use callback 

    let updateBlue = () =>{
        setMoves( (preMoves) => {
            return ({...preMoves, blue: preMoves.blue + 1});
        });
    }

    let updateYellow = () =>{
        setMoves( (preMoves) => {
            return ({...preMoves, yellow: preMoves.yellow + 1});
        });
    }

    let updateRed = () =>{
        setMoves( (preMoves) => {
            return ({...preMoves, red: preMoves.red + 1});
        });
    }

    let updateGreen = () =>{
        setMoves( (preMoves) => {
            return ({...preMoves, green: preMoves.green + 1});
        });
    }

    let styles = {
        width: "400px",
        height: "600px",
        border : "2px solid white",
        fontSize : "20px",
        borderRadius : "25px",

    }                                  


    return(
        <div className="board" style={styles}>
          <p>Ludo Start !! </p>

          <p>Blue Moves = {moves.blue}</p>
          <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>

          <p>Yellow Moves = {moves.yellow} </p>
          <button style={{backgroundColor : "yellow" , color : "black"}} onClick={updateYellow}>+1</button>

          <p>Red Moves = {moves.red}</p>
          <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>

          <p>Green Moves = {moves.green}</p>
          <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
        </div>
    )
}