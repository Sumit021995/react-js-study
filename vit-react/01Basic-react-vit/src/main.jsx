import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyName from './Project.jsx'

function MyApp(){
  return (
    <h1>Updated new Function</h1>
  );
}

// MyApp() also work but that is not correct for optimization


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  <MyName/>
  <MyApp/>
   MyApp() 

  </>
    
)
