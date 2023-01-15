import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
import MainContent from "../MainContent.jsx";

const ParentComp = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div className='lg:flex'>
            <Sidebar/>
            <div className='flex justify-center w-full bg-white'>

            <MainContent/>
            </div>
        </div>
    </>
  )
}

export default ParentComp