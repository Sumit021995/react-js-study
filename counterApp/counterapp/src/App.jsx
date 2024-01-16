import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countAdd,setCountAdd]=useState(0)
  let [countSub,setCountSub] = useState(0)
  function addValue(){
    count++;
    setCounter(count)
  }
 function SubValue (){
    count--
    setCounter(count)
  }
  

  return (
    <>
      <div>
        <h1>Sumit , Vite-React , Counter App</h1>
        <h2>Counter Value: {count}</h2>

        <button onClick={addValue}>Add Value {count}</button>
        <br/>
        <button onClick = {SubValue}>Subtract Value {count}</button>


      </div>
    </>
  )
}

export default App
