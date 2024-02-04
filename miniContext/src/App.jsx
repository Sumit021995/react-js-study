import React  , { useContext } from 'react'
import UserContextProvider from './Context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'



function App() {
  

  return (
    <UserContextProvider >
      <div>
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
