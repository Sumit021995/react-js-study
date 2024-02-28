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
        <ul>
            <li>
            <div key={todos.key} 
            value={todos.text}
            >
            <button className=''
             onClick={updateTodoHandler}
            >Update</button>
            <button className=''

            >X</button>
            </div>
                
            </li>
        </ul>
    </div>
  )
}

export default Todos
