import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyName from './Project.jsx'

function MyApp(){
  return (
    <h1>Updated new Function</h1>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  <MyName/>
  <MyApp/>

  </>
    
)
