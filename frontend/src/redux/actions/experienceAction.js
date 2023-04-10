export const generateExperienceFormRequest = () => ({ type: 'EXPERIENCE_FORM_REQUEST' });
export const generateExperienceFormSuccess = (ExperienceFormdata) => ({ type: 'EXPERIENCE_FORM_SUCCESS', payload: ExperienceFormdata });
export const generateExperienceFormFail = (error) => ({ type: 'EXPERIENCE_FORM_FAIL', payload: error });


export const ExperienceAction = (val) => async (dispatch) => {
    dispatch(generateExperienceFormRequest());
    try {
      dispatch(generateExperienceFormSuccess(val));

    } catch (error) {
      dispatch(generateExperienceFormFail(error));
    }
    
  };