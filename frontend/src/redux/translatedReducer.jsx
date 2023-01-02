export const translated = (val) => async (dispatch) => {
    return {type:'TRANSLATE_SUCCESS', payload: val}
}

