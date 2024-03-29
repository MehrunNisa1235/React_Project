import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoListUpperAll()
{
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

    return(
        <div>
            <input placeholder="Enter the task you want to add" value={newTodo} onChange={updateTodo} /><br />
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
                           <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
                        </li>
                        
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}
export default TodoListUpperAll;