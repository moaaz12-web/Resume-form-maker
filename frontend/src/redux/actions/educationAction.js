export const generateEducationFormRequest = () => ({ type: 'EDUCATION_FORM_REQUEST' });
export const generateEducationFormSuccess = (EducationFormdata) => ({ type: 'EDUCATION_FORM_SUCCESS', payload: EducationFormdata });
export const generateEducationFormFail = (error) => ({ type: 'EDUCATION_FORM_FAIL', payload: error });


export const EducationAction = (val) => async (dispatch) => {
    dispatch(generateEducationFormRequest());
    try {
      dispatch(generateEducationFormSuccess(val));

    } catch (error) {
      dispatch(generateEducationFormFail(error));
    }
    
  };