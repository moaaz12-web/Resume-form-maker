// import React from 'react';
// import { useState } from 'react';
// import {AiFillDelete} from 'react-icons/ai'
// import {IoIosAddCircle} from 'react-icons/io'


// const ExperienceForm = () => {
//   const [numExperiences, setNumExperiences] = useState(1);
//   const [formData, setFormData] = useState({});
//   const [values, setValues] = useState({});

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // console.log("Length is " , event.target.length)

//     for (let i = 0; i < event.target.length; i++) {
//       console.log(event.target[i].value);
//     }

//     const formValues = {};
//     for (let i = 1; i <= numExperiences; i++) {
//       formValues[`company${i}`] = formData[`company${i}`];
//       formValues[`sectionTitle${i}`] = formData[`sectionTitle${i}`];
//       formValues[`role${i}`] = formData[`role${i}`];
//       formValues[`location${i}`] = formData[`location${i}`];
//       formValues[`description${i}`] = formData[`description${i}`];
//     }
//     setFormData(formValues);
//   };

//   const handleAddExperience = () => {
//     setNumExperiences(numExperiences + 1);
//   };

//   const handleDeleteExperience = (experienceNumber) => {
//     if (numExperiences > 1) {
//       const newNumExperiences = numExperiences - 1;
//       setNumExperiences(newNumExperiences);
//       const newValues = {};
//       for (let i = 1; i <= newNumExperiences; i++) {
//         if (i < experienceNumber) {
//           newValues[`company${i}`] = document.getElementById(`company${i}`).value;
//           newValues[`sectionTitle${i}`] = document.getElementById(`sectionTitle${i}`).value;
//           newValues[`role${i}`] = document.getElementById(`role${i}`).value;
//           newValues[`description${i}`] = document.getElementById(`description${i}`).value;
//           newValues[`location${i}`] = document.getElementById(`location${i}`).value;
//         } else {
//           newValues[`company${i}`] = document.getElementById(`company${i + 1}`).value;
//           newValues[`sectionTitle${i}`] = document.getElementById(`sectionTitle${i + 1}`).value;
//           newValues[`role${i}`] = document.getElementById(`role${i + 1}`).value;
//           newValues[`description${i}`] = document.getElementById(`description${i + 1}`).value;
//           newValues[`location${i}`] = document.getElementById(`location${i + 1}`).value;
//         }
//       }
//       setValues(newValues);
//     }
//   };

//   const renderExperienceSections = () => {
//     const sections = [];
//     for (let i = 1; i <= numExperiences; i++) {
//       sections.push(
//         <div key={i}>

//         <div className="relative z-0 w-full mb-6 group">
//                 <input type="text" name={`company${i}`} id={`company${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
//                 <label htmlFor={`company${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
//               </div>

//               <div className="grid md:grid-cols-2 md:gap-6">

//                 <div className="grid md:grid-cols-2 md:gap-6">
//                   <div className="relative z-0 w-full mb-6 group">
//                     <input type="text" name={`location${i}`} id={`location${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
//                     <label htmlFor={`location${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 md:gap-6">
//                   <div className="relative z-0 w-full mb-6 group">
//                     <input type="text" name={`role${i}`} id={`role${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
//                     <label htmlFor={`role${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Role</label>
//                   </div>


//                 </div>
//                   <div className="relative z-0 w-full mb-6 group">
//                     <input type="text" name={`sectionTitle${i}`} id={`sectionTitle${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
//                     <label htmlFor={`sectionTitle${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Section Title</label>
//                   </div>
//               </div>
//           <div className='my-4 md:my-10'>
//                 <label htmlFor={`description${i}`} className="block mb-2 font-medium text-black">Job Description</label>
//                 <textarea id={`description${i}`}  name={`description${i}`}  rows="4" className="block p-2 w-full font-medium text-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here..."></textarea>
//               </div>
//         </div>
//       );
//     }
//     return sections;
//   };


//   return (
// <div>
//       <form onSubmit={handleFormSubmit}>

//         {renderExperienceSections()}
//         {/* <button type='submit'>Submit</button> */}

//         <button  type="submit" className="relative float-right  inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
//           <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
//           <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500  md:rounded-full opacity-30 group-hover:rotate-90 ease"></span>
//           <span className="relative text-white text-sm md:text-sm ">Save</span>
//         </button>

//       </form>
//       <button onClick={handleAddExperience}> <IoIosAddCircle size='2rem' /></button>
//       <button onClick={handleDeleteExperience}><AiFillDelete size='2rem' /></button>

//     </div>

//   )
// }

// export default ExperienceForm

//! THIS IS IMPORTANT TO USE, BUT FORM DATA NOT SHOWING. FIX IT
import React from 'react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux';


const ExperienceForm = () => {
  const [numExperiences, setNumExperiences] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch()

const handleFormSubmit = (event) => {
  event.preventDefault();
  
  const experienceForms = [];
  experienceForms.push({'summary' : event.target['summary'].value});
  for (let i = 1; i <= numExperiences; i++) {
    const experienceForm = {
      company: event.target[`company${i}`].value,
      sectionTitle: event.target[`sectionTitle${i}`].value,
      role: event.target[`role${i}`].value,
      location: event.target[`location${i}`].value,
      description: event.target[`description${i}`].value,
      startdate: event.target[`startdate${i}`].value,
      enddate: event.target[`enddate${i}`].value,
    };
    experienceForms.push(experienceForm);
  }

  setFormData(experienceForms);
  dispatch({type: 'EXPERIENCE_FORM_SUCCESS', payload: experienceForms})
};


  const handleAddExperience = () => {
    setNumExperiences(numExperiences + 1);
  };

  const handleDeleteExperience = (experienceNumber) => {
    if (numExperiences > 1) {
      const newNumExperiences = numExperiences - 1;
      setNumExperiences(newNumExperiences);
      
      const newValues = {};
      for (let i = 1; i <= newNumExperiences; i++) {
        if (i < experienceNumber) {
          newValues[`company${i}`] = values[`company${i}`];
          newValues[`sectionTitle${i}`] = values[`sectionTitle${i}`];
          newValues[`role${i}`] = values[`role${i}`];
          newValues[`description${i}`] = values[`description${i}`];
          newValues[`location${i}`] = values[`location${i}`];
          newValues[`startdate${i}`] = values[`startdate${i}`];
          newValues[`enddate${i}`] = values[`enddate${i}`];
        } else {
          newValues[`company${i}`] = values[`company${i + 1}`];
          newValues[`sectionTitle${i}`] = values[`sectionTitle${i + 1}`];
          newValues[`role${i}`] = values[`role${i + 1}`];
          newValues[`description${i}`] = values[`description${i + 1}`];
          newValues[`location${i}`] = values[`location${i + 1}`];
          newValues[`startdate${i}`] = values[`startdate${i + 1}`];
          newValues[`enddate${i}`] = values[`enddate${i + 1}`];
        }
      }
      setValues(newValues);
    }
  };

  const renderExperienceSections = () => {
    const sections = [];
    for (let i = 1; i <= numExperiences; i++) {
      sections.push(
        <div key={i}>

          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`company${i}`} id={`company${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
            <label htmlFor={`company${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
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
                <input type="text" name={`role${i}`} id={`role${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
                <label htmlFor={`role${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Role</label>
              </div>


            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="date" name={`startdate${i}`} id={`startdate${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`startdate${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="date" name={`enddate${i}`} id={`enddate${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`enddate${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name={`sectionTitle${i}`} id={`sectionTitle${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
              <label htmlFor={`sectionTitle${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Section Title</label>
            </div>
          </div>
          <div className='my-4 md:my-10'>
            <label htmlFor={`description${i}`} className="block mb-2 font-medium text-black">Job Description</label>
            <textarea id={`description${i}`} name={`description${i}`} rows="4" className="block p-2 w-full font-medium text-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here..."></textarea>
          </div>
        </div>
      );
    }
    return sections;
  };


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <div className='my-4 md:my-10'>
            <label htmlFor='summary' className="block mb-2 font-medium text-black">Professional Summary</label>
            <textarea id='summary' name='summary' rows="4" className="block p-2 w-full font-medium text-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here..."></textarea>
          </div>
        </div>
        {renderExperienceSections()}
        <button type="submit" className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

      </form>
      <div className='flex mt-4 justify-between items-center'>

          <button onClick={handleAddExperience}> <IoIosAddCircle size='2rem' /></button>
          <button onClick={handleDeleteExperience}><AiFillDelete size='2rem' /></button>
      </div>
    </div>

  )
}

export default ExperienceForm