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
        <form onSubmit={addTodoHandler} className='flex'>
        <input
        className='text-white w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        type='text'
        placeholder='Enter Your Todo Message'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit'
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >Add Todo</button>
        </form>
      
    </div>
  )
}

export default AddTodo
