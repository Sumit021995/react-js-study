import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const userId = useParams()
  return (
    <div className='bg-gray-400 text-orange-700'>
      User : {userId}
    </div>
  )
}

export default User
