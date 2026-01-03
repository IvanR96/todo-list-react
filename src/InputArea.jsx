import { useState } from "react";



export const InputArea = (props) =>{

  const [taskInput, setTaskInput] = useState("")

  const handleChange = (event) =>{
    setTaskInput(event.target.value);
  }


    return(
    <div className="form">
        <input name="taskName" onChange={handleChange} type="text" value={taskInput}/>
        <button onClick={() =>{
          props.onAdd(taskInput)
          setTaskInput("")
        }}>
          <span>Add</span>
        </button>
    </div>
    )
}