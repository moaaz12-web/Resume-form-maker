const initialState = {
    Skills:'',
    loading: false,
    error: null
  };
  
  const SkillsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SKILLS_FORM_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'SKILLS_FORM_SUCCESS':
        return {
          ...state,
          Skills: action.payload

        };
      case 'SKILLS_FORM_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case 'RESET_DATA':
          return {
            initialState
          }
      default:
        return state;
    }
  };
  
  export default SkillsReducer;
  