import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo } from '../Features/TodoSlice'

function Todos() {
    const [text , setText] = React.useState("")
    const [isEditable , setIsEditable]= React.useState(false)
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const updateTodoHandler = ()=>{
        dispatch(updateTodo(text))
        setText("")

    }


  return (
    <div>
        <h1>My Todos List</h1>
        <ul className=''>{todos.map((singleTodo=>{
            <li key={singleTodo.id}>
                <div>{singleTodo.text}</div>
                <button onClick={() => dispatch(removeTodo(singleTodo.id))}>X</button>
                <button 
                onClick={updateTodoHandler}
                readOnly ={!isEditable}
                >Update</button>
            </li>
        }))}

            
            
            
            
            
                
            
        </ul>
    </div>
  )
}

export default Todos
