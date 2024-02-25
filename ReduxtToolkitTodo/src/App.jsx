import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
// import { useSelector } from 'react-redux'

function App() {
  const [todos , setTodos] = useState(null)

  // const todos = useSelector(state=>state.id)
  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
   <>
    <AddTodo/>
    <Todos/>
   </>
  )
}

export default App
