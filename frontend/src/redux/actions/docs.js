export const generateRequest = () => ({ type: 'DOC_REQUEST' });
export const generateSuccess = (val) => ({ type: 'DOC_SUCCESS', payload: val });
export const generateFail = (error) => ({ type: 'DOC_FAIL', payload: error });

export const docs = (val) => async (dispatch) => {
    dispatch(generateRequest());
    try {
      dispatch(generateSuccess(val));
    } catch (error) {
      dispatch(generateFail(error));
    }
  };