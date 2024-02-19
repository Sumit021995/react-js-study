import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialStage = {
    todos: [{id:1,todoMsg:"Hello World"}]
}



export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state , action)=>{
            const newTodo = {
                id: nanoid(),
                todoMsg:
            }
        },
        removeTodo : ()=>{}
    }
})