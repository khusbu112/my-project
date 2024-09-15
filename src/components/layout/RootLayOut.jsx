import React from 'react'
import { Outlet } from 'react-router-dom'
import Homepage from '../Homepage'
import Navbar from '../Navbar'
import Footer from '../Footer'

const RootLayOut = () => {
  return (
    <>
    <Homepage/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default RootLayOut