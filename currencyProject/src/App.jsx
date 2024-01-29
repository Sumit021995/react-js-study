import { useState } from 'react'
import useCurrencyHook from "./hooks/currencyHook";
import {Input} from './components/index';


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyHook = useCurrencyHook(from)

  return (
    <>
  <Input/>
    </>
    
  )
}

export default App
