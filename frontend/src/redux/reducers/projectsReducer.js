const initialState = {
    Projects:'',
    loading: false,
    error: null
  };
  
  const ProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PROJECTS_FORM_SUCCESS':
        return {
          ...state,
          Projects: action.payload

        };
        case 'RESET_DATA':
          return {
            initialState
          }
      default:
        return state;
    }
  };
  
  export default ProjectsReducer;
  