import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './components/layout/Main.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Blog from './components/Blog/Blog.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
     {
        path: '/',
        element: <Home></Home>
     },
     {
      path: 'login',
      element: <Login></Login>
     },
     {
      path:'register',
      element: <Register></Register>
     },
     {
      path: 'blog',
      element: <Blog></Blog>
     }
     
      

    ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
