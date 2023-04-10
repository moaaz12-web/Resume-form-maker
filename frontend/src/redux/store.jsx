import personalInfoReducer from "./reducers/personalInfoReducer.js";
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import educationReducer from "./reducers/educationReducer.js";
import ExperienceReducer from "./reducers/experienceReducer.js";
import projectsReducer from './reducers/projectsReducer.js';
import certificationsReducer from './reducers/certificationsReducer.js';
import skillsReducer from './reducers/skillsReducer.js';
import acheivementsReduer from './reducers/AcheivementsReducer.js'
import resetReducer from './reducers/resetReducer.js'
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const middleware = [thunk];

const reducer = combineReducers({
  personalInfo: personalInfoReducer,
  education: educationReducer,
  experience : ExperienceReducer,
  projects: projectsReducer,
  certifications: certificationsReducer,
  skills: skillsReducer,
  acheivements: acheivementsReduer,
  reset: resetReducer,
});

let store;
if(typeof(Storage) !== "undefined") {
    const persistedState = loadFromLocalStorage();
    store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)));
    store.subscribe(() => saveToLocalStorage(store.getState()));
} else {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
}

export default store;
