import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)


  return (
    <div>
        
      
    </div>
  )
}

export default Todos
