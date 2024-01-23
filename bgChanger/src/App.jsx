import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")
  const [textColor='white', setTextColor] = useState("white")

  return (
    
      <div className = 'w-full h-screen duration-200' 
      style={{backgroundColor:color}}
      >
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <h1 className=' fixed flex flex-wrap justify-center bottom-4 inset-x-0 px-2 text-white' style ={{color:textColor}}>Click on Buttons to Change Color of Background</h1>
      <div className="flex flex-wrap px-3 py-2 bg-white justify-center gap-3 shadow-lg rounded-3xl">
      
        <button onClick={ () => {return setColor("red"),setTextColor('white')} } className='outline-none rounded-full justify-center px-4 py-1 text-white' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={ () => {return setColor("green"),setTextColor('white')}  } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'green'}}>Green</button>
        <button onClick={ () => {return setColor("blue"),setTextColor('white')} } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={ () => {return setColor("gray"),setTextColor('white')} } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'gray'}}>Gray</button>
        <button onClick={ () => {return setColor("purple"),setTextColor('white')} } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'purple'}}>Purple</button>
        <button onClick={ () => {return setColor("pink"),setTextColor('black')} } className='outline-none rounded-full justify-center px-4 py-1  text-black' style={{backgroundColor:'pink'}}>Pink</button>
        <button onClick={ () => {return setColor("olive"),setTextColor('white')} } className='outline-none rounded-full justify-center px-4 py-1  text-white' style={{backgroundColor:'olive'}}>Olive</button>
        <button onClick={ () => {return setColor("yellow"),setTextColor('black')} } className='outline-none rounded-full justify-center px-4 py-1  text-black' style={{backgroundColor:'yellow'}}>Yellow</button>
      
      </div>


      </div>
      </div>
    
  )
}

export default App
