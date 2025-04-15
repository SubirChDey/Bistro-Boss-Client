import React from 'react'
import Home from '../pages/Home/Home/Home'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import Navbar from '../pages/Shared/Navbar/Navbar'
import { Helmet } from 'react-helmet-async'


const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      <Helmet>
        <title>Login || Bistro Boss</title>
      </Helmet>
      { noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      { noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main