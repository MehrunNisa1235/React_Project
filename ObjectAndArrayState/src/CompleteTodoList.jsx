import './App.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function CompleteTodoList()
{
    let[todos, setTodos] = useState([{task : "sample task", id:uuidv4(), isDone:false}]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone:false}];
        });
        setNewTodo("");
    }
    

    let updateTodo = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        // console.log("task to be deleted");
        // console.log(id);
        // let copy = todos.filter((todo) => todo.id != id);
        // console.log(copy);
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCaseAll = () =>{
    //    let newArr = todos.map((todo) =>{
    //     return {
    //         ...todo,
    //         task: todo.task.toUpperCase(),
    //     }
    //    })
    //    console.log(newArr);

    setTodos(
        todos.map((todo) =>{
        return {
            ...todo,
            task: todo.task.toUpperCase(),
        };
       })
    );
    };

    //we know we use update old value so we use callback:-
    // setTodos((todos) =>(
    //     todos.map((todo) =>{
    //     return {
    //         ...todo,
    //         task: todo.task.toUpperCase(),
    //     }
    //    })
    // ))
    // }

    //to update one array 
    let UpperCaseOne = (id) =>{
       setTodos((prevTodos) =>
       prevTodos.map((todo) =>{
        if(todo.id == id){
            return{
                ...todo,
                task: todo.task.toUpperCase(),
            }
        }else{
            return todo;
        }
       })
       )
    }

    //mark as done for indivisual
    let markAsDone = (id) =>{
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>{
         if(todo.id == id){
             return{
                ...todo,
                 isDone:true,
             }
         }else{
             return todo;
         }
        })
        )
     }

     //mark as done for all 
     let markAsDoneAll = () =>{
        setTodos(
            todos.map((todo) =>{
            return {
                ...todo,
                isDone:true,
            };
           })
        );
        };

    return(
        <div>
            <input placeholder="Enter the task you want to add" value={newTodo} onChange={updateTodo} /><br />
            <button style={{backgroundColor : "cyan"}} onClick={addNewTask}>Add Task</button>
            <br /> <br /> <br /> <br /> <br />

            <hr />
            <h4>Todo List </h4>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
                            &nbsp; &nbsp;&nbsp;&nbsp;
                            <button style={{backgroundColor : "red",  padding:"20px", margin:"10px"}} onClick={() =>deleteTodo(todo.id)}>Delete Task</button>
                           <button style={{backgroundColor : "coral",  padding:"20px", margin:"10px"}} onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
                           <button style={{backgroundColor : "green", padding:"20px", margin:"10px"}} onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                        
                    ))
                }
            </ul>
            <button style={{backgroundColor : "coral",  padding:"20px", margin:"10px"}} onClick={upperCaseAll}>UpperCase All</button>
            <button style={{backgroundColor : "green",  padding:"20px", margin:"10px"}} onClick={markAsDoneAll}>Mark As Done All</button>
        </div>
    )
}
export default CompleteTodoList;