import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countAdd,setCountAdd]=useState(0)
  let [countSub,setCountSub] = useState(0)
  function addValue(){
    countAdd++;
    setCountAdd(countAdd)
  }
 function SubValue (){
    countSub--
    setCountSub(countSub)
  }
  

  return (
    <>
      <div>
        <h1>Sumit , Vite-React , Counter App</h1>
        <h2>Counter Value: </h2>

        <button onClick={addValue}>Add Value {count}</button>
        <br/>
        <button onClick = {SubValue}>Subtract Value {count}</button>


      </div>
    </>
  )
}

export default App
