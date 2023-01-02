export const generated = (val) => async (dispatch) => {
    return {type:'GENERATE_SUCCESS', payload: val}
}

