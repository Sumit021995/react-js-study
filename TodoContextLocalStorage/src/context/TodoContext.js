import { createContext , useContext } from 'react';

export const TodoContext = createContext({
    todos :[
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
    checkboxTrue : (id)=>{},
});

