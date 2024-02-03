import React  , { useContext } from 'react'
import UserContextProvider from './Context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
  

  return (
    <UserContextProvider>
      <h1 className='bg-gray-600 text-center text-yellow-300'>Sumit Saurav</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
