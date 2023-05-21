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
import AllToys from './components/AllToys/AllToys.jsx'
import MyToys from './components/MyToys/MyToys.jsx'
import AddToy from './components/AddToy.jsx'
import PrivateRoute from './components/routes/PrivateRoute.jsx'
import ToyDetails from './components/AllToys/ToyDetails.jsx'
import UpdateToy from './components/UpdateToy.jsx'
import Error from './components/Error/Error.jsx'


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
     },
    
     {
      path:'mytoys',
      element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/toys')
     },
     {
      path: 'addToy',
      element: <AddToy></AddToy>

     },
     {
      path: '/alltoys',
      element: <AllToys></AllToys>,
      loader: () => fetch('http://localhost:5000/toys')
     },
     {
      path: '/toysDetails/:id',
      element: <PrivateRoute> <ToyDetails></ToyDetails> </PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
    },
    {
      path: '/updatetoy/:id',
      element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      
    },
    
    
     
      

    ]
  },
  {
    path: '*',
    element: <Error></Error>,

  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
