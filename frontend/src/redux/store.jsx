// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./dropDownReducer";

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// });


import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "./dropDownReducer";
import counterReducer from "./counterReducer"
import {applyMiddleware } from 'redux';
import thunk from "redux-thunk" 


export default configureStore({
  reducer: {
    dropdown: dropDownReducer,
    counter: counterReducer
    
  }
});





