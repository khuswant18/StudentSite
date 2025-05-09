import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet , useLocation} from 'react-router-dom'




function Layout() {

  const location = useLocation();
  const showNavbar = location.pathname === '/'

  return (
    <div>
      {showNavbar && <Navbar/>}
      <Outlet/>
    </div>
  )
}


export default Layout
