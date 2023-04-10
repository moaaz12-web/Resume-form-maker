// import React from 'react';

// function Education({ educationData }) {
//   return (

//     <div className="mb-8 " style={{lineHeight: "0.9"}}>
//       <p className="px-4 text-xl font-bold underline">Education</p>
//       {educationData.map((education, index) => (
//         <div key={index} className="px-4">

//                     <p className="text-gray-700 text-sm " style={{lineHeight: "0.1"}}><span className='font-semibold'>Location: </span>{education.location}</p>

//           </div>

//       ))}

//     </div>
//   );
// }

// export default Education;

import React from "react";

function Education({ educationData }) {
  return (
<div className="mb-8 " style={{ lineHeight: "0.9" }}>
  <p className="px-4 text-xl font-bold underline">Education</p>
  {educationData && educationData.length > 0 ? (
    educationData.map((education, index) => (
      <div key={index} className="px-4">
        <div className="flex items-center justify-between">
          <li className="text-md pt-2 uppercase mb-2">{education.degree}</li>
          <span className="text-sm bg-gray-200 text-gray-700 rounded-lg px-2 py-1">
            GPA: {education.gpa}
          </span>
        </div>

        <p
          className="text-gray-700 text-sm mt-2"
          
        >
          <span className="font-semibold ">Institute:</span>{" "}
          <span>{education.institute}</span>
        </p>
        <p className="text-gray-700 text-sm " >
          <span className="font-semibold">Location: </span>
          {education.location}
        </p>
        <p className="text-gray-700 text-sm" >
          <span className="font-semibold">Date:</span>{" "}
          <span>{education.start_date}</span> -{" "}
          <span className="">{education.end_date}</span>
        </p>
        {education.courses && education.courses.length > 0 && (
          <p className="text-gray-700 text-sm" >
            <span className="font-semibold">Courses:</span>{" "}
            <span className="">{education.courses}</span>
          </p>
        )}
      </div>
    ))
  ) : (
    <></>
  )}
</div>

  );
}

export default Education;
