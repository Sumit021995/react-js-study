import React ,{ useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div className='mx-4 text-white my-2 text-lg'>Login Please</div>
    if(user.username === '' || user.username === ' ') return <div className='mx-4 text-white my-2 text-lg'>Fill Details Before Submitting</div>
    return <div className='mx-4 text-white my-2 text-lg'> Welcome {user.username}</div>
}

export default Profile
