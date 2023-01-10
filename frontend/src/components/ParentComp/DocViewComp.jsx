import React, {useState} from 'react'
import { Audio } from  'react-loader-spinner'


const DocViewComp = ({text, translated}) => {

  const [loading, setLoading] = useState(false)


  return (
    <div className="max-w-screen-lg mx-auto px-4 py-6 w-full">

      <div className="flex flex-col md:flex-row gap-24 justify-between mt-4">
        <div className="flex flex-col justify-between items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2">Generated text</p>
          {loading ? (
            <div className=" h-64 w-full">
              <Audio
                className="absolute inset-0 m-auto"
                type="Audio"
                color="#00BFFF"
                height={80}
                width={80}
              />
            </div>
          ) : (
            <textarea
              className="border rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl cursor-pointer w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              placeholder="We are waiting for you to generate some amazing content ✨✨✨" value={text} 
            ></textarea>
          )}
        </div>
        <div className="flex flex-col justify-between items-center lg:block">
          <p className="block font-bold text-gray-700 mb-2" >Translated text</p>
          {loading ? (
            <div className=" h-64 w-full">
              <Audio
                className="absolute inset-0 m-auto"
                type="Audio"
                color="#00BFFF"
                height={80}
                width={80}
              />
            </div>

          ) : (
            <textarea
              className="border rounded-lg shadow-lg p-2  hover:border-blue-500 hover:shadow-xl cursor-pointer w-full h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              placeholder="Translated version.... from the dropdown below ✨✨✨" value={translated}
            ></textarea>
          )}
        </div>
      </div>


    </div>
  )
}

export default DocViewComp