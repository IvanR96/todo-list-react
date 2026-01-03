import { useState } from "react"

export const ToDoItem = (props) =>{


    return(
       <li onClick={() =>{
        props.onChecked(props.id)
       }}>{props.text}</li> 
    )
}