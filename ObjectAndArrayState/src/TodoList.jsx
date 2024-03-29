
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoList()
{
    
    // let[todos, setTodos] = useState(["Sample task","study"]);
    //to set unique key we make array of object 
    let[todos, setTodos] = useState([{task : "sample task", id:uuidv4()},{task: "Walk", id:uuidv4()}]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        // console.log("we have to add new task in todo list");
        // setTodos([...todos, newTodo]);
        setTodos([...todos, {task:newTodo, id:uuidv4()}]);
        setNewTodo("");    //it is used to clear input after adding task
    }

    let updateTodo = (event) =>{
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="Enter the task you want to add" value={newTodo} onChange={updateTodo} /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /> <br /> <br /> <br /> <br />

            <hr />
            <h4>Todo List </h4>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList;