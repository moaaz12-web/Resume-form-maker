const generatedReducer = (state="", action)=>{
    switch(action.type){
        case 'GENERATE_SUCCESS':
            return state = action.payload;
        
        default:
            return state;
    };
}

export default generatedReducer;