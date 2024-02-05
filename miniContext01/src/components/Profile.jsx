import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div style={{marginLeft:'20px'}}> Login Please </div>
    if(user.username === '' || user.username === ' ') return <div style={{marginLeft:'20px'}}>Fill Details Before Submitting</div>
    return <div style={{marginLeft:'20px'}}>Welcome {user.username}</div>
}

export default Profile
