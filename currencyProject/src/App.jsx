import { useState } from 'react'
import useCurrencyHook from "./hooks/currencyHook";
import {Input} from './components/index';


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  return (
    <>
  <Input/>
    </>
    
  )
}

export default App
