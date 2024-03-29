
import './App.css';
// import Lottery from './Lottery';
// import TicketNum from './TicketNum';
// import Ticket from './Ticket';

import Lottery from './Lottery';
import { sum } from './GenerateTicket';


function App() {

  //winning condition is sum=15
  // let winCondition = (ticket) =>{
  //   return sum(ticket) === 15;
  // }

  //winning condition is all the number shoud be same 
  // let winCondition = (ticket) =>{
  //   return ticket.every((num) => num === ticket[0])   //like 111,222,888,444,777 etc
  // }


  //winning condition is first number of the ticket should be 0
  let winCondition = (ticket) =>{
    return ticket[0] === 0;
  }


  return (
    <>
      {/* <Lottery /> */}

      {/* <TicketNum num = {[0,1,2]}/>
      <TicketNum num = {[0,1,2]}/> */}
      {/* <Ticket ticket= {[0,4,7]} /> */}
        

        {/* <Lottery n={3} winningSum={20}  /> */}

        <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
