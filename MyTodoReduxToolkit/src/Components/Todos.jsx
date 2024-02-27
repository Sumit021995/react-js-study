import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)


  return (
    <div>
        <h1>My Todos List</h1>
        {todos.map(()=>{
            
        })}
      
    </div>
  )
}

export default Todos
