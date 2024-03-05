import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {removeTodo} from '../Features/TodoSlice'
import { updateTodo } from '../Features/TodoSlice'

function Todos({todo}) {
  // const todos = useSelector(state => state.todos)
  // const todoMsg = todos.map((todo)=>todo.text)
  let [text , setText]=useState(todo.text)
    const [isEditable,setIsEditable]=useState(false)
    const dispatch = useDispatch()
    const [allTodos,setAllTodos]=useState([todo])

    useEffect(() => {
      const allTodos = JSON.parse(localStorage.getItem("allTodos"))
  
      if (allTodos && allTodos.length > 0) {
        setAllTodos(allTodos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("allTodos", JSON.stringify(allTodos))
    }, [allTodos])

   



  return (
    <>
    <div className='flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-md shadow-white/50 duration-300  text-white'>
    <input
                type="text"
                key={todo.id}
                value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!isEditable}
                className='border outline-none  w-full text-black rounded-lg'
            />
            {/* Edit, Save Button */}
            <button
                type='submit'
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (isEditable) {
                        dispatch(updateTodo(todo.id,text))
                        setIsEditable((prev) => !prev)
                        
                    } else setIsEditable((prev) => !prev);
                }}
              
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    </>
  )
}

export default Todos