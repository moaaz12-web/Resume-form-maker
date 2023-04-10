import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux';

function SkillsForm() {
  const [numSkills, setNumSkills] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log("Length is " , event.target.length)

  //   for (let i = 0; i < event.target.length; i++) {
  //     console.log(event.target[i].value);
  //   }

  //   const formValues = {};
  //   for (let i = 1; i <= numSkills; i++) {
  //     formValues[`skill_title_${i}`] = formData[`skill_title_${i}`];
  //     formValues[`skill_description_${i}`] = formData[`skill_description_${i}`];
  //   }
  //   setFormData(formValues);
  //   // console.log(formData)
  // };

  const handleAddSkill = () => {
    setNumSkills(numSkills + 1);
  };

  const handleDeleteSkill = (skillNumber) => {
    if (numSkills > 1) {
      const newNumSkills = numSkills - 1;
      setNumSkills(newNumSkills);

      const newValues = {};
      for (let i = 1; i <= newNumSkills; i++) {
        if (i < skillNumber) {
          newValues[`skill_title_${i}`] = values[`skill_title_${i}`];
          newValues[`skill_description_${i}`] = values[`skill_description_${i}`];
        } else {
          newValues[`skill_title_${i}`] = values[`skill_title_${i + 1}`];
          newValues[`skill_description_${i}`] = values[`skill_description_${i + 1}`];
        }
      }
      setValues(newValues);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    
    const skillForms = [];
    for (let i = 1; i <= numSkills; i++) {
      const skillForm = {
        title: event.target[`skill_title_${i}`].value,
        description: event.target[`skill_description_${i}`].value,
      };
      skillForms.push(skillForm);
    }
  
    setFormData(skillForms);
    dispatch({type: 'SKILLS_FORM_SUCCESS', payload: skillForms})
  };


  const renderSkillSections = () => {
    const sections = [];
    for (let i = 1; i <= numSkills; i++) {
      sections.push(
        <div className="grid md:grid-cols-2 md:gap-6" key={i}>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`skill_title_${i}`} id={`skill_title_${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder={`Skill type ${i}`}  />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name={`skill_description_${i}`} id={`skill_description_${i}`} className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor={`skill_description_${i}`} className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter skills, separated by ,</label>
          </div>
        </div>
      );
    }
    return sections;
  };


  return (

    <div>
    <form onSubmit={handleFormSubmit}>

    {renderSkillSections()}
      {/* <button type='submit'>Submit</button> */}


    <button type="submit" className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
      
    </form>
<div className='flex mt-4 justify-between items-center'>

    <button onClick={handleAddSkill}> <IoIosAddCircle size='2rem' /></button>
    <button onClick={handleDeleteSkill}><AiFillDelete size='2rem' /></button>
</div>

  </div>


  );
}

export default SkillsForm;
