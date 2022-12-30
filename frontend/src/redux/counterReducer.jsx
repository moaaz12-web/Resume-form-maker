const counterReducer = (state="", action)=>{
    switch(action.type){
        case 'INPUT_VAL':
            return state = action.payload;
        
        default:
            return state;
    };
}

export default counterReducer;