import React from 'react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux';

const CertsForm = () => {
  const [numCerts, setnumCerts] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log("Length is " , event.target.length)

  //   for (let i = 0; i < event.target.length; i++) {
  //   //   console.log(event.target[i].value);
  //   }
    
  //   const formValues = {};
  //   for (let i = 1; i <= numCerts; i++) {
  //     formValues[`certname${i}`] = formData[`certname${i}`];
  //     formValues[`certDate${i}`] = formData[`certDate${i}`];
  //     formValues[`certOrg${i}`] = formData[`certOrg${i}`];
  //   }
  //   setFormData(formValues);
  //   // console.log(formData)
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    
    const CertForms = [];
    for (let i = 1; i <= numCerts; i++) {
      const CertForm = {
        title: event.target[`certname${i}`].value,
        org: event.target[`certOrg${i}`].value,
        date: event.target[`certDate${i}`].value,
      };
      CertForms.push(CertForm);
    }
  
    setFormData(CertForms);
    dispatch({type: 'CERTIFICATION_FORM_SUCCESS', payload: CertForms})
  };

  



  const handleAddCert = () => {
    setnumCerts(numCerts + 1);
  };

  const handleDeleteCert = (eduNumber) => {
    if (numCerts > 1) {
      const newnumCerts = numCerts - 1;
      setnumCerts(newnumCerts);

      const newValues = {};
      for (let i = 1; i <= newnumCerts; i++) {
        if (i < eduNumber) {
          newValues[`certOrg${i}`] = values[`certOrg${i}`];
          newValues[`certDate${i}`] = values[`certDate${i}`];
          newValues[`certname${i}`] = values[`certname${i}`];
        } else {
          newValues[`certOrg${i}`] = values[`certOrg${i + 1}`];
          newValues[`certDate${i}`] = values[`certDate${i + 1}`];
          newValues[`certname${i}`] = values[`certname${i + 1}`];
        }
      }
      setValues(newValues);
    }
  };





  const renderEducationSections = () => {
    const sections = [];
    for (let i = 1; i <= numCerts; i++) {
      sections.push(
        <div key={i}>

          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`certname${i}`} id={`certname${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
            <label htmlFor={`certname${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Certification Name</label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="date" name={`certDate${i}`} id={`certDate${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
                <label htmlFor={`certDate${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Issuing Date</label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="text" name={`certOrg${i}`} id={`certOrg${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
                <label htmlFor={`certOrg${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Issuing Organization</label>
              </div>
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


      <button onClick={handleAddCert}> <IoIosAddCircle size='2rem' /></button>
      <button onClick={handleDeleteCert}><AiFillDelete size='2rem' /></button>
</div>

    </div>





  )
}

export default CertsForm