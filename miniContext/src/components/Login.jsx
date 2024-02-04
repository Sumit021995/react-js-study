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
    <div className='mx-4 bg-gray-800'>
      <h2 className='rounded-l mx-4 text-white text-center text-2xl'>Login</h2>
      <div>
      <input className='rounded-l mx-4' type='text' value = {username} onChange ={(e)=>setUsername(e.target.value)} placeholder='username'/>
      <div className='my-2'>   </div>
      <input className='rounded-l mx-4' type='text' value = {password} onChange ={(e)=>setPassword(e.target.value)} placeholder='password'/>
      </div>
      <button className='rounded-xl bg-yellow-300 p-2 m-2 ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
