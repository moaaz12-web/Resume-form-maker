// export const translated = (val) => async (dispatch) => {
//     return {type:'TRANSLATE_SUCCESS', payload: val}
// }


export const translateRequest = () => ({ type: 'TRANSLATE_REQUEST' });
export const translateSuccess = (val) => ({ type: 'TRANSLATE_SUCCESS', payload: val });
export const translateFail = (error) => ({ type: 'TRANSLATE_FAIL', payload: error });

export const translated = (val) => async (dispatch) => {
    dispatch(translateRequest());
    try {
      dispatch(translateSuccess(val));
    } catch (error) {
      dispatch(translateFail(error));
    }
  };