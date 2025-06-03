import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='overflow-hidden'>
        <div>
            <Navbar/>
        </div>
        <div className='px-2'>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout