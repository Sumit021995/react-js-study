import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    
      <div className = 'w-full h-screen duration-200' 
      style={{backgroundColor:color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className="flex flex-wrap px-3 py-2 bg-white justify-center gap-3 shadow-lg rounded-3xl">
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1 text-white' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Green</button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Blue</button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Gray</button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}></button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}></button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}></button>
        <button onClick={{}}className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}></button>
      
      </div>


      </div>
      </div>
    
  )
}

export default App
