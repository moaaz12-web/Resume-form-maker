// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./dropDownReducer";

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// });


import { configureStore } from "@reduxjs/toolkit";
import generatedReducer from "./generatedAction"
// import {applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );


// export default createStore({
//   reducer: {
//     dropdown: dropDownReducer,
//     counter: counterReducer

//   }, initialStae, composeWithDevTools(applyMiddleware(...middleware)

const reducer = combineReducers({
  generated: generatedReducer
})

export default createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);