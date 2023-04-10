import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"

function AcheivementsForm() {
  const Naviagte = useNavigate();
  const dispatch = useDispatch();
  const [numAcheivements, setNumAcheivements] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});



  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event)
    
    const AcheivementForms = [];
    for (let i = 1; i <= numAcheivements; i++) {
      const projectForm = {
        title: event.target[`Acheivement_title_${i}`].value,
        description: event.target[`Acheivement_description_${i}`].value,
      };
      AcheivementForms.push(projectForm);
    }
  
    setFormData(AcheivementForms);
    dispatch({type: 'ACHEIVEMENT_FORM_SUCCESS', payload: AcheivementForms})
  };


  const handleAddAcheivement = () => {
    setNumAcheivements(numAcheivements + 1);
  };

  const handleDeleteAcheivement = (AcheivementNumber) => {
    if (numAcheivements > 1) {
      const newNumAcheivements = numAcheivements - 1;
      setNumAcheivements(newNumAcheivements);

      const newValues = {};
      for (let i = 1; i <= newNumAcheivements; i++) {
        if (i < AcheivementNumber) {
          newValues[`Acheivement_title_${i}`] = values[`Acheivement_title_${i}`];
          newValues[`Acheivement_description_${i}`] = values[`Acheivement_description_${i}`];
        } else {
          newValues[`Acheivement_title_${i}`] = values[`Acheivement_title_${i + 1}`];
          newValues[`Acheivement_description_${i}`] = values[`Acheivement_description_${i + 1}`];
        }
      }
      setValues(newValues);
    }
  };




  const renderAcheivementsections = () => {
    const sections = [];
    for (let i = 1; i <= numAcheivements; i++) {
      sections.push(
        <div className="grid md:grid-cols-2 md:gap-6" key={i}>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`Acheivement_title_${i}`} id={`Acheivement_title_${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder={`Acheivement title ${i}`}  />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`Acheivement_description_${i}`} id={`Acheivement_description_${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
            <label htmlFor={`Acheivement_description_${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acheivement Description </label>
          </div>
        </div>
      );
    }
    return sections;
  };


  return (

    <div>
    <form onSubmit={handleFormSubmit}>

    {renderAcheivementsections()}
    <button type="submit" className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
      
    </form>
<div className='flex mt-4 justify-between items-center'>

    <button onClick={handleAddAcheivement}> <IoIosAddCircle size='2rem' /></button>
    <button onClick={handleDeleteAcheivement}><AiFillDelete size='2rem' /></button>
</div>

  </div>


  );
}

export default AcheivementsForm;
