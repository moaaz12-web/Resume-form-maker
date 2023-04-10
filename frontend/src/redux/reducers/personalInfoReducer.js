
  
  const initialState = {
    personalInfo:'',
    loading: false,
    error: null
  };
  
  const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PERSONAL_INFO_FORM_SUCCESS':
        return {
          ...state,
          personalInfo: action.payload

        };
        case 'RESET_DATA':
          return {
            initialState
          }
      default:
        return state;
    }
  };
  
  export default personalInfoReducer;
  