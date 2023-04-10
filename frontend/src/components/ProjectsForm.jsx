import React from 'react'
import { useState } from 'react';
import {AiFillDelete} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io'
import { useDispatch } from 'react-redux';

const ProjectsForm = () => {
const dispatch = useDispatch();
  const [numprojects, setNumprojects] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const projectForms = [];
    for (let i = 1; i <= numprojects; i++) {
      const projectForm = {
        title: event.target[`project_title_${i}`].value,
        description: event.target[`project_description_${i}`].value,
        role: event.target[`project_role_${i}`].value,
        url: event.target[`project_link_${i}`].value,
        enddate: event.target[`enddate${i}`].value,
        startdate: event.target[`startdate${i}`].value,
      };
      projectForms.push(projectForm);
    }
  
    setFormData(projectForms);
    dispatch({type: 'PROJECTS_FORM_SUCCESS', payload: projectForms})
  };

  


  const handleAddproject = () => {
    setNumprojects(numprojects + 1);
  };

  const handleDeleteproject = (projectNumber) => {
    if (numprojects > 1) {
      const newNumprojects = numprojects - 1;
      setNumprojects(newNumprojects);
  
      const newValues = {};
      for (let i = 1; i <= newNumprojects; i++) {
        if (i < projectNumber) {
          newValues[`project_title_${i}`] = values[`project_title_${i}`];
          newValues[`project_description_${i}`] = values[`project_description_${i}`];
          newValues[`project_role_${i}`] = values[`project_role_${i}`];
          newValues[`project_link_${i}`] = values[`project_link_${i}`];
          newValues[`startdate${i}`] = values[`startdate${i}`];
          newValues[`enddate${i}`] = values[`enddate${i}`];
        } else {
          newValues[`project_title_${i}`] = values[`project_title_${i + 1}`];
          newValues[`project_description_${i}`] = values[`project_description_${i + 1}`];
          newValues[`project_role_${i}`] = values[`project_role_${i + 1}`];
          newValues[`project_link_${i}`] = values[`project_link_${i + 1}`];
          newValues[`startdate${i}`] = values[`startdate${i + 1}`];
          newValues[`enddate${i}`] = values[`enddate${i + 1}`];
        }
      }
      setValues(newValues);
    }
  };
  


  

  const renderprojectSections = () => {
    const sections = [];
    for (let i = 1; i <= numprojects; i++) {
      sections.push(
        <div key={i}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`project_title_${i}`}
              id={`project_title_${i}`}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor={`project_title_${i}`}
              className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Project Title
            </label>
          </div>
  
          <div className='my-6 md:my-12'>
            <label
              htmlFor={`project_description_${i}`}
              className="block mb-2 font-medium text-black"
            >
              Project Description
            </label>
            <textarea
              id={`project_description_${i}`}
              rows="4"
              className="block p-2 w-full font-medium text-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write description here..."
            ></textarea>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name={`project_role_${i}`}
              id={`project_role_${i}`}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor={`project_role_${i}`}
              className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Role
            </label>
          </div>
  

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              name={`project_link_${i}`}
              id={`project_link_${i}`}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor={`project_link_${i}`}
              className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              GitHub Link
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
              <input type="date" name={`startdate${i}`} id={`startdate${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label for={`startdate${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="date" name={`enddate${i}`} id={`enddate${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label for={`enddate${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
            </div>
  
  
          {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
        </div>
      );
    }
    return sections;
  };
  

  return (


<div>
    <form onSubmit={handleFormSubmit}>

      {renderprojectSections()}
      {/* <button type='submit'>Submit</button> */}
    <button type="submit" className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
    </form>
    <div className='flex mt-4 justify-between items-center'>

    <button onClick={handleAddproject}> <IoIosAddCircle size='2rem' /></button>
    <button onClick={handleDeleteproject}><AiFillDelete size='2rem' /></button>
</div>

  </div>

    
  )
}

export default ProjectsForm