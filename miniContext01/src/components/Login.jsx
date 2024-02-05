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
    <div style={{marginLeft:'15px'}}>
    <h1>Login</h1>
      <input  style={{margin:'10px', padding:'4px'}} type='text' value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
      <input  style={{margin:'10px', padding:'4px'}} type='text' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
