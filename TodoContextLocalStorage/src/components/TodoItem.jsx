import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
    // each object in todoArray is named here as todo 
    // this concept is started from App.jsx file each todo required for loop
    const [todoMsg , setTodoMsg] = useState(todo.todoMsg)
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const {checkboxFlip , deleteTodo , updateTodo } = useTodo()

    const editTodo = ()=>{
        updateTodo(todo.id, {...todo, todoMsg:todoMsg})
        setIsTodoEditable(false)

    }
    const checkboxChecked = ()=>{
        checkboxFlip(todo.id)
    }
    
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checkbox ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checkbox}
                onChange={checkboxFlip}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.checkbox ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.checkbox) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.checkbox}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete todoMsg Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
