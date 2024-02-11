import { createContext , useContext } from 'react';

export const TodoContext = createContext({
    todosArray :[
        {
            id:1,
            todoMsg:'Todo Message',
            checkbox: false
        }
    ],
    // Now Methods 
    addTodo : (todoMsg)=>{},
    updateTodo : (id,todoMsg)=>{},
    deleteTodo : (id)=>{},
    checkboxFlip : (id)=>{},
});

export const TodoProvder = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext);
}