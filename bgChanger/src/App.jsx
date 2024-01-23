import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    
      <div className = 'w-full h-screen duration-200' 
      style={{backgroundColor:color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className="flex flex-wrap p-3 m-2 bg-white justify-center gap-3 shadow-lg rounded-2xl">
        <button className='rounded-3xl justify-center'>Text</button>
      
      </div>


      </div>
      </div>
    
  )
}

export default App
