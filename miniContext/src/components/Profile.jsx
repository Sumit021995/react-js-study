import React ,{ useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div className='bg-gray-600 text-center text-yellow-300'>Login Please</div>
    return <div className='bg-gray-600 text-center text-yellow-300'> Welcome {user.username}</div>
}

export default Profile
