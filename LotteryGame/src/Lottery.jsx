import { useState } from "react"
import './Lottery.css';
import { GenerateTicket,sum} from "./GenerateTicket";
import Ticket from "./Ticket";

// export default function Lottery()
// {
//     // let [ticket, setTicket] = useState([0,0,0]);

//     let [ticket, setTicket] = useState(GenerateTicket(3));
//     let isWinning = sum(ticket) === 15;
//     return(
//         <div>
//             <h3>Lottery Game !! </h3>
//             <div className="Lottery">
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div>

//             <h3>{isWinning && "Congratulations, you win"}</h3>
//         </div>
//     )   
// }

// export default function Lottery({n=3, winningSum=20})   // we can also put the bydefault value of n and winningsum
// {
//     //lottery ticket for n digit number 
//     let[ticket, setTicket] = useState(GenerateTicket(n))
//     let isWinningSum = sum(ticket) === winningSum;

//     let buyTicket = () =>{
//         setTicket(GenerateTicket(n));
//     }

//     return(
//         <div>
//             <h3>Lottery Game</h3>
//             <Ticket ticket={ticket} />
//             <button onClick={buyTicket}>Buy New Ticket </button>
//             <h3>{isWinningSum && "Congratulations you won !!" }</h3>
//         </div>
//     )
// }




export default function Lottery({n=3, winCondition})   // we can also put the bydefault value of n and winningsum
{
    //lottery ticket for n digit number 
    let[ticket, setTicket] = useState(GenerateTicket(n))
    let isWinningSum = winCondition(ticket);

    let buyTicket = () =>{
        setTicket(GenerateTicket(n));
    }

    return(
        <div>
            <h3>Lottery Game</h3>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy New Ticket </button>
            <h3>{isWinningSum && "Congratulations you won !!" }</h3>
        </div>
    )
}