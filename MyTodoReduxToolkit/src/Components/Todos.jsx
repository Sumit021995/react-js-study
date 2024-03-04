import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../Features/TodoSlice'
import { updateTodo } from '../Features/TodoSlice'

function Todos({todo}) {
  // const todos = useSelector(state => state.todos)
  // const todoMsg = todos.map((todo)=>todo.text)
  let [text , setText]=React.useState(todo.text)
    const [isEditable,setIsEditable]=React.useState(false)
    const dispatch = useDispatch()
    const updateTodoHandler = ()=>{
      dispatch(updateTodo(text))
      // setText("")
      setIsEditable(false)

    }
  //   const editTodo =()=>{
  //     updatedTodo(todo.id , {...todo,text:todoMsg})
  //     setIsTodoEditable(false)
  // }



  return (
    <>
    <div>
    <input
                type="text"
                key={todo.id}
                // className={`border outline-none w-full bg-transparent rounded-lg ${
                //     isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                // } ${todo.completed ? "line-through" : ""}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!isEditable}
            />
            {/* Edit, Save Button */}
            <button
                type='submit'
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={(e) => {
                      e.preventDefault()
                    if (isEditable) {
                        updateTodoHandler();
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