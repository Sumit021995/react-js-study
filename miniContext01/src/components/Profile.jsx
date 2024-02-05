import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div> Login Please </div>
    if(user.username === '' || user.username === ' ') return <div>Fill Details Before Submitting</div>
    return <div>Welcome {user.username}</div>
}

export default Profile
