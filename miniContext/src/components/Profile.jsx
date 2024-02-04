import React ,{ useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div className=' bg-gray-800 mx-4 text-white my-2 text-2xl'>Login Please</div>
    return <div className=' bg-gray-800 mx-4 text-white my-2 text-2xl'> Welcome {user.username}</div>
}

export default Profile
