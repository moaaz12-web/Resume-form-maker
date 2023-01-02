const translatedReducer = (state="", action)=>{
    switch(action.type){
        case 'TRANSLATE_SUCCESS':
            return state = action.payload;
        
        default:
            return state;
    };
}

export default translatedReducer;