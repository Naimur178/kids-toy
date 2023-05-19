import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut=() =>{
        logOut()
        .then()
        .catch(console.error())
    }
    return (
      <div>
      <div className="navbar bg-gray-300 pb-3">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>


              </div>
              <a className="btn btn-ghost normal-case text-xl">The Chinese Flavours</a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <button  className='mx-3 bg-green-500 p-3 rounded-xl'>Home</button>
                  <button  className='mx-3'>Blog</button>
                  
                 
                  
              </ul>
          </div>
          <div className="navbar-end">
          {
                      user ? <div className='flex items-center gap-4'> 
                          <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                          <img src={user.photoURL} alt={<FaUserCircle></FaUserCircle>}   className='w-12 rounded-2xl'  />
                          </div>
                          <button onClick={handleLogOut
                          } className="btn btn-outline">Log out</button>
                      </div>:
                      <Link to="/login" className='mx-3 btn btn-outline '>Log in</Link>
                  
                  }
          </div>
      </div>
      {/* <div className="navbar bg-green-500 text-neutral-content justify-between lg-ps-3">
          <a className="btn btn-ghost normal-case text-xl lg:p">daisyUI</a>
          
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <Link to="/" className='mx-3'>Home</Link>
                  <Link to="/blog" className='mx-3'>Blog</Link>
                  <Link to="/login" className='mx-3'>Login</Link>
                  <Link to="/register" className='mx-3'>Sign up</Link>
              </ul>
          
          </div>

      </div> */}

      {/* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center">

                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
              <div className="flex md:order-2">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                  <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                  </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                          <Link to='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                      </li>
                      <li>
                          <Link to='/blog' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                      </li>
                      <li>
                          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav> */}


      
  </div>
    );
};

export default NavBar;