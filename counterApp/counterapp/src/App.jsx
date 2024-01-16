import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  
  function addValue(){
    count++;
    setCount(count)
  }
 function SubValue (){
    count--
    setCount(count)
  }
  

  return (
    <>
      <div>
        <h1>Sumit , Vite-React , Counter App</h1>
        <h2>Counter Value: </h2>

        <button onClick={addValue}>Add Value</button>
        <br/>
        <h2>{count}</h2>
        <br/>
        <button onClick = {SubValue}>Subtract Value</button>


      </div>
    </>
  )
}

export default App
