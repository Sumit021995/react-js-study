import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyName from './Project.jsx'

function MyApp(){
  return (
    <h1>Updated new Function</h1>
  );
}

const reactElement = {
  type: 'a', // a tag
  props: {
      href:"https://google.com",
      target: '_blank'
  },
  children:"Click me to visit Google"

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
