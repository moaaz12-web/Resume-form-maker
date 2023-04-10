import React from "react";
import WireFrame from "./components/ParentComp/WireFrame.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ResumeForm from "./components/ParentComp/ResumeForm.jsx";
// import { resetData } from './redux/actions/resetData.js';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<WireFrame />} />
        <Route path="/resume" element={<ResumeForm />} />
      </Routes>
    </>
  );
}

export default App;
