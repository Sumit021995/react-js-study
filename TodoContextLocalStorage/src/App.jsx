import { useState , useEffect } from 'react'
import { TodoProvder } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


function App() {
  const [todosArray , setTodosArray] = useState([]);

  // const {addTodo , updateTodo , deleteTodo , checkboxTrue } = useTodo()

  const addTodo = (todoMsg)=>{
    setTodosArray((prev)=> [{id:Date.now() , ...todoMsg},...prev])
  }
  const updateTodo = (id , todoMsg)=>{
    setTodosArray((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? todoMsg : prevTodo)))

  }
  const deleteTodo = (id)=>{
    setTodosArray((prev) => prev.filter((prevTodo) => prevTodo.id !== id ))
  }
  const checkboxFlip = (id)=>{
    setTodosArray((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo , checkbox:!prevTodo.checkbox } : prevTodo)))
  }

  useEffect(() => {
    const todosArray = JSON.parse(localStorage.getItem("todosArray"))
    if(todosArray && todosArray.length > 0) {
      setTodosArray(todosArray)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todosArray" , JSON.stringify(todosArray))
  },[todosArray])

  return (
    <TodoProvder value={{ todosArray , addTodo , updateTodo , deleteTodo , checkboxFlip}} >
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todosArray.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo ={todo}/>
                          </div>
                        ))}
                        
                    </div>
                </div>
            </div>
      
    </TodoProvder>
  )
}

export default App
