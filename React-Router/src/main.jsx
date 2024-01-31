import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

// const router = createBrowserRouter([
//   {
//   path :'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },{
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:'contact_us',
//       element:<Contact/>
//     }
//   ]
// }
// ])
const router = createBrowserRouter(
<Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact_us' element={<Contact/>}/>

</Route>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
