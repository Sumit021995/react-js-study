import { createSlice , nanoid } from "@reduxjs/toolkit";


export const initialState = {
    todos:[{
        id:1,
        text:"Learn React First"
    }]
}

export const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
                
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((items)=>items.id !== action.payload)

        },
        updateTodo: (state , action) => {
            state.todos.map((prevTodo)=> (prevTodo.id === action.payload.id ? prevTodo.text = action.payload.text : prevTodo.text =`${prevTodo.text}`))
                return state.todos
            }}
           
})

export const {addTodo,removeTodo,updateTodo} = TodoSlice.actions

export default TodoSlice.reducer

// export const todos = state.todos