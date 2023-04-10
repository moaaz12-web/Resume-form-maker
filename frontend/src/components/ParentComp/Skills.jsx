import React from 'react';

function Skills({ skillsData }) {
    return (
<div className="mb-8" style={{lineHeight:"0.8"}}>
  <h2 className="px-4 text-xl font-bold underline">Skills</h2>
  <div className="px-4">
    {skillsData && skillsData.length > 0 ? (
      skillsData.map((skill, index) => (
        <div className='' key={index}>
          <p className="text-gray-700 text-sm " ><span className='font-semibold'>{skill.title}: </span>{skill.description}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-700 text-sm ">No skills to display.</p>
    )}
  </div>
</div>

    
    
    );
}

export default Skills;


