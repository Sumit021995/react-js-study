import { useState } from 'react'
import useCurrencyHook from "./hooks/currencyHook";
import Input from './components/input';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Input/>
    </>
    
  )
}

export default App
