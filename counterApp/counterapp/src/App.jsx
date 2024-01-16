import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let count = 1;
  

  return (
    <>
      <div>
        <h1>Sumit , Vite-React , Counter App</h1>
        <h2>Counter Value: {count}</h2>

        <button onClick={count}>Add Value</button>
        <br/>
        <button>Subtract Value</button>


      </div>
    </>
  )
}

export default App
