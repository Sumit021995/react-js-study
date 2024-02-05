import React , { Children, useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({childern})=>{
    const [user,setUser] = useState(null);
    return (
        <UserContext.Provider value = {{user,setUser}}>
            {Children}
        </UserContext.Provider>
    )
}