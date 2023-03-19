import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useStateValue } from '../components/StateProvider';
import './taskbar.css';
import {auth} from '../Firebase'
import Dropdown from './Dropdown';
const Taskbar = () => {
  const [{ user }] = useStateValue();
  const logout = () => {
    auth.signOut();
    window.location.reload();
}
  return (
    <div className="taskbar border-b-2 sticky inset-x-0 top-0  py-5 z-10 bg-white">
        <Link to="/"><img  src={require('./logo.png')} className="logo" /></Link>

        <div className="link_container">
            <Link className='m-5 text-xl hover:bg-blue-500 font-bold py-2 px-4 rounded-full' to="/form">Post Houses</Link>
            {/* <Link  className='text-xl hover:bg-blue-500 font-bold py-2 px-4 rounded-full'to="/login">Login</Link> */}
            {/* <Link  className='text-xl hover:bg-blue-500 font-bold py-2 px-4 rounded-full'>Logout</Link> */}
            <div className="hover:bg-gray-500 rounded-full cursor-pointer">
                   <div className="flex p-3">
                       <img style={{objectFit: 'contain'}}className="h-15 w-10 rounded-full mr-3" src={user.photoURL === null ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F05%2F24%2F770117_people_512x512.png&f=1&nofb=1" : user.photoURL } alt="" />
                       
                       {/* <div>
                           <p className="hidden md:block text-black font-medium">{user.displayName}</p>
                           <p className="hidden md:block text-xs">{user.email}</p>
                       </div> */}
                       <Dropdown />
                   </div>
               </div>

        </div>
    </div>
  )
}

export default Taskbar