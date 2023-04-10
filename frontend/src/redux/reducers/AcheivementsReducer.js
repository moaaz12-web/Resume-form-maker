const initialState = {
    Acheivement:'',
    loading: false,
    error: null
  };
  
  const AcheivementReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'ACHEIVEMENT_FORM_SUCCESS':
        return {
          ...state,
          Acheivement: action.payload

        };
      case 'RESET_DATA':
        return {
          initialState
        }
      default:
        return state;
    }
  };
  
  export default AcheivementReducer;
  