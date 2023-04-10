import React, { useState } from "react";
import PersonalInfoForm from "../PersonalInfoForm.jsx";
import ExperienceForm from "../ExperienceForm.jsx";
import EducationForm from "../EducationForm.jsx";
import SkillsForm from "../SkillsForm.jsx";
import ProjectsForm from "../ProjectsForm.jsx";
import CertsForm from "../CertsForm.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import DatePicker from '../DatePicker.jsx';
import AcheivementsForm from "../AcheivementsForm.jsx";

function WireFrame() {
  const [activeButton, setActiveButton] = useState("personal info");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-screen mx-auto shadow-lg rounded-md p-6">
      {/* <div className="flex gap-2 md:gap-6 lg:gap-12 mb-6 items-center justify-center md:justify-between"> */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-6 xl:gap-12 mb-6 items-center justify-center md:justify-between">
        <button
          onClick={() => handleButtonClick("personal info")}
          className="w-1/3 relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500  md:rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg px-4">
            Personal Info
          </span>
        </button>

        {/* <DatePicker/> */}

        <button
          onClick={() => handleButtonClick("experience")}
          className="w-1/3 relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg px-4">
            Experience
          </span>
        </button>

        <button
          onClick={() => handleButtonClick("education")}
          className="w-1/3 relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg px-4">
            Education
          </span>
        </button>

        <button
          onClick={() => handleButtonClick("skills")}
          className="relative w-1/3 inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg px-4">
            Skills
          </span>
        </button>

        <button
          onClick={() => handleButtonClick("projects")}
          className="relative w-1/3 inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg ">
            Projects
          </span>
        </button>
        <button
          onClick={() => handleButtonClick("certifications")}
          className=" w-1/3 relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg px-4">
            Certifications
          </span>
        </button>
        <button
          onClick={() => handleButtonClick("acheivements")}
          className=" w-1/3 relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-32 h-32 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-sm md:text-lg px-4">
            Acheivements
          </span>
        </button>
      </div>
      {activeButton === "personal info" && <PersonalInfoForm />}
      {activeButton === "experience" && <ExperienceForm />}
      {activeButton === "education" && <EducationForm />}
      {activeButton === "skills" && <SkillsForm />}
      {activeButton === "projects" && <ProjectsForm />}
      {activeButton === "certifications" && <CertsForm />}
      {activeButton === "acheivements" && <AcheivementsForm />}

      <div className="flex justify-between items-center">
        
  <button onClick={()=>dispatch({type:"RESET_DATA"})} className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-1/8 px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Reset all forms
  </button>
  <button onClick={()=>navigate('resume')} className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-1/8 px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Create Resume
  </button>
</div>

    </div>
  );
}

export default WireFrame;
