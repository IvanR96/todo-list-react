import { useState } from 'react';
import { ToDoItem } from './ToDoItem';
import { InputArea } from './InputArea';


function App() {

 
  const [tasks, setTasks] = useState([])

  const addTask = (taskInput) =>{
    setTasks(prevTasks =>{
      return[...prevTasks, taskInput]
    })
    setTaskInput("")
  }

  const deleteItem = (id) =>{
    console.log(id)

    setTasks( prevTasks =>{
      return(
        prevTasks.filter((item, index) =>{
          return index !== id
        })
      )
    })
  }

 

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>


      <InputArea onAdd={addTask} />

      <div>
        <ul>
          {tasks.map((task, index) => 
          <ToDoItem
          key={index}
          id={index}
          text={task} 
          onChecked={deleteItem}/> )}
        </ul>
      </div>

      
    </div>
  )
}

export default App
