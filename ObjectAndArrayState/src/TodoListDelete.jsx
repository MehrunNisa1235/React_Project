import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoListDelete()
{
    
    // let[todos, setTodos] = useState(["Sample task","study"]);
    //to set unique key we make array of object 
    let[todos, setTodos] = useState([{task : "sample task", id:uuidv4()}]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
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
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp;&nbsp;&nbsp;
                            <button onClick={() =>deleteTodo(todo.id)}>Delete Task</button>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoListDelete;