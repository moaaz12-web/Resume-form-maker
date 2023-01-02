


import generatedReducer from "./generatedAction"
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import translatedReducer from "./translatedAction"

const middleware = [thunk];


const reducer = combineReducers({
  generated: generatedReducer,
  translated:translatedReducer
})

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);