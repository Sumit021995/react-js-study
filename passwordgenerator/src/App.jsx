import { useState , useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const passwordGenerator =  useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let specialChar='!@#$%^&*-_+=[]{}~`'
    let num='0123456789'
    if(numberAllowed) str += num;
    if(characterAllowed) str += specialChar;
    for (let i = 0;  i < length; i++) {
      let charIndex =  parseInt(Math.random()*(str.length) + 1) 
      pass += str.charAt(charIndex)
    }
    setPassword(pass)

  },[length,setPassword,numberAllowed,characterAllowed]);

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-2xl rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-300'>
      <h1 className=' text-center text-white '>Password Generator</h1>
      <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type = 'text'
      value = {password}
      className ='outline-none w-full py-1 px-3'
      placeholder = {password}
      readOnly
      />
</div>
</div>
      
    </>
  )
}

export default App
