import { useSelector } from 'react-redux'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { Store } from './App/Store.js'

function App() {
  const todos = useSelector((state)=>state.todos)
 

  return (
    <Provider store={Store}>
      <AddTodo/>
      <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todos todo={todo} />
                          </div>
                        ))}
                    </div>
    </Provider>
      
  )
}

export default App
