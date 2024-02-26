import { useEffect , useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
// import { useSelector , useDispatch} from 'react-redux'
// import { addTodo } from './Features/Todo/TodoSlice'

function App() {
  // const [myTodo , setMyTodo] = useState([])
  // const todos = useSelector(state => state.todos)
  // const dispatch = useDispatch()


  // useEffect(()=>{
  //   const myTodo = JSON.parse(localStorage.getItem("todos"))
  //   if(myTodo && myTodo.length > 0){
  //     setMyTodo(myTodo)
  //   }
  // },[])

  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(myTodo))
  // },[myTodo])

  return (
   <>
    <AddTodo/>
    <Todos/>
   </>
  )
}

export default App
