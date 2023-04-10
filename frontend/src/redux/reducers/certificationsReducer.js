const initialState = {
    Certification:'',
    loading: false,
    error: null
  };
  
  const CertificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CERTIFICATION_FORM_SUCCESS':
        return {
          ...state,
          Certification: action.payload

        };
        case 'RESET_DATA':
          return {
            initialState
          }
      default:
        return state;
    }
  };
  
  export default CertificationReducer;
  