const initialState = {
    Experience:'',
    loading: false,
    error: null
  };
  
  const ExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EXPERIENCE_FORM_SUCCESS':
        return {
          ...state,
          Experience: action.payload

        };
        case 'RESET_DATA':
          return {
            initialState
          }
      default:
        return state;
    }
  };
  
  export default ExperienceReducer;
  