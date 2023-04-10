import React from "react";
import { useSelector } from "react-redux";
import Education from "./Education";
import Experience from "./Experience";
import "./abc.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";



import Skills from "./Skills";
import Projects from "./Projects.jsx";
import Certification from "./Certification";
import Acheivements from "./Acheivements";

const ResumeForm = () => {
  const printRef = React.useRef();
  const dispatch = useDispatch();



  const selector = useSelector((state) => state);
  let resumeHeaderData = selector["personalInfo"].personalInfo;
  let educationInfo = selector["education"].Education;
  let experienceInfo = selector["experience"].Experience;
  if(experienceInfo){

    try {
      var summary = experienceInfo["0"].summary;
      
    } catch (error) {
      // console.log(error)
      
    }
    experienceInfo = experienceInfo.slice(1);
  }
  let skillsInfo = selector["skills"].Skills;
  let projectsInfo = selector["projects"].Projects;
  let achievementsInfo = selector["acheivements"];
  let certs = selector["certifications"].Certification;

  function handleDownload() {
    let pWidth = 595 // 595.28 is the width of a4
    let srcWidth = document.getElementById('abc').scrollWidth;
    let margin = 18; // narrow margin - 1.27 cm (36);
    let scale = (pWidth - margin * 2) / srcWidth;
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(document.getElementById('abc'), {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale,
        },
        callback: function () {
            window.open(pdf.output('bloburl'));
        }
    });
}

const improveExperience = () => {
  console.log(experienceInfo)

  Axios.post("http://localhost:5000/api/experience", { experience: experienceInfo })
      .then(res => {
        // console.log("Affter post")
        if (summary){
          res.data.unshift({summary: summary})
        }
        // console.log(res)
        dispatch({type: 'EXPERIENCE_FORM_SUCCESS', payload: res.data})

      })
      .catch(err => {
        console.log(err)
      });
}

const improveProjects= () => {
  // console.log("object")
  Axios.post("http://localhost:5000/api/projects", { projects: projectsInfo })
      .then(res => {
        if (res.data){
          // console.log(res.data)
          dispatch({type: 'PROJECTS_FORM_SUCCESS', payload: res.data})
        }
      })
      .catch(err => {
        console.log(err)
      });
}

const improveSummary = () => {
  console.log("object")
  Axios.post("http://localhost:5000/api/summary", {summ: summary })
      .then(res => {

        // console.log(res)
        experienceInfo.unshift({summary: res.data.generated})
        dispatch({type: 'EXPERIENCE_FORM_SUCCESS', payload: experienceInfo})
      })
      .catch(err => {
        // dispatch(translated(err))
        console.log(err)
      });
}
  

  return (
    <>

    <div className='lg:w-[50vw]'id="abc">


      <div ref = {printRef} className=" bg-gray-300 py-4 px-6 border-top border-black w-full lg:w-[50vw]">
        {resumeHeaderData && (
          <p className="text-2xl uppercase text-gray-800">{resumeHeaderData.fullname}</p>
        )}

        <div className="flex justify-between items-center">
          <div className="flex justify-start flex-col items-start leading-tight tracking-tight text-sm font-medium">
            {resumeHeaderData && resumeHeaderData.LinkedIN && (
              <div className="flex items-center text-gray-800 mr-6">
                <a href={resumeHeaderData.LinkedIN} className="no-underline text-black">
                  LinkedIn: {resumeHeaderData.LinkedIN}
                </a>
              </div>
            )}
            {resumeHeaderData && resumeHeaderData.Github && (
              <div className="flex items-center text-gray-800">
                <a href={resumeHeaderData.Github} className="no-underline text-black">
                  Github: {resumeHeaderData.Github}
                </a>
              </div>
            )}

          </div>
          <div className="flex justify-start flex-col items-start leading-tight tracking-tight text-sm font-medium">
            {resumeHeaderData && resumeHeaderData.phone && (
              <div className="flex items-center text-gray-800 mr-6">
                <a href={`tel:${resumeHeaderData.phone}`} className="no-underline text-black hover:text-blue-500">
                  Phone: {resumeHeaderData.phone}
                </a>
              </div>
            )}
            {resumeHeaderData && resumeHeaderData.email && (
              <div className="flex items-center text-gray-800 mr-6">
                <a href={`mailto:${resumeHeaderData.email}`} className="no-underline text-black hover:text-blue-500">
                  Email: {resumeHeaderData.email}
                </a>
              </div>
            )}

          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full lg:w-[50vw]">
        {educationInfo && educationInfo.length > 0 && <Education educationData={educationInfo} />}
        {/* <Education educationData={educationInfo} /> */}

        {summary &&
        <>
        <p className="px-4 text-xl underline font-bold">
          Professional Summary
        </p>

        <p className="text-gray-700 text-sm px-4">{summary}</p>
        </>
        }

        {/* <p className="px-4 border-top m-0 p-0"></p> */}
        {experienceInfo && experienceInfo.length > 0 && <Experience experienceData={experienceInfo} />}
        {skillsInfo && skillsInfo.length > 0 && <Skills skillsData={skillsInfo} />}
        {projectsInfo && projectsInfo.length > 0 && <Projects projectData={projectsInfo} />}
        {certs && certs.length > 0 && <Certification certData={certs} />}
        {achievementsInfo && achievementsInfo.length > 0 && <Acheivements acheivement={achievementsInfo.Acheivement
        } />}
        {/* <Experience experienceData={experienceInfo} />
        <Skills skillsData={skillsInfo} />
        <Projects projectData={projectsInfo} />
        <Certification certData={certs} />
        <Acheivements acheivement={achievementsInfo.Acheivement
        } /> */}
      </div>
    </div>

    <div className="flex justfiy-around gap-6 m-4 items-center">

    <button onClick={handleDownload} className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-1/8 px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Download PDF
  </button>

  <button onClick={improveExperience} className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-1/8 px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Improve Experience
  </button>

  <button onClick={improveProjects} className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-1/8 px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Improve Projects
  </button>
  
  <button onClick={improveSummary} className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-1/8 px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Improve Summary
  </button>
  </div>
    </>
  );
};

export default ResumeForm;



//! MORE ROBUST VERSION
// import React from "react";
// import { useSelector } from "react-redux";
// import Education from "./Education";
// import Experience from "./Experience";
// import "./abc.css";



// import Skills from "./Skills";
// import Projects from "./Projects.jsx";
// import Certification from "./Certification";
// import Acheivements from "./Acheivements";

// const ResumeForm = () => {



//   const selector = useSelector((state) => state);
//   let resumeHeaderData = selector["personalInfo"].personalInfo;
//   let educationInfo = selector["education"].Education;
//   let experienceInfo = selector["experience"].Experience;
//   let summary = experienceInfo["0"].summary;
//   experienceInfo = experienceInfo.slice(1);
//   let skillsInfo = selector["skills"].Skills;
//   let projectsInfo = selector["projects"].Projects;
//   let achievementsInfo = selector["acheivements"];
//   let certs = selector["certifications"].Certification;

//   const hasResumeHeaderData = resumeHeaderData && Object.keys(resumeHeaderData).length > 0;
//   const hasEducationInfo = educationInfo && educationInfo.length > 0;
//   const hasExperienceInfo = experienceInfo && experienceInfo.length > 0;
//   const hasSkillsInfo = skillsInfo && skillsInfo.length > 0;
//   const hasProjectsInfo = projectsInfo && projectsInfo.length > 0;
//   const hasCerts = certs && certs.length > 0;
//   const hasAchievementsInfo = achievementsInfo && Object.keys(achievementsInfo).length > 0;

//   console.log();
//   return (
//     <>

//       {hasResumeHeaderData && 
//       <div id="abc" className=" bg-gray-300 py-4 px-6 border-top border-black w-full lg:w-[50vw]">
//         {resumeHeaderData && (
//           <p className="text-2xl uppercase text-gray-800">{resumeHeaderData.fullname}</p>
//         )}

//         <div className="flex justify-between items-center">
//           <div className="flex justify-start flex-col items-start leading-tight tracking-tight text-sm font-medium">
//             {resumeHeaderData && resumeHeaderData.LinkedIN && (
//               <div className="flex items-center text-gray-800 mr-6">
//                 <a href={resumeHeaderData.LinkedIN} className="no-underline text-black">
//                   LinkedIn: {resumeHeaderData.LinkedIN}
//                 </a>
//               </div>
//             )}
//             {resumeHeaderData && resumeHeaderData.Github && (
//               <div className="flex items-center text-gray-800">
//                 <a href={resumeHeaderData.Github} className="no-underline text-black">
//                   Github: {resumeHeaderData.Github}
//                 </a>
//               </div>
//             )}

//           </div>
//           <div className="flex justify-start flex-col items-start leading-tight tracking-tight text-sm font-medium">
//             {resumeHeaderData && resumeHeaderData.phone && (
//               <div className="flex items-center text-gray-800 mr-6">
//                 <a href={`tel:${resumeHeaderData.phone}`} className="no-underline text-black hover:text-blue-500">
//                   Phone: {resumeHeaderData.phone}
//                 </a>
//               </div>
//             )}
//             {resumeHeaderData && resumeHeaderData.email && (
//               <div className="flex items-center text-gray-800 mr-6">
//                 <a href={`mailto:${resumeHeaderData.email}`} className="no-underline text-black hover:text-blue-500">
//                   Email: {resumeHeaderData.email}
//                 </a>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>}

//       <div className="bg-gray-100 w-full lg:w-[50vw]">
//       {hasEducationInfo && <Education educationData={educationInfo} />}
//       {summary && (
//         <>
//           <p className="px-4 text-xl underline font-bold">Professional Summary</p>
//           <p className="text-gray-700 text-sm px-4">{summary}</p>
//         </>
//       )}
//       {hasExperienceInfo && <Experience experienceData={experienceInfo} />}
//       {hasSkillsInfo && <Skills skillsData={skillsInfo} />}
//       {hasProjectsInfo && <Projects projectData={projectsInfo} />}
//       {hasCerts && <Certification certData={certs} />}
//       {hasAchievementsInfo && <Acheivements achievement={achievementsInfo.Acheivement} />}
//       {!hasEducationInfo && !hasExperienceInfo && !hasSkillsInfo && !hasProjectsInfo && !hasCerts && !hasAchievementsInfo && (
//         <p className="text-gray-700 text-sm px-4">No data available</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default ResumeForm;
