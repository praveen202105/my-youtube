import React from 'react'
import Sidebar from './Sidebar'
import Head from './Head'
import { Outlet } from 'react-router-dom'
// import MainContent from './MainContent'


const Body = () => {
  

  return (
    <>
    <Head/>
    <div className="flex" >
      
      <Sidebar/>
      <Outlet/>
    </div>
    </>
  )
}

export default Body
