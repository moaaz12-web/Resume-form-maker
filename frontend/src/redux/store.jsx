

import generatedReducer from "./reducers/generatedReducer.js";
import translatedReducer from "./reducers/translatedReducer.js";
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import translatedReducer from "./reducers/translatedReducer.jsx"

const middleware = [thunk];


const reducer = combineReducers({
  generated: generatedReducer,
  translated:translatedReducer
})

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
); 