import React, { useState } from "react";
import { useSelector } from "react-redux";
const MainContent = () => {
// eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);

  const generated = useSelector(state => state.generated);

  const toggleDropdown = (e) => {
    setIsOpen((prevState) => !prevState);
    // setLanuage(e.target.value);

  };
  const lang = [
    "English",
    "German",
    "Spanish",
    "Italian",
    "Hindi",
    "Turkish",
    "French",
    "Japanese",
    "Chinese",
    "Russian",
  ];
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-6 w-full">
      <div className="flex flex-row justify-end gap-4">
        <button className="bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-full border border-gray-400 shadow-lg hover:shadow-xl sm:w-32 md:w-52">
          Favorites
        </button>
        <button className="bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-full border border-gray-400 shadow-lg hover:shadow-xl sm:w-32 md:w-52">
          New Document
        </button>
      </div>
      <select placeholder = "Select language for translation" className="form-input border border-gray-500 bg-gray-300 py-2 px-3 block w-2/3 mt-4 mr-auto ml-auto rounded-full border leading-5 cursor-pointer transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="dropdown1">
            {lang.map((item, index) => (
              <option   key = {index} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
              >{item}</option>
            ))}
          </select>


      <div className="flex flex-col md:flex-row justify-around gap-4 mt-4">
        <div className="flex flex-col justify-center items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Generated text</p>
          <textarea
            className="border rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            placeholder="We are waiting foryou to generate some amazing content ✨✨✨" value={generated}
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Translated text</p>


          <textarea
            className="border rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            placeholder="Translated version.... from the dropdown below ✨✨✨"
          ></textarea>
          

        </div>
      </div>


    </div>
  );

};

export default MainContent;


