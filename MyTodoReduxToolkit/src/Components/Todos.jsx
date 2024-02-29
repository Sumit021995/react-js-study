import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo } from '../Features/TodoSlice'

function Todos() {
    const [text , setText] = React.useState("")
    // const [isEditable , setIsEditable]= React.useState(false)
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    // const updateTodoHandler = ()=>{
    //     dispatch(updateTodo(text))
    //     setText("")
    //     setIsEditable(false)

    // }


  return (
    <div>
        <h1>My Todos List</h1>
        <ul className='bg-gray-500 text-white'>{todos.map((singleTodo) => (
            <li key={singleTodo.id}>
                <div>{singleTodo.text}</div>
                <button onClick={() => dispatch(removeTodo(singleTodo.id))}> X </button>
                <div> </div>
                <button onClick={() => dispatch(updateTodo(text))
                
                 
                }>  Update  </button>
                </li>
                ))}
                {/* <button 
                onClick={()=> {
                    if (todos.isEditable) return
                    if(isEditable){
                        updateTodoHandler()
                    }else {
                        setIsEditable((prev)=>!prev)
                    }
                }
                }
                disabled={todos.isEditable}
                
                >Update</button> */}
            
        

            
            
            
            
            
                
            
        </ul>
    </div>
  )
}

export default Todos
