import React  , {useState , useContext }from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const {setUser} = useContext(UserContext)

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h2 className='text-center text-gray-200'>Login</h2>
      <div className='bg-gray-600 text-center text-yellow-300 p-4 m-4'>
      <input type='text' value = {username} onChange ={(e)=>setUsername(e.target.value)} placeholder='username'/>
      {"  "}
      <input type='text' value = {password} onChange ={(e)=>setPassword(e.target.value)} placeholder='password'/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
