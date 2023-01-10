import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
import { useSelector } from 'react-redux';
import DocViewComp from './DocViewComp';


const FavoritesPage = () => {
  const docs = useSelector((state) => state.docs.val);
  const ress = docs.data.documents
  console.log(ress)
  return (
    <>
        <div className='flex flex-col items-center w-full'>
            {/* <div className='w-full'> */}
                    <h1 className='text-2xl font-bold text-gray-700'>Saved Documents</h1>
                    
            {/* </div> */}
          <div className=''>
            {ress && (
                        ress.map((val)=>{
                        return <DocViewComp text={val.text} key={ress._id} translated={val.translated}/>})

            )}
          </div>
        </div>
    </>
  )
}

export default FavoritesPage