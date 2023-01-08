// const translatedReducer = (state="", action)=>{
//     switch(action.type){
//         case 'TRANSLATE_SUCCESS':
//             return state = action.payload;
        
//         default:
//             return state;
//     };
// }

// export default translatedReducer;


const translatedReducer = (state = {}, action) => {
    switch (action.type) {
      case 'TRANSLATE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'TRANSLATE_SUCCESS':
        return {
          ...state,
          loading: false,
          val: action.payload,
        };
      case 'TRANSLATE_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default translatedReducer;
  