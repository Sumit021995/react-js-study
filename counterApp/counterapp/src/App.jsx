import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let count = 1;
  function addValue(){
    count++;
  }
 function SubValue (){
    count--
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
