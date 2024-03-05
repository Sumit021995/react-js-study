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
        <form onSubmit={addTodoHandler}>
        <input
        className='rounded-s-sm w-2/3 '
        type='text'
        placeholder='Enter Your Todo Message'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit'
        className='text-white bg-red-600 rounded-e-sm '
        > <pre> Add Todo </pre> </button>
        </form>
      
    </div>
  )
}

export default AddTodo
