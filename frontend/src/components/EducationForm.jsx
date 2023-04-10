import React from 'react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux';
const EducationForm = () => {
  const dispatch = useDispatch();
  const [numEducation, setNumEducation] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const educationForms = [];
    for (let i = 1; i <= numEducation; i++) {
      const educationForm = {
        degree: event.target[`degree${i}`].value,
        courses: event.target[`courses${i}`].value,
        location: event.target[`location${i}`].value,
        gpa: event.target[`gpa${i}`].value,
        institute: event.target[`institute${i}`].value,
        start_date: event.target[`start_date${i}`].value,
        end_date: event.target[`end_date${i}`].value,
      };
      educationForms.push(educationForm);
    }
  
    dispatch({ type: 'EDUCATION_FORM_SUCCESS', payload: educationForms });
  };
  

  



  const handleAddEducation = () => {
    setNumEducation(numEducation + 1);
  };

  const handleDeleteEducation = (eduNumber) => {
    if (numEducation > 1) {
      const newNumEducation = numEducation - 1;
      setNumEducation(newNumEducation);

      const newValues = {};
      for (let i = 1; i <= newNumEducation; i++) {
        if (i < eduNumber) {
          newValues[`institute${i}`] = values[`institute${i}`];
          newValues[`location${i}`] = values[`location${i}`];
          newValues[`gpa${i}`] = values[`gap${i}`];
          newValues[`degree${i}`] = values[`degree${i}`];
          newValues[`courses${i}`] = values[`courses${i}`];
          newValues[`start_date${i}`] = values[`start_date${i}`];
          newValues[`end_date${i}`] = values[`end_date${i}`];
        } else {
          newValues[`institute${i}`] = values[`institute${i + 1}`];
          newValues[`location${i}`] = values[`location${i + 1}`];
          newValues[`gpa${i}`] = values[`gpa${i + 1}`];
          newValues[`degree${i}`] = values[`degree${i + 1}`];
          newValues[`courses${i}`] = values[`courses${i + 1}`];
          newValues[`start_date${i}`] = values[`start_date${i+1}`];
          newValues[`end_date${i}`] = values[`end_date${i+1}`];
        }
      }
      setValues(newValues);
    }
  };





  const renderEducationSections = () => {
    const sections = [];
    for (let i = 1; i <= numEducation; i++) {
      sections.push(
        <div key={i}>

          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`institute${i}`} id={`institute${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
            <label htmlFor={`institute${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Institute Name</label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name={`location${i}`} id={`location${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
                <label htmlFor={`location${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name={`degree${i}`} id={`degree${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
                <label htmlFor={`degree${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Degree</label>
              </div>
            </div>
          </div>




          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input type="date" name={`start_date${i}`} id={`start_date${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`start_date${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input type="date" name={`end_date${i}`} id={`end_date${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`end_date${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End date</label>
            </div>
          </div>




          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input type="number" name={`gpa${i}`} id={`gpa${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`gpa${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">GPA</label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name={`courses${i}`} id={`courses${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`courses${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Courses</label>
            </div>
          </div>
        </div>
      );
    }
    return sections;
  };




  return (
    <div>
      <form onSubmit={handleFormSubmit}>

        {renderEducationSections()}
        
      <button type="submit" className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
      </form>
      <div className='flex mt-4 justify-between items-center'>


      <button onClick={handleAddEducation}> <IoIosAddCircle size='2rem' /></button>
      <button onClick={handleDeleteEducation}><AiFillDelete size='2rem' /></button>
</div>

    </div>





  )
}

export default EducationForm