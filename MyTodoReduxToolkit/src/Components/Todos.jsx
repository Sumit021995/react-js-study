import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo } from '../Features/TodoSlice'

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)


  return (
    <div>
        <h1>My Todos List</h1>
        <li>
        {todos.map((singleTodo)=>{
            singleTodo
        })}
        </li>
      
    </div>
  )
}

export default Todos
