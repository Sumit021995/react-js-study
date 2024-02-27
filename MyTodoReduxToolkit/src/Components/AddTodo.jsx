import React from 'react'
import { addTodo } from '../Features/TodoSlice'
import { useDispatch } from 'react-redux'


function AddTodo() {
    const [input , setInput] = React.useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
        
    }


  return (
    <div>
        <form>
        <input
        type='text'
        placeholder='Enter Your Todo Message'
        value={input}
        onChange={(e)=>setInput(e.target.value)}

        ></input>
        <button
        onClick={addTodoHandler}
        >Add Todo</button>
        </form>
      
    </div>
  )
}

export default AddTodo
