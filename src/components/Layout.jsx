import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './landingPage/Home'

const Layout = () => {
  return (
    <div className='grid grid-cols-[0.2fr_1fr]'>
      <Home />
      <Outlet />
    </div>
  )
}

export default Layout
