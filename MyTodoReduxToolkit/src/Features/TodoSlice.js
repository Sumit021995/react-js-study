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
            const newTodo = {
                id:nanoid(),
                text:action.payload,
                isEditable: false
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((items)=>items.id !== action.payload)

        },
        updateTodo:(state,action)=>{
            const oldTodo = state.todos.filter((todo)=>todo.id === action.payload)
            oldTodo.text = action.payload
            state.todos.push(oldTodo)
        }
    }
    
})

export const {addTodo,removeTodo,updateTodo} = TodoSlice.actions

export default TodoSlice.reducer