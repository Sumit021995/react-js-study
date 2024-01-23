import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    
      <div className = 'w-full h-screen duration-200 m-0 p-0 space-x-0 space-y-0' 
      style={{backgroundColor:color}}
      >
      
      </div>
    
  )
}

export default App
