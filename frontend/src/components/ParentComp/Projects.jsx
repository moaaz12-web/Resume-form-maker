import React from 'react'

const Projects = ({projectData}) => {
  // console.log(projectData)
  return (
<div className='mb-8' style={{lineHeight:"0.9"}}>
  <p className='px-4 text-xl font-bold underline'>Projects</p>
  {projectData && projectData.length > 0 ? (
    projectData.map((project, index) => (
      <div className='px-4' key={index}>
        <div className='flex items-center justify-between'>
          <li className='text-md pt-2 uppercase mb-2'>{project.title}</li>
          {project.startdate && project.enddate ? (
            <span className="text-sm font-semibold bg-gray-200 text-gray-700 rounded-lg px-2 py-1">Date: {project.startdate} - {project.enddate}</span>
          ) : null}
        </div>
        <div className='flex justify-between items-center my-2'>
          {project.role ? (
            <p className='p-0 text-sm font-bold italic ml-4' style={{lineHeight:"0.2"}}>{project.role}</p>
          ) : null}
          {project.url ? (
            <a href={project.url} className='p-0 text-sm italic ml-4' style={{lineHeight:"0.2"}}>Github</a>
          ) : null}
        </div>
        {project.description ? (
          <p className="text-gray-700 text-sm"><span className="font-semibold text-sm text-gray-800">Description:</span> {project.description}</p>
        ) : null}
      </div>
    ))
  ) : (
    <></>
  )}
</div>

  )
}

export default Projects