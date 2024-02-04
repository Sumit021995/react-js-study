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
    <div >
      <h2 className='mx-4 text-white my-2 text-2xl'>Login</h2>
      <div>
      <input className='rounded-sm mx-4' type='text' value = {username} onChange ={(e)=>setUsername(e.target.value)} placeholder='Username'/>
      <div className='my-2'>   </div>
      <input className='rounded-sm mx-4' type='text' value = {password} onChange ={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      </div>
      <button className='rounded-lg bg-yellow-300 p-1 m-4 ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
