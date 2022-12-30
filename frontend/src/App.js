import React from "react";
import {Route, Routes} from 'react-router-dom'
import Payments from "./components/Payments.jsx";
import ParentComp from "./components/ParentComp/ParentComp.jsx";
import './index.css'

function App() {
  

    

  return (
<Routes>
   
<Route path="/payments" element={<Payments />} />
<Route path="/" element={<ParentComp />} />

  </Routes>
  );
}

export default App;
