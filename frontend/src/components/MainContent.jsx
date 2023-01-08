import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
// eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const translated = useSelector((state) => state.translated);
  const navigate = useNavigate()


  useEffect(() => {
    let history = [];
  let currentIndex = -1;
    const handleKeyDown = (event) => {
      if (event.key === "a" && event.ctrlKey) {
        // select all the text in the textarea when Ctrl + A is pressed
        textareaRef.current.select();
      } else if (event.key === "c" && event.ctrlKey) {
        // copy the selected text to the clipboard when Ctrl + C is pressed
        navigator.clipboard.writeText(textareaRef.current.value);
      } else if (event.key === "v" && event.ctrlKey) {
        // paste the text from the clipboard to the textarea when Ctrl + V is pressed
        navigator.clipboard.readText().then((text) => {
          textareaRef.current.value = text;
        });
      } else if (event.key === "x" && event.ctrlKey) {
        // cut the selected text from the textarea and copy it to the clipboard when Ctrl + X is pressed
        navigator.clipboard.writeText(textareaRef.current.value);
        textareaRef.current.value = "";
      } else if (event.key === "Backspace" && textareaRef.current.value !== "") {
        // prevent the default behavior of the backspace key when it is pressed in the textarea if the textarea is not empty
        event.preventDefault();
      }
      else if (event.key === "z" && event.ctrlKey) {
      // undo the last action if Ctrl + Z is pressed and the history is not empty
      if (currentIndex > 0) {
        currentIndex--;
        textareaRef.current.value = history[currentIndex];
      }
    } else if (event.key === "y" && event.ctrlKey) {
      // redo the last undone action if Ctrl + Y is pressed and the history has an action to redo
      if (currentIndex < history.length - 1) {
        currentIndex++;
        textareaRef.current.value = history[currentIndex];
      }
    } else {
      // add the current value of the textarea to the history if a key other than Ctrl + Z or Ctrl + Y is pressed
      history = [...history.slice(0, currentIndex + 1), textareaRef.current.value];
      currentIndex++;
    }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const generated = useSelector(state => state.generated);

  const toggleDropdown = (e) => {
    setIsOpen((prevState) => !prevState);

  };
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    Axios.post("http://localhost:5000/api/translate", { language: selectedLanguage, text:generated })
      .then(res => {
        if (res.data.translated) {
          // dispatch a plain object action using the dispatch function
          dispatch({ type: "TRANSLATE_SUCCESS", payload: res.data.translated });
        } else {
          console.error("The response does not contain the expected data");
        }
      })
      .catch(err => {
        console.error(err);
        // dispatch an error action using the dispatch function
        dispatch({ type: "ERROR", payload: err });
      });
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
        <button 
        className="bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-full border border-gray-400 shadow-lg hover:shadow-xl sm:w-32 md:w-52"
        // onClick={navigate("/favorites")}
        >
          
          Favorites
        </button>
        <button className="bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-full border border-gray-400 shadow-lg hover:shadow-xl sm:w-32 md:w-52"
        // onClick={navigate("/newDoc")}

        >
          New Document
        </button>
      </div>
      <select
    placeholder="Select language for translation"
    className="form-input border border-gray-500 bg-gray-300 py-2 px-3 block w-2/3 mt-4 mr-auto ml-auto rounded-full border leading-5 cursor-pointer transition duration-150 ease-in-out sm:text-sm sm:leading-5"
    id="dropdown1"
    onChange={handleLanguageChange}
  >
    {lang.map((item, index) => (
      <option
        key={index}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm"
        onClick={toggleDropdown}
      >
        {item}
      </option>
    ))}
  </select>


      <div className="flex flex-col md:flex-row justify-around gap-4 mt-4">
        <div className="flex flex-col justify-center items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" htmlFor="dropdown1">Generated text</p>
          <textarea
            className="border rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl cursor-pointer w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            placeholder="We are waiting foryou to generate some amazing content ✨✨✨" value={generated}   ref={textareaRef}

            
          ></textarea>

        </div>
        <div className="flex flex-col justify-center items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" htmlFor="dropdown2">Translated text</p>


          <textarea
            className="border rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl cursor-pointer w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            placeholder="Translated version.... from the dropdown below ✨✨✨" value={translated} 
          ></textarea>
          

        </div>
      </div>


    </div>
  );

};

export default MainContent;


