const initialState = {
    Education:'',
    loading: false,
    error: null
  };
  
  const EducationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDUCATION_FORM_SUCCESS':
        return {
          ...state,
          Education: action.payload

        };
        case 'RESET_DATA':
          return {
            initialState
          }
      default:
        return state;
    }
  };
  
  export default EducationReducer;
  