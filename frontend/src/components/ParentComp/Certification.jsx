import React from 'react'

const Certification = ({certData}) => {
  return (
    <div className='mb-8' style={{ lineHeight: "0.9" }}>
  <p className='px-4 text-xl font-bold underline'>Certifications</p>
  {certData && certData.length > 0 ? (
    certData.map((cert, index) => {
      return (
        <div className='px-4' key={index}>
          <div className='flex items-center justify-between'>
            <li className='text-md pt-2 uppercase mb-2'>{cert.title}</li>
            <span className="text-sm font-semibold bg-gray-200 text-gray-700 rounded-lg px-2 py-1">Date: {cert.date}</span>
          </div>
          <div className='flex justify-between items-center my-2'>
            <p className='p-0 text-sm font-bold italic ml-4' style={{ lineHeight: "0.2" }}>{cert.org}</p>
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

export default Certification;
