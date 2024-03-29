import './App.css';
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos";
import { Footer } from './MyComponents/Footer';
import React, { useState } from "react";

function App() {

  const onDelete = (todo) =>{
    console.log("I am onDelete of todo", todo);

    setTodo(todo.filter((e)=>{
      return e!==todo;
    }))
  }
  //let myName = "mehrun nisa";
  const [todo, setTodo] = useState([
    {
      SNo:1,
      title: "Study",
      desc : "Java, React, DSA, SQL"
    },
    {
      SNo:2,
      title: "Namaz",
      desc : "Namaz is very important for us"
    },

    {
      SNo:3,
      title: "Project",
      desc : "make your project"
    },
  ]);

  return (
    <>
      <Header title = "My Todos List" />
      {/* <Header title = "My Todos List" searchBar = {false}/> */}
      <Todos todo={todo} onDelete={onDelete}/>
      <Footer />     
    </>
  );
}

export default App;
