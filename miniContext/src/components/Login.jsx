import React  , {useState , useContext }from 'react'
import UserContext from '../Context/UserContext'

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='username'/>
      <input type='text' placeholder='password'/>
    </div>
  )
}

export default Login
