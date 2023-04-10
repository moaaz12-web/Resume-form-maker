import React from 'react';

function Experience({ experienceData }) {
  return (
<div className="mb-8" style={{lineHeight: "0.9"}}>
  <h2 className="text-xl px-4 font-bold underline">Experience</h2>
  {experienceData && experienceData.map((experience, index) => (
    <div key={index} className="px-4">
      <div className="flex items-center justify-between">
        <li className="text-sm pt-2 uppercase mb-2 text-gray-800">{experience.role} @ {experience.company}</li>
        <span className="text-sm font-semibold bg-gray-200 text-gray-700 rounded-lg px-2 py-1">Date: {experience.startdate} - {experience.enddate}</span>
      </div>
      {experience.location && <p className="text-gray-700 text-sm"><span className='font-semibold'>Location: </span>{experience.location}</p>}
      {/* <p className="text-gray-700 text-sm"><span className="font-semibold text-gray-800">Section Title:</span> {experience.sectionTitle}</p> */}
      {experience.description && <p className="text-gray-700 text-sm"><span className="font-semibold text-sm text-gray-800">Description:</span> {experience.description}</p>}
    </div>
  ))}
  {!experienceData && <></>}
</div>

  );
}

export default Experience;
