import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  
  function addValue(){
    count++;
    setCount(count)
  }
 function SubValue (){
  if(!count) return;
    count--
    setCount(count)
  }
  

  return (
    <>
      <div>
        <h1>Sumit , Vite-React , Counter App</h1>
        

        <button onClick={addValue}>Add Value</button>
        <br/>
        <h2>Counter Value: {count}</h2>
        <br/>
        <button onClick = {SubValue}>Subtract Value</button>


      </div>
    </>
  )
}

export default App
