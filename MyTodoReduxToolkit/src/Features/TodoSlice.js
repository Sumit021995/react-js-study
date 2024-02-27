import { createSlice , nanoid } from "@reduxjs/toolkit";


export const initialState = {
    todos:[{
        id:1,
        text:"Learn React Fully"
    }]
}

export const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((items)=>items.id !== action.payload)

        },
        updateTodo:(state,action)=>{
            if(state.todos.id === action.payload){
                state.todos.text = action.payload.text
            }
        }
    }
})