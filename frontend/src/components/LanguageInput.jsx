import { useState } from 'react';

function LanguageInput() {
  const [languages, setLanguages] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newLanguage = e.target.value.trim();
      if (newLanguage && !languages.includes(newLanguage)) {
        setLanguages([...languages, newLanguage]);
        e.target.value = '';
      }
    }
  };

  const handleRemoveLanguage = (index) => {
    const newLanguages = [...languages];
    newLanguages.splice(index, 1);
    setLanguages(newLanguages);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((language, index) => (
        <div key={index} className="bg-gray-200 rounded-md p-2 flex items-center gap-2">
          <span>{language}</span>
          <button onClick={() => handleRemoveLanguage(index)}>x</button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Enter a language"
        onKeyDown={handleKeyDown}
        className="block p-2.5 w-full font-medium text-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default LanguageInput;
