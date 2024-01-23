import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    
      <div className = 'w-full h-screen duration-200' 
      style={{backgroundColor:color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className="flex flex-wrap px-3 py-2 bg-white justify-center gap-3 shadow-lg rounded-3xl">
        <button className='rounded-2xl justify-center p-2' style={{backgroundColor:color}}>Text</button>
      
      </div>


      </div>
      </div>
    
  )
}

export default App
