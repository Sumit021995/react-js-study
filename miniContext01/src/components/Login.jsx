import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const {setUser} = useContext(UserContext);

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div style={{marginLeft:'20px'}}>
    <h1>Login</h1>
      <input type='text' value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
      <div>  </div>
      <input type='text' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
