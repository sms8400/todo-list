import React,{useState} from 'react'
import ToDoForm from './TodoForm'
import ToDo from './Todo'
// import './toDo.css'
import {Link} from 'react-router-dom'
// import Completed from './components/Compeleted/Compeleted';


function TodoList({value}){

    const [tasks, setTasks] = useState([
       
    ]);
    
    const addTask = title => {
        const newTasks = [...tasks, { id: tasks.length + 1, title, completed: false }];
        setTasks(newTasks);
        console.log(tasks)
    }

    const handleRemove = (id) =>  {
        const newTodos = tasks.filter((task) => {
          return task.id !== id;
        });
        setTasks(newTodos);
      }


      const updateTodoItem = (task) => {
        const newTodoItems = [...tasks];
        const item = newTodoItems[task];
        let newItem = prompt(`Update ${task.title}?`, task.title);
        let todoObj = { title: newItem, completed: false };
        newTodoItems.splice(task,todoObj);
        if (newItem === null || newItem === "") {
            return;
        } else {
        task.title = newItem;
        }
        setTasks(newTodoItems);
        };


  return (
   

    
    <div className="todo-container">

<Link to="/"> Logout </Link>
<Link to="/completed"> Compeleted </Link>

    <div className="header">To Do List - Items</div>


    <div className="tasks">
        
        {tasks.map((task, index) => (
            <ToDo
                task={task} 
                index={index} 
                key={index}
                handleRemove={handleRemove}
                updateTodoItem={updateTodoItem}

                
            
            />
        ))}
    </div>
    <div className="Create-Task">
        <ToDoForm addTask={addTask}  />
    </div>
    </div>
 

 
  )
}


export default TodoList