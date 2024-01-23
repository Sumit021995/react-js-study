import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    
      <div className = 'w-full h-screen duration-200' 
      style={{backgroundColor:color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className="flex flex-wrap p-4 m-2 bg-white justify-center gap-3 shadow-lg">test</div>


      </div>
      </div>
    
  )
}

export default App
