import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../SideBar";

const ParentComp = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div className='lg:flex'>
            <Sidebar/>
            <div className='flex justify-center w-full'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-700'>Favorites</h1>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ParentComp