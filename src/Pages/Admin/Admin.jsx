import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


const Admin = () => {
  return (
    <div className='main'>
      <div className='Admin'>
        <Navbar/>
        <Sidebar />
    
     <div className='outlet'>
      <Outlet/>
     </div>
    </div>
    </div>
    
  )
}

export default Admin