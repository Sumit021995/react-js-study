import { useState , useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const passwordGenerator =  function(){
    const specialChar


  }

  return (
    <>
      <h1 className='text-4xl text-center text-white mt-3'>Password Generator</h1>
      <div></div>
      
    </>
  )
}

export default App
