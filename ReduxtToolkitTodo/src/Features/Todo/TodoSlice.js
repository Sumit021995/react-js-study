import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialStage = {
    todos: [{id:1,todo:"Hello World"}]
}



export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state , action)=>{
            const newTodo = {
                id: nanoid(),
                todo
            }
        },
        removeTodo : ()=>{}
    }
})