export const generatePersonalInfoFormRequest = () => ({ type: 'PERSONAL_INFO_FORM_REQUEST' });
export const generatePersonalInfoFormSuccess = (personalinfoFormdata) => ({ type: 'PERSONAL_INFO_FORM_SUCCESS', payload: personalinfoFormdata });
export const generatePersonalInfoFormFail = (error) => ({ type: 'PERSONAL_INFO_FORM_FAIL', payload: error });


export const personalInfoAction = (val) => async (dispatch) => {
    dispatch(generatePersonalInfoFormRequest());
    try {
      dispatch(generatePersonalInfoFormSuccess(val));

    } catch (error) {
      dispatch(generatePersonalInfoFormFail(error));
    }
    
  };