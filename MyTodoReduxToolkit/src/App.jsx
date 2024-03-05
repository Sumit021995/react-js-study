import { useSelector } from 'react-redux'
import Todos from './Components/Todos'
import AddTodo from "./Components/AddTodo"
// import { useEffect, useState } from 'react'


function App() {
  const todos = useSelector((state)=>state.todos)

  return (
    <>
    <div className="bg-[#172842] min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-white">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <AddTodo />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div className='text-black w-full' key={todo.id}>
                            <Todos todo = {todo} />
                          </div>
                        ))}

                    </div>
                </div>
            </div>
            </>
      
  )
}

export default App
