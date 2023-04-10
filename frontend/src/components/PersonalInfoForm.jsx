import React from 'react'
// import LanguageInput from './LanguageInput'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
const PersonalInfoForm = () => {
  const dispatch = useDispatch();

  const [numSkills, setNumSkills] = useState(1);
  const [formData, setFormData] = useState({});
  const [values, setValues] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(event.target[3].value)
    console.log(event.target[4].value)
    console.log(event.target[5].value)

    

    const formValues = {};
    // for (let i = 1; i <= numSkills; i++) {
      formValues[`email`] =event.target[0].value
      formValues[`fullname`] =event.target[1].value
      formValues[`LinkedIN`] =event.target[2].value
      formValues[`phone`] =event.target[3].value
      formValues[`Github`] =event.target[4].value
      formValues[`Interest`] =event.target[5].value
    // }
    setFormData(formValues);
    console.log(formValues)
    dispatch({ type: 'PERSONAL_INFO_FORM_SUCCESS', payload: formValues });
    // console.log(formData)
  };


  return (
    
<form onSubmit={handleFormSubmit}>



  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="email" className="block py-2.5 px-0 w-1/2 text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />

      <label htmlFor="email" className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="fullname" id="fullname" className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
        <label htmlFor="fullname" className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
    </div>
  </div>
  
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="url" name="LinkedIN" id="LinkedIN" className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
        <label htmlFor="LinkedIN" className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">LinkedIN URL</label>
    </div>
  </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
        <input type="tel"  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
        <label htmlFor="phone" className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
    </div>

    <div className="relative z-0 w-full mb-4 group">
        <input type="url" name="Github" id="Github" className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-black border-b-2 border-gray-300 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" "  />
        <label htmlFor="Github" className="peer-focus:font-medium  mt-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">GitHub URL</label>
    </div>
  
  </div>

  <div className='my-6 md:my-12'>
        <label htmlFor="message" className="block mb-2 font-medium text-black">Interests</label>
        <textarea id="Interest" rows="4" className="block p-2 w-full font-medium text-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Write your interests here..."></textarea>
      </div>

    {/* <LanguageInput/> */}

  <button type="submit" className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>


  {/* <button type='submit' class="relative float-right inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Button Text</span>
</button> */}

</form>

  )
}

export default PersonalInfoForm