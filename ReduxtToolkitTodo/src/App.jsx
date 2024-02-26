import { useEffect , useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector , useDispatch} from 'react-redux'
import { addTodo } from './Features/Todo/TodoSlice'

function App() {
  const [myTodo, setMyTodo] = useState([])
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  
  useEffect(()=>{
    const allTodos = JSON.parse(localStorage.getItem("todos"))
    if(allTodos && allTodos.length > 0){
      dispatch(addTodo(allTodos))
    }
  })

  return (
   <>
    <AddTodo/>
    <Todos/>
   </>
  )
}

export default App
