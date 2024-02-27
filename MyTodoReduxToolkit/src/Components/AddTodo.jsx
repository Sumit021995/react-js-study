import React from 'react'
import { addTodo } from '../Features/TodoSlice'


function AddTodo() {
    const [input , setInput] = React.useState("")

    const addTodoHandler = (e)=>{
        e.preventDefault()
    }


  return (
    <div>
        <form onSubmit={addTodoHandler}>
        <input
        type='text'
        placeholder='Enter Your Todo Message'
        value={input}
        onChange={(e)=>setInput(e.target.value)}

        ></input>
        <button
        onClick={}
        >Add Todo</button>
        </form>
      
    </div>
  )
}

export default AddTodo
