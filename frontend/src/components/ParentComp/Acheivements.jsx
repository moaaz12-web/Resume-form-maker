import React from 'react'

const Acheivements = ({acheivement}) => {
  return (
    <div className='mb-8' style={{lineHeight:"0.9"}}>
    <p className='px-4 text-xl font-bold underline'>Achievements</p>
    {acheivement && acheivement.length > 0 ? (
      acheivement.map((val, index) => {
        return (
          <div className='px-4' key={index}>
            <div className='flex items-center justify-between'>
              <li className='text-md pt-2 uppercase mb-2'>{val.title}</li>
            </div>
            <div className='flex justify-between items-center'>
              <p className='p-0 text-sm font-bold italic ml-4' style={{lineHeight:"0.2"}}>{val.description}</p>
            </div>
          </div>
        );
      })
    ) : (
      <></>
    )}
  </div>
  
  );
};

export default Acheivements;
