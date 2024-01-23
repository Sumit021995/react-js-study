import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className = 'w-full h-screen duration-200' 
      style={{backgroundColor:color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className="flex flex-wrap px-3 py-2 bg-white justify-center gap-3 shadow-lg rounded-3xl">
        <button onClick={ () => setColor("red") } className='outline-none rounded-full justify-center px-4 py-1 text-white' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={ () => setColor("green") } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Green</button>
        <button onClick={ () => setColor("blue") } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Blue</button>
        <button onClick={ () => setColor("gray") } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Gray</button>
        <button onClick={ () => setColor("purple") } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Purple</button>
        <button onClick={ () => setColor("pink") } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Pink</button>
        <button onClick={ () => setColor("olive") } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Olive</button>
        <button onClick={ () => setColor('yellow') } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'red'}}>Yellow</button>
      
      </div>


      </div>
      </div>
    
  )
}

export default App
