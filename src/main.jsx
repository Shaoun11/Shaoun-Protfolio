import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './Home.jsx'

const route=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  children:[{
    path:"/",
    element:<Home></Home>
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} ></RouterProvider>
  </React.StrictMode>,
)
