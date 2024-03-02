import { useSelector } from 'react-redux'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'


function App() {
  const todos = useSelector((state)=>state.todos)
 

  return (
    <>
      <AddTodo/>
      <Todos />
    </>
      
  )
}

export default App
